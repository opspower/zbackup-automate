import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, mergeMap, map, filter } from 'rxjs/operators';
import { HttpStatus } from 'app/types/types';
import { CreateNotification } from 'app/entities/notifications/notification.actions';
import { Type } from 'app/entities/notifications/notification.model';

import {
  GetNodes,
  GetNodesSuccess,
  GetNodesFailure,
  GetNode,
  GetNodeSuccess,
  GetNodeFailure,
  UpdateNodeEnvironment,
  UpdateNodeEnvironmentSuccess,
  UpdateNodeEnvironmentFailure,
  UpdateNodeTags,
  UpdateNodeTagsSuccess,
  UpdateNodeTagsFailure,
  DeleteNode,
  DeleteNodeSuccess,
  DeleteNodeFailure,
  NodesSuccessPayload,
  NodeActionTypes
} from './infra-nodes.actions';

import {
  InfraNodeRequests
} from './infra-nodes.requests';

@Injectable()
export class InfraNodeEffects {
  constructor(
    private actions$: Actions,
    private requests: InfraNodeRequests
  ) { }

  getNodes$ = createEffect(() =>
    this.actions$.pipe(
    ofType(NodeActionTypes.GET_ALL),
    mergeMap((action: GetNodes) =>
      this.requests.getNodes(action.payload).pipe(
        map((resp: NodesSuccessPayload) => new GetNodesSuccess(resp)),
        catchError((error: HttpErrorResponse) =>
          observableOf(new GetNodesFailure(error)))))));

  getNodesFailure$ = createEffect(() =>
    this.actions$.pipe(
    ofType(NodeActionTypes.GET_ALL_FAILURE),
    map(({ payload }: GetNodesFailure) => {
      const msg = payload.error.error;
      return new CreateNotification({
        type: Type.error,
        message: `Could not get nodes: ${msg || payload.error}`
      });
    })));

  deleteNode$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NodeActionTypes.DELETE),
      mergeMap(({ payload: { server_id, org_id, name } }: DeleteNode) =>
        this.requests.deleteNode(server_id, org_id, name).pipe(
          map(() => new DeleteNodeSuccess({ name })),
          catchError((error: HttpErrorResponse) =>
            observableOf(new DeleteNodeFailure(error)))))));

  deleteNodeSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NodeActionTypes.DELETE_SUCCESS),
      map(({ payload: { name } }: DeleteNodeSuccess) => {
        return new CreateNotification({
          type: Type.info,
          message: `Successfully deleted node - ${name}.`
        });
    })));

  deleteNodeFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NodeActionTypes.DELETE_FAILURE),
      map(({ payload: { error } }: DeleteNodeFailure) => {
        const msg = error.error;
        return new CreateNotification({
          type: Type.error,
          message: `Could not delete node: ${msg || error}`
        });
    })));

  getNode$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NodeActionTypes.GET),
      mergeMap(({ payload: { server_id, org_id, name } }: GetNode) =>
        this.requests.getNode(server_id, org_id, name).pipe(
          map((resp) => new GetNodeSuccess(resp)),
          catchError((error: HttpErrorResponse) => observableOf(new GetNodeFailure(error)))))));

  getNodeFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NodeActionTypes.GET_FAILURE),
      map(({ payload }: GetNodeFailure) => {
        const msg = payload.error.error;
        return new CreateNotification({
          type: Type.error,
          message: `Could not get node: ${msg || payload.error}`
        });
    })));

  updateNodeEnvironment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NodeActionTypes.UPDATE_ENVIRONMENT),
      mergeMap(({ payload }: UpdateNodeEnvironment) =>
        this.requests.updateNodeEnvironment(payload.node).pipe(
          map((resp) => new UpdateNodeEnvironmentSuccess(resp)),
          catchError((error: HttpErrorResponse) =>
            observableOf(new UpdateNodeEnvironmentFailure(error)))))));

  updateNodeEnvironmentSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NodeActionTypes.UPDATE_ENVIRONMENT_SUCCESS),
      map(({ }: UpdateNodeEnvironmentSuccess) => new CreateNotification({
        type: Type.info,
        message: 'Successfully updated node environment.'
      }))));

  updateNodeEnvironmentFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NodeActionTypes.UPDATE_ENVIRONMENT_FAILURE),
      filter(({ payload }: UpdateNodeEnvironmentFailure) => payload.status !== HttpStatus.CONFLICT),
      map(({ payload }: UpdateNodeEnvironmentFailure) => new CreateNotification({
        type: Type.error,
        message: `Could not update node environment: ${payload.error.error || payload}.`
      }))));

  updateNodeTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NodeActionTypes.UPDATE_TAGS),
      mergeMap(({ payload }: UpdateNodeTags) =>
        this.requests.updateNodeTags(payload.node).pipe(
          map((resp) => new UpdateNodeTagsSuccess(resp)),
          catchError((error: HttpErrorResponse) =>
            observableOf(new UpdateNodeTagsFailure(error)))))));

  updateNodeTagsSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NodeActionTypes.UPDATE_TAGS_SUCCESS),
      map(({ }: UpdateNodeTagsSuccess) => new CreateNotification({
        type: Type.info,
        message: 'Successfully updated node tags.'
      }))));

  updateNodeTagsFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NodeActionTypes.UPDATE_TAGS_FAILURE),
      filter(({ payload }: UpdateNodeTagsFailure) => payload.status !== HttpStatus.CONFLICT),
      map(({ payload }: UpdateNodeTagsFailure) => new CreateNotification({
        type: Type.error,
        message: `Could not update node tags: ${payload.error.error || payload}.`
      }))));
}
