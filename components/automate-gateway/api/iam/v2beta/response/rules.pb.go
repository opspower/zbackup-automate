// Code generated by protoc-gen-go. DO NOT EDIT.
// source: components/automate-gateway/api/iam/v2beta/response/rules.proto

package response // import "github.com/chef/automate/components/automate-gateway/api/iam/v2beta/response"

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import common "github.com/chef/automate/components/automate-gateway/api/iam/v2beta/common"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

type CreateRuleResp struct {
	Rule                 *common.Rule `protobuf:"bytes,1,opt,name=rule,proto3" json:"rule,omitempty"`
	XXX_NoUnkeyedLiteral struct{}     `json:"-"`
	XXX_unrecognized     []byte       `json:"-"`
	XXX_sizecache        int32        `json:"-"`
}

func (m *CreateRuleResp) Reset()         { *m = CreateRuleResp{} }
func (m *CreateRuleResp) String() string { return proto.CompactTextString(m) }
func (*CreateRuleResp) ProtoMessage()    {}
func (*CreateRuleResp) Descriptor() ([]byte, []int) {
	return fileDescriptor_rules_e9c2f1dd6be42296, []int{0}
}
func (m *CreateRuleResp) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CreateRuleResp.Unmarshal(m, b)
}
func (m *CreateRuleResp) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CreateRuleResp.Marshal(b, m, deterministic)
}
func (dst *CreateRuleResp) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreateRuleResp.Merge(dst, src)
}
func (m *CreateRuleResp) XXX_Size() int {
	return xxx_messageInfo_CreateRuleResp.Size(m)
}
func (m *CreateRuleResp) XXX_DiscardUnknown() {
	xxx_messageInfo_CreateRuleResp.DiscardUnknown(m)
}

var xxx_messageInfo_CreateRuleResp proto.InternalMessageInfo

func (m *CreateRuleResp) GetRule() *common.Rule {
	if m != nil {
		return m.Rule
	}
	return nil
}

func init() {
	proto.RegisterType((*CreateRuleResp)(nil), "chef.automate.api.iam.v2beta.CreateRuleResp")
}

func init() {
	proto.RegisterFile("components/automate-gateway/api/iam/v2beta/response/rules.proto", fileDescriptor_rules_e9c2f1dd6be42296)
}

var fileDescriptor_rules_e9c2f1dd6be42296 = []byte{
	// 190 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0xb2, 0x4f, 0xce, 0xcf, 0x2d,
	0xc8, 0xcf, 0x4b, 0xcd, 0x2b, 0x29, 0xd6, 0x4f, 0x2c, 0x2d, 0xc9, 0xcf, 0x4d, 0x2c, 0x49, 0xd5,
	0x4d, 0x4f, 0x2c, 0x49, 0x2d, 0x4f, 0xac, 0xd4, 0x4f, 0x2c, 0xc8, 0xd4, 0xcf, 0x4c, 0xcc, 0xd5,
	0x2f, 0x33, 0x4a, 0x4a, 0x2d, 0x49, 0xd4, 0x2f, 0x4a, 0x2d, 0x2e, 0xc8, 0xcf, 0x2b, 0x4e, 0xd5,
	0x2f, 0x2a, 0xcd, 0x49, 0x2d, 0xd6, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x92, 0x49, 0xce, 0x48,
	0x4d, 0xd3, 0x83, 0x69, 0xd5, 0x4b, 0x2c, 0xc8, 0xd4, 0xcb, 0x4c, 0xcc, 0xd5, 0x83, 0x68, 0x91,
	0xb2, 0x25, 0xc1, 0xf8, 0xe4, 0xfc, 0xdc, 0xdc, 0xfc, 0x3c, 0x64, 0xc3, 0x95, 0x3c, 0xb8, 0xf8,
	0x9c, 0x8b, 0x52, 0x13, 0x4b, 0x52, 0x83, 0x4a, 0x73, 0x52, 0x83, 0x52, 0x8b, 0x0b, 0x84, 0xcc,
	0xb8, 0x58, 0x40, 0x0a, 0x24, 0x18, 0x15, 0x18, 0x35, 0xb8, 0x8d, 0x94, 0xf4, 0xf0, 0xd9, 0xae,
	0x07, 0xd6, 0x05, 0x56, 0xef, 0xe4, 0x17, 0xe5, 0x93, 0x9e, 0x59, 0x92, 0x51, 0x9a, 0xa4, 0x97,
	0x9c, 0x9f, 0xab, 0x0f, 0xd2, 0x05, 0x77, 0x8f, 0x3e, 0x19, 0x41, 0x90, 0xc4, 0x06, 0x76, 0xa0,
	0x31, 0x20, 0x00, 0x00, 0xff, 0xff, 0x9e, 0xb5, 0xea, 0x6f, 0x40, 0x01, 0x00, 0x00,
}
