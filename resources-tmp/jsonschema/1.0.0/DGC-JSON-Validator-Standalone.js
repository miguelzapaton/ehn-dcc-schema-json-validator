"use strict";
module.exports = validate20;
module.exports.default = validate20;
const schema31 = {"$schema":"https://json-schema.org/draft/2020-12/schema","$id":"https://id.uvci.eu/DGC.schema.json","title":"EU DGC","description":"EU Digital Green Certificate","$comment":"Schema version 1.0.0","required":["ver","nam","dob"],"type":"object","properties":{"ver":{"title":"Schema version","description":"Version of the schema, according to Semantic versioning (ISO, https://semver.org/ version 2.0.0 or newer)","type":"string","pattern":"^\\d+.\\d+.\\d+$","examples":["1.0.0"]},"nam":{"description":"Surname(s), given name(s) - in that order","required":["fnt"],"type":"object","properties":{"fn":{"title":"Family name","description":"The family or primary name(s) of the person addressed in the certificate","type":"string","maxLength":50,"examples":["d'Červenková Panklová"]},"fnt":{"title":"Standardised family name","description":"The family name(s) of the person transliterated","type":"string","pattern":"^[A-Z<]*$","maxLength":50,"examples":["DCERVENKOVA<PANKLOVA"]},"gn":{"title":"Given name","description":"The given name(s) of the person addressed in the certificate","type":"string","maxLength":50,"examples":["Jiřina-Maria Alena"]},"gnt":{"title":"Standardised given name","description":"The given name(s) of the person transliterated","type":"string","pattern":"^[A-Z<]*$","maxLength":50,"examples":["JIRINA<MARIA<ALENA"]}}},"dob":{"title":"Date of birth","description":"Date of Birth of the person addressed in the DGC. ISO 8601 date format restricted to range 1900-2099","type":"string","format":"date","pattern":"(19|20)\\d{2}-\\d{2}-\\d{2}","examples":["1979-04-14"]},"v":{"description":"Vaccination Group","type":"array","items":{"description":"Vaccination Entry","required":["tg","vp","mp","ma","dn","sd","dt","co","is","ci"],"type":"object","properties":{"tg":{"description":"disease or agent targeted","type":"string","oneOf":[{"const":"840539006"}]},"vp":{"description":"vaccine or prophylaxis","type":"string","oneOf":[{"const":"1119305005"},{"const":"1119349007"},{"const":"J07BX03"}]},"mp":{"description":"vaccine medicinal product","type":"string","oneOf":[{"const":"EU/1/20/1528"},{"const":"EU/1/20/1507"},{"const":"EU/1/21/1529"},{"const":"EU/1/20/1525"},{"const":"CVnCoV"},{"const":"Sputnik-V"},{"const":"Convidecia"},{"const":"EpiVacCorona"},{"const":"BBIBP-CorV"},{"const":"Inactivated-SARS-CoV-2-Vero-Cell"},{"const":"CoronaVac"},{"const":"Covaxin"}]},"ma":{"description":"Marketing Authorization Holder - if no MAH present, then manufacturer","type":"string","oneOf":[{"const":"ORG-100001699"},{"const":"ORG-100030215"},{"const":"ORG-100001417"},{"const":"ORG-100031184"},{"const":"ORG-100006270"},{"const":"ORG-100013793"},{"const":"ORG-100020693"},{"const":"ORG-100010771"},{"const":"ORG-100024420"},{"const":"ORG-100032020"},{"const":"Gamaleya-Research-Institute"},{"const":"Vector-Institute"},{"const":"Sinovac-Biotech"},{"const":"Bharat-Biotech"}]},"dn":{"description":"Dose Number","type":"integer","minimum":1,"maximum":9},"sd":{"description":"Total Series of Doses","type":"integer","minimum":1,"maximum":9},"dt":{"description":"Date of Vaccination","type":"string","format":"date","$comment":"SemanticSG: constrain to specific date range?"},"co":{"description":"Country of Vaccination","type":"string","pattern":"[A-Z]{1,10}"},"is":{"description":"Certificate Issuer","type":"string","maxLength":50},"ci":{"description":"Unique Certificate Identifier: UVCI","type":"string","maxLength":50}}},"minItems":1},"t":{"description":"Test Group","type":"array","items":{"description":"Test Entry","required":["tg","tt","sc","tr","tc","co","is","ci"],"type":"object","properties":{"tg":{"description":"EU eHealthNetwork: Value Sets for Digital Green Certificates. version 1.0, 2021-04-16, section 2.1","type":"string","oneOf":[{"const":"840539006"}]},"tt":{"description":"Type of Test","type":"string"},"nm":{"description":"NAA Test Name","type":"string"},"ma":{"description":"RAT Test name and manufacturer","type":"string","oneOf":[{"const":"344"},{"const":"345"},{"const":"1065"},{"const":"1097"},{"const":"1162"},{"const":"1173"},{"const":"1180"},{"const":"1218"},{"const":"1223"},{"const":"1232"},{"const":"1242"},{"const":"1244"},{"const":"1268"},{"const":"1271"},{"const":"1278"},{"const":"1304"},{"const":"1331"},{"const":"1333"},{"const":"1341"},{"const":"1343"},{"const":"1360"},{"const":"1363"},{"const":"1481"},{"const":"1484"},{"const":"1489"},{"const":"1767"}]},"sc":{"description":"Date/Time of Sample Collection","type":"string","format":"date-time"},"dr":{"description":"Date/Time of Test Result","type":"string","format":"date-time"},"tr":{"description":"Test Result","type":"string","oneOf":[{"const":"260373001"},{"const":"260415000"}]},"tc":{"description":"Testing Centre","type":"string","maxLength":50},"co":{"description":"Country of Test","type":"string","pattern":"[A-Z]{1,10}"},"is":{"description":"Certificate Issuer","type":"string","maxLength":50},"ci":{"description":"Unique Certificate Identifier, UVCI","type":"string","maxLength":50}}},"minItems":1},"r":{"description":"Recovery Group","type":"array","items":{"description":"Recovery Entry","required":["tg","fr","co","is","df","du","ci"],"type":"object","properties":{"tg":{"description":"EU eHealthNetwork: Value Sets for Digital Green Certificates. version 1.0, 2021-04-16, section 2.1","type":"string","oneOf":[{"const":"840539006"}]},"fr":{"description":"ISO 8601 Date of First Positive Test Result","type":"string","format":"date"},"co":{"description":"Country of Test","type":"string","pattern":"[A-Z]{1,10}"},"is":{"description":"Certificate Issuer","type":"string","maxLength":50},"df":{"description":"ISO 8601 Date: Certificate Valid From","type":"string","format":"date"},"du":{"description":"Certificate Valid Until","type":"string","format":"date"},"ci":{"description":"Unique Certificate Identifier, UVCI","type":"string","maxLength":50}}},"minItems":1}}};
const pattern4 = new RegExp("^\\d+.\\d+.\\d+$", "u");
const pattern5 = new RegExp("^[A-Z<]*$", "u");
const pattern7 = new RegExp("(19|20)\\d{2}-\\d{2}-\\d{2}", "u");
const pattern8 = new RegExp("[A-Z]{1,10}", "u");
const func3 = require("ajv/dist/runtime/ucs2length").default;
const func0 = require("ajv/dist/runtime/equal").default;
const formats0 = require("ajv-formats/dist/formats").fullFormats.date;
const formats4 = require("ajv-formats/dist/formats").fullFormats["date-time"];

function validate20(data, {instancePath="", parentData, parentDataProperty, rootData=data, dynamicAnchors={}}={}){
/*# sourceURL="https://id.uvci.eu/DGC.schema.json" */;
let vErrors = null;
let errors = 0;
const evaluated0 = validate20.evaluated;
if(evaluated0.dynamicProps){
evaluated0.props = undefined;
}
if(evaluated0.dynamicItems){
evaluated0.items = undefined;
}
if(errors === 0){
if(data && typeof data == "object" && !Array.isArray(data)){
let missing0;
if((((data.ver === undefined) && (missing0 = "ver")) || ((data.nam === undefined) && (missing0 = "nam"))) || ((data.dob === undefined) && (missing0 = "dob"))){
validate20.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'",schema:schema31.required,parentSchema:schema31,data}];
return false;
}
else {
if(data.ver !== undefined){
let data0 = data.ver;
const _errs2 = errors;
if(errors === _errs2){
if(typeof data0 === "string"){
if(!pattern4.test(data0)){
validate20.errors = [{instancePath:instancePath+"/ver",schemaPath:"#/properties/ver/pattern",keyword:"pattern",params:{pattern: "^\\d+.\\d+.\\d+$"},message:"must match pattern \""+"^\\d+.\\d+.\\d+$"+"\"",schema:"^\\d+.\\d+.\\d+$",parentSchema:schema31.properties.ver,data:data0}];
return false;
}
}
else {
validate20.errors = [{instancePath:instancePath+"/ver",schemaPath:"#/properties/ver/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.ver.type,parentSchema:schema31.properties.ver,data:data0}];
return false;
}
}
var valid0 = _errs2 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.nam !== undefined){
let data1 = data.nam;
const _errs4 = errors;
if(errors === _errs4){
if(data1 && typeof data1 == "object" && !Array.isArray(data1)){
let missing1;
if((data1.fnt === undefined) && (missing1 = "fnt")){
validate20.errors = [{instancePath:instancePath+"/nam",schemaPath:"#/properties/nam/required",keyword:"required",params:{missingProperty: missing1},message:"must have required property '"+missing1+"'",schema:schema31.properties.nam.required,parentSchema:schema31.properties.nam,data:data1}];
return false;
}
else {
if(data1.fn !== undefined){
let data2 = data1.fn;
const _errs6 = errors;
if(errors === _errs6){
if(typeof data2 === "string"){
if(func3(data2) > 50){
validate20.errors = [{instancePath:instancePath+"/nam/fn",schemaPath:"#/properties/nam/properties/fn/maxLength",keyword:"maxLength",params:{limit: 50},message:"must NOT have more than 50 characters",schema:50,parentSchema:schema31.properties.nam.properties.fn,data:data2}];
return false;
}
}
else {
validate20.errors = [{instancePath:instancePath+"/nam/fn",schemaPath:"#/properties/nam/properties/fn/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.nam.properties.fn.type,parentSchema:schema31.properties.nam.properties.fn,data:data2}];
return false;
}
}
var valid1 = _errs6 === errors;
}
else {
var valid1 = true;
}
if(valid1){
if(data1.fnt !== undefined){
let data3 = data1.fnt;
const _errs8 = errors;
if(errors === _errs8){
if(typeof data3 === "string"){
if(func3(data3) > 50){
validate20.errors = [{instancePath:instancePath+"/nam/fnt",schemaPath:"#/properties/nam/properties/fnt/maxLength",keyword:"maxLength",params:{limit: 50},message:"must NOT have more than 50 characters",schema:50,parentSchema:schema31.properties.nam.properties.fnt,data:data3}];
return false;
}
else {
if(!pattern5.test(data3)){
validate20.errors = [{instancePath:instancePath+"/nam/fnt",schemaPath:"#/properties/nam/properties/fnt/pattern",keyword:"pattern",params:{pattern: "^[A-Z<]*$"},message:"must match pattern \""+"^[A-Z<]*$"+"\"",schema:"^[A-Z<]*$",parentSchema:schema31.properties.nam.properties.fnt,data:data3}];
return false;
}
}
}
else {
validate20.errors = [{instancePath:instancePath+"/nam/fnt",schemaPath:"#/properties/nam/properties/fnt/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.nam.properties.fnt.type,parentSchema:schema31.properties.nam.properties.fnt,data:data3}];
return false;
}
}
var valid1 = _errs8 === errors;
}
else {
var valid1 = true;
}
if(valid1){
if(data1.gn !== undefined){
let data4 = data1.gn;
const _errs10 = errors;
if(errors === _errs10){
if(typeof data4 === "string"){
if(func3(data4) > 50){
validate20.errors = [{instancePath:instancePath+"/nam/gn",schemaPath:"#/properties/nam/properties/gn/maxLength",keyword:"maxLength",params:{limit: 50},message:"must NOT have more than 50 characters",schema:50,parentSchema:schema31.properties.nam.properties.gn,data:data4}];
return false;
}
}
else {
validate20.errors = [{instancePath:instancePath+"/nam/gn",schemaPath:"#/properties/nam/properties/gn/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.nam.properties.gn.type,parentSchema:schema31.properties.nam.properties.gn,data:data4}];
return false;
}
}
var valid1 = _errs10 === errors;
}
else {
var valid1 = true;
}
if(valid1){
if(data1.gnt !== undefined){
let data5 = data1.gnt;
const _errs12 = errors;
if(errors === _errs12){
if(typeof data5 === "string"){
if(func3(data5) > 50){
validate20.errors = [{instancePath:instancePath+"/nam/gnt",schemaPath:"#/properties/nam/properties/gnt/maxLength",keyword:"maxLength",params:{limit: 50},message:"must NOT have more than 50 characters",schema:50,parentSchema:schema31.properties.nam.properties.gnt,data:data5}];
return false;
}
else {
if(!pattern5.test(data5)){
validate20.errors = [{instancePath:instancePath+"/nam/gnt",schemaPath:"#/properties/nam/properties/gnt/pattern",keyword:"pattern",params:{pattern: "^[A-Z<]*$"},message:"must match pattern \""+"^[A-Z<]*$"+"\"",schema:"^[A-Z<]*$",parentSchema:schema31.properties.nam.properties.gnt,data:data5}];
return false;
}
}
}
else {
validate20.errors = [{instancePath:instancePath+"/nam/gnt",schemaPath:"#/properties/nam/properties/gnt/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.nam.properties.gnt.type,parentSchema:schema31.properties.nam.properties.gnt,data:data5}];
return false;
}
}
var valid1 = _errs12 === errors;
}
else {
var valid1 = true;
}
}
}
}
}
}
else {
validate20.errors = [{instancePath:instancePath+"/nam",schemaPath:"#/properties/nam/type",keyword:"type",params:{type: "object"},message:"must be object",schema:schema31.properties.nam.type,parentSchema:schema31.properties.nam,data:data1}];
return false;
}
}
var valid0 = _errs4 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.dob !== undefined){
let data6 = data.dob;
const _errs14 = errors;
if(errors === _errs14){
if(errors === _errs14){
if(typeof data6 === "string"){
if(!pattern7.test(data6)){
validate20.errors = [{instancePath:instancePath+"/dob",schemaPath:"#/properties/dob/pattern",keyword:"pattern",params:{pattern: "(19|20)\\d{2}-\\d{2}-\\d{2}"},message:"must match pattern \""+"(19|20)\\d{2}-\\d{2}-\\d{2}"+"\"",schema:"(19|20)\\d{2}-\\d{2}-\\d{2}",parentSchema:schema31.properties.dob,data:data6}];
return false;
}
else {
if(!(formats0.validate(data6))){
validate20.errors = [{instancePath:instancePath+"/dob",schemaPath:"#/properties/dob/format",keyword:"format",params:{format: "date"},message:"must match format \""+"date"+"\"",schema:"date",parentSchema:schema31.properties.dob,data:data6}];
return false;
}
}
}
else {
validate20.errors = [{instancePath:instancePath+"/dob",schemaPath:"#/properties/dob/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.dob.type,parentSchema:schema31.properties.dob,data:data6}];
return false;
}
}
}
var valid0 = _errs14 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.v !== undefined){
let data7 = data.v;
const _errs16 = errors;
if(errors === _errs16){
if(Array.isArray(data7)){
if(data7.length < 1){
validate20.errors = [{instancePath:instancePath+"/v",schemaPath:"#/properties/v/minItems",keyword:"minItems",params:{limit: 1},message:"must NOT have fewer than 1 items",schema:1,parentSchema:schema31.properties.v,data:data7}];
return false;
}
else {
var valid2 = true;
const len0 = data7.length;
for(let i0=0; i0<len0; i0++){
let data8 = data7[i0];
const _errs18 = errors;
if(errors === _errs18){
if(data8 && typeof data8 == "object" && !Array.isArray(data8)){
let missing2;
if(((((((((((data8.tg === undefined) && (missing2 = "tg")) || ((data8.vp === undefined) && (missing2 = "vp"))) || ((data8.mp === undefined) && (missing2 = "mp"))) || ((data8.ma === undefined) && (missing2 = "ma"))) || ((data8.dn === undefined) && (missing2 = "dn"))) || ((data8.sd === undefined) && (missing2 = "sd"))) || ((data8.dt === undefined) && (missing2 = "dt"))) || ((data8.co === undefined) && (missing2 = "co"))) || ((data8.is === undefined) && (missing2 = "is"))) || ((data8.ci === undefined) && (missing2 = "ci"))){
validate20.errors = [{instancePath:instancePath+"/v/" + i0,schemaPath:"#/properties/v/items/required",keyword:"required",params:{missingProperty: missing2},message:"must have required property '"+missing2+"'",schema:schema31.properties.v.items.required,parentSchema:schema31.properties.v.items,data:data8}];
return false;
}
else {
if(data8.tg !== undefined){
let data9 = data8.tg;
const _errs20 = errors;
if(typeof data9 !== "string"){
validate20.errors = [{instancePath:instancePath+"/v/" + i0+"/tg",schemaPath:"#/properties/v/items/properties/tg/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.v.items.properties.tg.type,parentSchema:schema31.properties.v.items.properties.tg,data:data9}];
return false;
}
const _errs22 = errors;
let valid4 = false;
let passing0 = null;
const _errs23 = errors;
if(!func0(data9, "840539006")){
const err0 = {instancePath:instancePath+"/v/" + i0+"/tg",schemaPath:"#/properties/v/items/properties/tg/oneOf/0/const",keyword:"const",params:{allowedValue: "840539006"},message:"must be equal to constant",schema:"840539006",parentSchema:schema31.properties.v.items.properties.tg.oneOf[0],data:data9};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
var _valid0 = _errs23 === errors;
if(_valid0){
valid4 = true;
passing0 = 0;
}
if(!valid4){
const err1 = {instancePath:instancePath+"/v/" + i0+"/tg",schemaPath:"#/properties/v/items/properties/tg/oneOf",keyword:"oneOf",params:{passingSchemas: passing0},message:"must match exactly one schema in oneOf",schema:schema31.properties.v.items.properties.tg.oneOf,parentSchema:schema31.properties.v.items.properties.tg,data:data9};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
validate20.errors = vErrors;
return false;
}
else {
errors = _errs22;
if(vErrors !== null){
if(_errs22){
vErrors.length = _errs22;
}
else {
vErrors = null;
}
}
}
var valid3 = _errs20 === errors;
}
else {
var valid3 = true;
}
if(valid3){
if(data8.vp !== undefined){
let data10 = data8.vp;
const _errs24 = errors;
if(typeof data10 !== "string"){
validate20.errors = [{instancePath:instancePath+"/v/" + i0+"/vp",schemaPath:"#/properties/v/items/properties/vp/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.v.items.properties.vp.type,parentSchema:schema31.properties.v.items.properties.vp,data:data10}];
return false;
}
const _errs26 = errors;
let valid5 = false;
let passing1 = null;
const _errs27 = errors;
if(!func0(data10, "1119305005")){
const err2 = {instancePath:instancePath+"/v/" + i0+"/vp",schemaPath:"#/properties/v/items/properties/vp/oneOf/0/const",keyword:"const",params:{allowedValue: "1119305005"},message:"must be equal to constant",schema:"1119305005",parentSchema:schema31.properties.v.items.properties.vp.oneOf[0],data:data10};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
var _valid1 = _errs27 === errors;
if(_valid1){
valid5 = true;
passing1 = 0;
}
const _errs28 = errors;
if(!func0(data10, "1119349007")){
const err3 = {instancePath:instancePath+"/v/" + i0+"/vp",schemaPath:"#/properties/v/items/properties/vp/oneOf/1/const",keyword:"const",params:{allowedValue: "1119349007"},message:"must be equal to constant",schema:"1119349007",parentSchema:schema31.properties.v.items.properties.vp.oneOf[1],data:data10};
if(vErrors === null){
vErrors = [err3];
}
else {
vErrors.push(err3);
}
errors++;
}
var _valid1 = _errs28 === errors;
if(_valid1 && valid5){
valid5 = false;
passing1 = [passing1, 1];
}
else {
if(_valid1){
valid5 = true;
passing1 = 1;
}
const _errs29 = errors;
if(!func0(data10, "J07BX03")){
const err4 = {instancePath:instancePath+"/v/" + i0+"/vp",schemaPath:"#/properties/v/items/properties/vp/oneOf/2/const",keyword:"const",params:{allowedValue: "J07BX03"},message:"must be equal to constant",schema:"J07BX03",parentSchema:schema31.properties.v.items.properties.vp.oneOf[2],data:data10};
if(vErrors === null){
vErrors = [err4];
}
else {
vErrors.push(err4);
}
errors++;
}
var _valid1 = _errs29 === errors;
if(_valid1 && valid5){
valid5 = false;
passing1 = [passing1, 2];
}
else {
if(_valid1){
valid5 = true;
passing1 = 2;
}
}
}
if(!valid5){
const err5 = {instancePath:instancePath+"/v/" + i0+"/vp",schemaPath:"#/properties/v/items/properties/vp/oneOf",keyword:"oneOf",params:{passingSchemas: passing1},message:"must match exactly one schema in oneOf",schema:schema31.properties.v.items.properties.vp.oneOf,parentSchema:schema31.properties.v.items.properties.vp,data:data10};
if(vErrors === null){
vErrors = [err5];
}
else {
vErrors.push(err5);
}
errors++;
validate20.errors = vErrors;
return false;
}
else {
errors = _errs26;
if(vErrors !== null){
if(_errs26){
vErrors.length = _errs26;
}
else {
vErrors = null;
}
}
}
var valid3 = _errs24 === errors;
}
else {
var valid3 = true;
}
if(valid3){
if(data8.mp !== undefined){
let data11 = data8.mp;
const _errs30 = errors;
if(typeof data11 !== "string"){
validate20.errors = [{instancePath:instancePath+"/v/" + i0+"/mp",schemaPath:"#/properties/v/items/properties/mp/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.v.items.properties.mp.type,parentSchema:schema31.properties.v.items.properties.mp,data:data11}];
return false;
}
const _errs32 = errors;
let valid6 = false;
let passing2 = null;
const _errs33 = errors;
if(!func0(data11, "EU/1/20/1528")){
const err6 = {instancePath:instancePath+"/v/" + i0+"/mp",schemaPath:"#/properties/v/items/properties/mp/oneOf/0/const",keyword:"const",params:{allowedValue: "EU/1/20/1528"},message:"must be equal to constant",schema:"EU/1/20/1528",parentSchema:schema31.properties.v.items.properties.mp.oneOf[0],data:data11};
if(vErrors === null){
vErrors = [err6];
}
else {
vErrors.push(err6);
}
errors++;
}
var _valid2 = _errs33 === errors;
if(_valid2){
valid6 = true;
passing2 = 0;
}
const _errs34 = errors;
if(!func0(data11, "EU/1/20/1507")){
const err7 = {instancePath:instancePath+"/v/" + i0+"/mp",schemaPath:"#/properties/v/items/properties/mp/oneOf/1/const",keyword:"const",params:{allowedValue: "EU/1/20/1507"},message:"must be equal to constant",schema:"EU/1/20/1507",parentSchema:schema31.properties.v.items.properties.mp.oneOf[1],data:data11};
if(vErrors === null){
vErrors = [err7];
}
else {
vErrors.push(err7);
}
errors++;
}
var _valid2 = _errs34 === errors;
if(_valid2 && valid6){
valid6 = false;
passing2 = [passing2, 1];
}
else {
if(_valid2){
valid6 = true;
passing2 = 1;
}
const _errs35 = errors;
if(!func0(data11, "EU/1/21/1529")){
const err8 = {instancePath:instancePath+"/v/" + i0+"/mp",schemaPath:"#/properties/v/items/properties/mp/oneOf/2/const",keyword:"const",params:{allowedValue: "EU/1/21/1529"},message:"must be equal to constant",schema:"EU/1/21/1529",parentSchema:schema31.properties.v.items.properties.mp.oneOf[2],data:data11};
if(vErrors === null){
vErrors = [err8];
}
else {
vErrors.push(err8);
}
errors++;
}
var _valid2 = _errs35 === errors;
if(_valid2 && valid6){
valid6 = false;
passing2 = [passing2, 2];
}
else {
if(_valid2){
valid6 = true;
passing2 = 2;
}
const _errs36 = errors;
if(!func0(data11, "EU/1/20/1525")){
const err9 = {instancePath:instancePath+"/v/" + i0+"/mp",schemaPath:"#/properties/v/items/properties/mp/oneOf/3/const",keyword:"const",params:{allowedValue: "EU/1/20/1525"},message:"must be equal to constant",schema:"EU/1/20/1525",parentSchema:schema31.properties.v.items.properties.mp.oneOf[3],data:data11};
if(vErrors === null){
vErrors = [err9];
}
else {
vErrors.push(err9);
}
errors++;
}
var _valid2 = _errs36 === errors;
if(_valid2 && valid6){
valid6 = false;
passing2 = [passing2, 3];
}
else {
if(_valid2){
valid6 = true;
passing2 = 3;
}
const _errs37 = errors;
if(!func0(data11, "CVnCoV")){
const err10 = {instancePath:instancePath+"/v/" + i0+"/mp",schemaPath:"#/properties/v/items/properties/mp/oneOf/4/const",keyword:"const",params:{allowedValue: "CVnCoV"},message:"must be equal to constant",schema:"CVnCoV",parentSchema:schema31.properties.v.items.properties.mp.oneOf[4],data:data11};
if(vErrors === null){
vErrors = [err10];
}
else {
vErrors.push(err10);
}
errors++;
}
var _valid2 = _errs37 === errors;
if(_valid2 && valid6){
valid6 = false;
passing2 = [passing2, 4];
}
else {
if(_valid2){
valid6 = true;
passing2 = 4;
}
const _errs38 = errors;
if(!func0(data11, "Sputnik-V")){
const err11 = {instancePath:instancePath+"/v/" + i0+"/mp",schemaPath:"#/properties/v/items/properties/mp/oneOf/5/const",keyword:"const",params:{allowedValue: "Sputnik-V"},message:"must be equal to constant",schema:"Sputnik-V",parentSchema:schema31.properties.v.items.properties.mp.oneOf[5],data:data11};
if(vErrors === null){
vErrors = [err11];
}
else {
vErrors.push(err11);
}
errors++;
}
var _valid2 = _errs38 === errors;
if(_valid2 && valid6){
valid6 = false;
passing2 = [passing2, 5];
}
else {
if(_valid2){
valid6 = true;
passing2 = 5;
}
const _errs39 = errors;
if(!func0(data11, "Convidecia")){
const err12 = {instancePath:instancePath+"/v/" + i0+"/mp",schemaPath:"#/properties/v/items/properties/mp/oneOf/6/const",keyword:"const",params:{allowedValue: "Convidecia"},message:"must be equal to constant",schema:"Convidecia",parentSchema:schema31.properties.v.items.properties.mp.oneOf[6],data:data11};
if(vErrors === null){
vErrors = [err12];
}
else {
vErrors.push(err12);
}
errors++;
}
var _valid2 = _errs39 === errors;
if(_valid2 && valid6){
valid6 = false;
passing2 = [passing2, 6];
}
else {
if(_valid2){
valid6 = true;
passing2 = 6;
}
const _errs40 = errors;
if(!func0(data11, "EpiVacCorona")){
const err13 = {instancePath:instancePath+"/v/" + i0+"/mp",schemaPath:"#/properties/v/items/properties/mp/oneOf/7/const",keyword:"const",params:{allowedValue: "EpiVacCorona"},message:"must be equal to constant",schema:"EpiVacCorona",parentSchema:schema31.properties.v.items.properties.mp.oneOf[7],data:data11};
if(vErrors === null){
vErrors = [err13];
}
else {
vErrors.push(err13);
}
errors++;
}
var _valid2 = _errs40 === errors;
if(_valid2 && valid6){
valid6 = false;
passing2 = [passing2, 7];
}
else {
if(_valid2){
valid6 = true;
passing2 = 7;
}
const _errs41 = errors;
if(!func0(data11, "BBIBP-CorV")){
const err14 = {instancePath:instancePath+"/v/" + i0+"/mp",schemaPath:"#/properties/v/items/properties/mp/oneOf/8/const",keyword:"const",params:{allowedValue: "BBIBP-CorV"},message:"must be equal to constant",schema:"BBIBP-CorV",parentSchema:schema31.properties.v.items.properties.mp.oneOf[8],data:data11};
if(vErrors === null){
vErrors = [err14];
}
else {
vErrors.push(err14);
}
errors++;
}
var _valid2 = _errs41 === errors;
if(_valid2 && valid6){
valid6 = false;
passing2 = [passing2, 8];
}
else {
if(_valid2){
valid6 = true;
passing2 = 8;
}
const _errs42 = errors;
if(!func0(data11, "Inactivated-SARS-CoV-2-Vero-Cell")){
const err15 = {instancePath:instancePath+"/v/" + i0+"/mp",schemaPath:"#/properties/v/items/properties/mp/oneOf/9/const",keyword:"const",params:{allowedValue: "Inactivated-SARS-CoV-2-Vero-Cell"},message:"must be equal to constant",schema:"Inactivated-SARS-CoV-2-Vero-Cell",parentSchema:schema31.properties.v.items.properties.mp.oneOf[9],data:data11};
if(vErrors === null){
vErrors = [err15];
}
else {
vErrors.push(err15);
}
errors++;
}
var _valid2 = _errs42 === errors;
if(_valid2 && valid6){
valid6 = false;
passing2 = [passing2, 9];
}
else {
if(_valid2){
valid6 = true;
passing2 = 9;
}
const _errs43 = errors;
if(!func0(data11, "CoronaVac")){
const err16 = {instancePath:instancePath+"/v/" + i0+"/mp",schemaPath:"#/properties/v/items/properties/mp/oneOf/10/const",keyword:"const",params:{allowedValue: "CoronaVac"},message:"must be equal to constant",schema:"CoronaVac",parentSchema:schema31.properties.v.items.properties.mp.oneOf[10],data:data11};
if(vErrors === null){
vErrors = [err16];
}
else {
vErrors.push(err16);
}
errors++;
}
var _valid2 = _errs43 === errors;
if(_valid2 && valid6){
valid6 = false;
passing2 = [passing2, 10];
}
else {
if(_valid2){
valid6 = true;
passing2 = 10;
}
const _errs44 = errors;
if(!func0(data11, "Covaxin")){
const err17 = {instancePath:instancePath+"/v/" + i0+"/mp",schemaPath:"#/properties/v/items/properties/mp/oneOf/11/const",keyword:"const",params:{allowedValue: "Covaxin"},message:"must be equal to constant",schema:"Covaxin",parentSchema:schema31.properties.v.items.properties.mp.oneOf[11],data:data11};
if(vErrors === null){
vErrors = [err17];
}
else {
vErrors.push(err17);
}
errors++;
}
var _valid2 = _errs44 === errors;
if(_valid2 && valid6){
valid6 = false;
passing2 = [passing2, 11];
}
else {
if(_valid2){
valid6 = true;
passing2 = 11;
}
}
}
}
}
}
}
}
}
}
}
}
if(!valid6){
const err18 = {instancePath:instancePath+"/v/" + i0+"/mp",schemaPath:"#/properties/v/items/properties/mp/oneOf",keyword:"oneOf",params:{passingSchemas: passing2},message:"must match exactly one schema in oneOf",schema:schema31.properties.v.items.properties.mp.oneOf,parentSchema:schema31.properties.v.items.properties.mp,data:data11};
if(vErrors === null){
vErrors = [err18];
}
else {
vErrors.push(err18);
}
errors++;
validate20.errors = vErrors;
return false;
}
else {
errors = _errs32;
if(vErrors !== null){
if(_errs32){
vErrors.length = _errs32;
}
else {
vErrors = null;
}
}
}
var valid3 = _errs30 === errors;
}
else {
var valid3 = true;
}
if(valid3){
if(data8.ma !== undefined){
let data12 = data8.ma;
const _errs45 = errors;
if(typeof data12 !== "string"){
validate20.errors = [{instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/properties/v/items/properties/ma/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.v.items.properties.ma.type,parentSchema:schema31.properties.v.items.properties.ma,data:data12}];
return false;
}
const _errs47 = errors;
let valid7 = false;
let passing3 = null;
const _errs48 = errors;
if(!func0(data12, "ORG-100001699")){
const err19 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/properties/v/items/properties/ma/oneOf/0/const",keyword:"const",params:{allowedValue: "ORG-100001699"},message:"must be equal to constant",schema:"ORG-100001699",parentSchema:schema31.properties.v.items.properties.ma.oneOf[0],data:data12};
if(vErrors === null){
vErrors = [err19];
}
else {
vErrors.push(err19);
}
errors++;
}
var _valid3 = _errs48 === errors;
if(_valid3){
valid7 = true;
passing3 = 0;
}
const _errs49 = errors;
if(!func0(data12, "ORG-100030215")){
const err20 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/properties/v/items/properties/ma/oneOf/1/const",keyword:"const",params:{allowedValue: "ORG-100030215"},message:"must be equal to constant",schema:"ORG-100030215",parentSchema:schema31.properties.v.items.properties.ma.oneOf[1],data:data12};
if(vErrors === null){
vErrors = [err20];
}
else {
vErrors.push(err20);
}
errors++;
}
var _valid3 = _errs49 === errors;
if(_valid3 && valid7){
valid7 = false;
passing3 = [passing3, 1];
}
else {
if(_valid3){
valid7 = true;
passing3 = 1;
}
const _errs50 = errors;
if(!func0(data12, "ORG-100001417")){
const err21 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/properties/v/items/properties/ma/oneOf/2/const",keyword:"const",params:{allowedValue: "ORG-100001417"},message:"must be equal to constant",schema:"ORG-100001417",parentSchema:schema31.properties.v.items.properties.ma.oneOf[2],data:data12};
if(vErrors === null){
vErrors = [err21];
}
else {
vErrors.push(err21);
}
errors++;
}
var _valid3 = _errs50 === errors;
if(_valid3 && valid7){
valid7 = false;
passing3 = [passing3, 2];
}
else {
if(_valid3){
valid7 = true;
passing3 = 2;
}
const _errs51 = errors;
if(!func0(data12, "ORG-100031184")){
const err22 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/properties/v/items/properties/ma/oneOf/3/const",keyword:"const",params:{allowedValue: "ORG-100031184"},message:"must be equal to constant",schema:"ORG-100031184",parentSchema:schema31.properties.v.items.properties.ma.oneOf[3],data:data12};
if(vErrors === null){
vErrors = [err22];
}
else {
vErrors.push(err22);
}
errors++;
}
var _valid3 = _errs51 === errors;
if(_valid3 && valid7){
valid7 = false;
passing3 = [passing3, 3];
}
else {
if(_valid3){
valid7 = true;
passing3 = 3;
}
const _errs52 = errors;
if(!func0(data12, "ORG-100006270")){
const err23 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/properties/v/items/properties/ma/oneOf/4/const",keyword:"const",params:{allowedValue: "ORG-100006270"},message:"must be equal to constant",schema:"ORG-100006270",parentSchema:schema31.properties.v.items.properties.ma.oneOf[4],data:data12};
if(vErrors === null){
vErrors = [err23];
}
else {
vErrors.push(err23);
}
errors++;
}
var _valid3 = _errs52 === errors;
if(_valid3 && valid7){
valid7 = false;
passing3 = [passing3, 4];
}
else {
if(_valid3){
valid7 = true;
passing3 = 4;
}
const _errs53 = errors;
if(!func0(data12, "ORG-100013793")){
const err24 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/properties/v/items/properties/ma/oneOf/5/const",keyword:"const",params:{allowedValue: "ORG-100013793"},message:"must be equal to constant",schema:"ORG-100013793",parentSchema:schema31.properties.v.items.properties.ma.oneOf[5],data:data12};
if(vErrors === null){
vErrors = [err24];
}
else {
vErrors.push(err24);
}
errors++;
}
var _valid3 = _errs53 === errors;
if(_valid3 && valid7){
valid7 = false;
passing3 = [passing3, 5];
}
else {
if(_valid3){
valid7 = true;
passing3 = 5;
}
const _errs54 = errors;
if(!func0(data12, "ORG-100020693")){
const err25 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/properties/v/items/properties/ma/oneOf/6/const",keyword:"const",params:{allowedValue: "ORG-100020693"},message:"must be equal to constant",schema:"ORG-100020693",parentSchema:schema31.properties.v.items.properties.ma.oneOf[6],data:data12};
if(vErrors === null){
vErrors = [err25];
}
else {
vErrors.push(err25);
}
errors++;
}
var _valid3 = _errs54 === errors;
if(_valid3 && valid7){
valid7 = false;
passing3 = [passing3, 6];
}
else {
if(_valid3){
valid7 = true;
passing3 = 6;
}
const _errs55 = errors;
if(!func0(data12, "ORG-100010771")){
const err26 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/properties/v/items/properties/ma/oneOf/7/const",keyword:"const",params:{allowedValue: "ORG-100010771"},message:"must be equal to constant",schema:"ORG-100010771",parentSchema:schema31.properties.v.items.properties.ma.oneOf[7],data:data12};
if(vErrors === null){
vErrors = [err26];
}
else {
vErrors.push(err26);
}
errors++;
}
var _valid3 = _errs55 === errors;
if(_valid3 && valid7){
valid7 = false;
passing3 = [passing3, 7];
}
else {
if(_valid3){
valid7 = true;
passing3 = 7;
}
const _errs56 = errors;
if(!func0(data12, "ORG-100024420")){
const err27 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/properties/v/items/properties/ma/oneOf/8/const",keyword:"const",params:{allowedValue: "ORG-100024420"},message:"must be equal to constant",schema:"ORG-100024420",parentSchema:schema31.properties.v.items.properties.ma.oneOf[8],data:data12};
if(vErrors === null){
vErrors = [err27];
}
else {
vErrors.push(err27);
}
errors++;
}
var _valid3 = _errs56 === errors;
if(_valid3 && valid7){
valid7 = false;
passing3 = [passing3, 8];
}
else {
if(_valid3){
valid7 = true;
passing3 = 8;
}
const _errs57 = errors;
if(!func0(data12, "ORG-100032020")){
const err28 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/properties/v/items/properties/ma/oneOf/9/const",keyword:"const",params:{allowedValue: "ORG-100032020"},message:"must be equal to constant",schema:"ORG-100032020",parentSchema:schema31.properties.v.items.properties.ma.oneOf[9],data:data12};
if(vErrors === null){
vErrors = [err28];
}
else {
vErrors.push(err28);
}
errors++;
}
var _valid3 = _errs57 === errors;
if(_valid3 && valid7){
valid7 = false;
passing3 = [passing3, 9];
}
else {
if(_valid3){
valid7 = true;
passing3 = 9;
}
const _errs58 = errors;
if(!func0(data12, "Gamaleya-Research-Institute")){
const err29 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/properties/v/items/properties/ma/oneOf/10/const",keyword:"const",params:{allowedValue: "Gamaleya-Research-Institute"},message:"must be equal to constant",schema:"Gamaleya-Research-Institute",parentSchema:schema31.properties.v.items.properties.ma.oneOf[10],data:data12};
if(vErrors === null){
vErrors = [err29];
}
else {
vErrors.push(err29);
}
errors++;
}
var _valid3 = _errs58 === errors;
if(_valid3 && valid7){
valid7 = false;
passing3 = [passing3, 10];
}
else {
if(_valid3){
valid7 = true;
passing3 = 10;
}
const _errs59 = errors;
if(!func0(data12, "Vector-Institute")){
const err30 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/properties/v/items/properties/ma/oneOf/11/const",keyword:"const",params:{allowedValue: "Vector-Institute"},message:"must be equal to constant",schema:"Vector-Institute",parentSchema:schema31.properties.v.items.properties.ma.oneOf[11],data:data12};
if(vErrors === null){
vErrors = [err30];
}
else {
vErrors.push(err30);
}
errors++;
}
var _valid3 = _errs59 === errors;
if(_valid3 && valid7){
valid7 = false;
passing3 = [passing3, 11];
}
else {
if(_valid3){
valid7 = true;
passing3 = 11;
}
const _errs60 = errors;
if(!func0(data12, "Sinovac-Biotech")){
const err31 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/properties/v/items/properties/ma/oneOf/12/const",keyword:"const",params:{allowedValue: "Sinovac-Biotech"},message:"must be equal to constant",schema:"Sinovac-Biotech",parentSchema:schema31.properties.v.items.properties.ma.oneOf[12],data:data12};
if(vErrors === null){
vErrors = [err31];
}
else {
vErrors.push(err31);
}
errors++;
}
var _valid3 = _errs60 === errors;
if(_valid3 && valid7){
valid7 = false;
passing3 = [passing3, 12];
}
else {
if(_valid3){
valid7 = true;
passing3 = 12;
}
const _errs61 = errors;
if(!func0(data12, "Bharat-Biotech")){
const err32 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/properties/v/items/properties/ma/oneOf/13/const",keyword:"const",params:{allowedValue: "Bharat-Biotech"},message:"must be equal to constant",schema:"Bharat-Biotech",parentSchema:schema31.properties.v.items.properties.ma.oneOf[13],data:data12};
if(vErrors === null){
vErrors = [err32];
}
else {
vErrors.push(err32);
}
errors++;
}
var _valid3 = _errs61 === errors;
if(_valid3 && valid7){
valid7 = false;
passing3 = [passing3, 13];
}
else {
if(_valid3){
valid7 = true;
passing3 = 13;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
if(!valid7){
const err33 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/properties/v/items/properties/ma/oneOf",keyword:"oneOf",params:{passingSchemas: passing3},message:"must match exactly one schema in oneOf",schema:schema31.properties.v.items.properties.ma.oneOf,parentSchema:schema31.properties.v.items.properties.ma,data:data12};
if(vErrors === null){
vErrors = [err33];
}
else {
vErrors.push(err33);
}
errors++;
validate20.errors = vErrors;
return false;
}
else {
errors = _errs47;
if(vErrors !== null){
if(_errs47){
vErrors.length = _errs47;
}
else {
vErrors = null;
}
}
}
var valid3 = _errs45 === errors;
}
else {
var valid3 = true;
}
if(valid3){
if(data8.dn !== undefined){
let data13 = data8.dn;
const _errs62 = errors;
if(!(((typeof data13 == "number") && (!(data13 % 1) && !isNaN(data13))) && (isFinite(data13)))){
validate20.errors = [{instancePath:instancePath+"/v/" + i0+"/dn",schemaPath:"#/properties/v/items/properties/dn/type",keyword:"type",params:{type: "integer"},message:"must be integer",schema:schema31.properties.v.items.properties.dn.type,parentSchema:schema31.properties.v.items.properties.dn,data:data13}];
return false;
}
if(errors === _errs62){
if((typeof data13 == "number") && (isFinite(data13))){
if(data13 > 9 || isNaN(data13)){
validate20.errors = [{instancePath:instancePath+"/v/" + i0+"/dn",schemaPath:"#/properties/v/items/properties/dn/maximum",keyword:"maximum",params:{comparison: "<=", limit: 9},message:"must be <= 9",schema:9,parentSchema:schema31.properties.v.items.properties.dn,data:data13}];
return false;
}
else {
if(data13 < 1 || isNaN(data13)){
validate20.errors = [{instancePath:instancePath+"/v/" + i0+"/dn",schemaPath:"#/properties/v/items/properties/dn/minimum",keyword:"minimum",params:{comparison: ">=", limit: 1},message:"must be >= 1",schema:1,parentSchema:schema31.properties.v.items.properties.dn,data:data13}];
return false;
}
}
}
}
var valid3 = _errs62 === errors;
}
else {
var valid3 = true;
}
if(valid3){
if(data8.sd !== undefined){
let data14 = data8.sd;
const _errs64 = errors;
if(!(((typeof data14 == "number") && (!(data14 % 1) && !isNaN(data14))) && (isFinite(data14)))){
validate20.errors = [{instancePath:instancePath+"/v/" + i0+"/sd",schemaPath:"#/properties/v/items/properties/sd/type",keyword:"type",params:{type: "integer"},message:"must be integer",schema:schema31.properties.v.items.properties.sd.type,parentSchema:schema31.properties.v.items.properties.sd,data:data14}];
return false;
}
if(errors === _errs64){
if((typeof data14 == "number") && (isFinite(data14))){
if(data14 > 9 || isNaN(data14)){
validate20.errors = [{instancePath:instancePath+"/v/" + i0+"/sd",schemaPath:"#/properties/v/items/properties/sd/maximum",keyword:"maximum",params:{comparison: "<=", limit: 9},message:"must be <= 9",schema:9,parentSchema:schema31.properties.v.items.properties.sd,data:data14}];
return false;
}
else {
if(data14 < 1 || isNaN(data14)){
validate20.errors = [{instancePath:instancePath+"/v/" + i0+"/sd",schemaPath:"#/properties/v/items/properties/sd/minimum",keyword:"minimum",params:{comparison: ">=", limit: 1},message:"must be >= 1",schema:1,parentSchema:schema31.properties.v.items.properties.sd,data:data14}];
return false;
}
}
}
}
var valid3 = _errs64 === errors;
}
else {
var valid3 = true;
}
if(valid3){
if(data8.dt !== undefined){
let data15 = data8.dt;
const _errs66 = errors;
if(errors === _errs66){
if(errors === _errs66){
if(typeof data15 === "string"){
if(!(formats0.validate(data15))){
validate20.errors = [{instancePath:instancePath+"/v/" + i0+"/dt",schemaPath:"#/properties/v/items/properties/dt/format",keyword:"format",params:{format: "date"},message:"must match format \""+"date"+"\"",schema:"date",parentSchema:schema31.properties.v.items.properties.dt,data:data15}];
return false;
}
}
else {
validate20.errors = [{instancePath:instancePath+"/v/" + i0+"/dt",schemaPath:"#/properties/v/items/properties/dt/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.v.items.properties.dt.type,parentSchema:schema31.properties.v.items.properties.dt,data:data15}];
return false;
}
}
}
var valid3 = _errs66 === errors;
}
else {
var valid3 = true;
}
if(valid3){
if(data8.co !== undefined){
let data16 = data8.co;
const _errs69 = errors;
if(errors === _errs69){
if(typeof data16 === "string"){
if(!pattern8.test(data16)){
validate20.errors = [{instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/properties/v/items/properties/co/pattern",keyword:"pattern",params:{pattern: "[A-Z]{1,10}"},message:"must match pattern \""+"[A-Z]{1,10}"+"\"",schema:"[A-Z]{1,10}",parentSchema:schema31.properties.v.items.properties.co,data:data16}];
return false;
}
}
else {
validate20.errors = [{instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/properties/v/items/properties/co/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.v.items.properties.co.type,parentSchema:schema31.properties.v.items.properties.co,data:data16}];
return false;
}
}
var valid3 = _errs69 === errors;
}
else {
var valid3 = true;
}
if(valid3){
if(data8.is !== undefined){
let data17 = data8.is;
const _errs71 = errors;
if(errors === _errs71){
if(typeof data17 === "string"){
if(func3(data17) > 50){
validate20.errors = [{instancePath:instancePath+"/v/" + i0+"/is",schemaPath:"#/properties/v/items/properties/is/maxLength",keyword:"maxLength",params:{limit: 50},message:"must NOT have more than 50 characters",schema:50,parentSchema:schema31.properties.v.items.properties.is,data:data17}];
return false;
}
}
else {
validate20.errors = [{instancePath:instancePath+"/v/" + i0+"/is",schemaPath:"#/properties/v/items/properties/is/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.v.items.properties.is.type,parentSchema:schema31.properties.v.items.properties.is,data:data17}];
return false;
}
}
var valid3 = _errs71 === errors;
}
else {
var valid3 = true;
}
if(valid3){
if(data8.ci !== undefined){
let data18 = data8.ci;
const _errs73 = errors;
if(errors === _errs73){
if(typeof data18 === "string"){
if(func3(data18) > 50){
validate20.errors = [{instancePath:instancePath+"/v/" + i0+"/ci",schemaPath:"#/properties/v/items/properties/ci/maxLength",keyword:"maxLength",params:{limit: 50},message:"must NOT have more than 50 characters",schema:50,parentSchema:schema31.properties.v.items.properties.ci,data:data18}];
return false;
}
}
else {
validate20.errors = [{instancePath:instancePath+"/v/" + i0+"/ci",schemaPath:"#/properties/v/items/properties/ci/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.v.items.properties.ci.type,parentSchema:schema31.properties.v.items.properties.ci,data:data18}];
return false;
}
}
var valid3 = _errs73 === errors;
}
else {
var valid3 = true;
}
}
}
}
}
}
}
}
}
}
}
}
else {
validate20.errors = [{instancePath:instancePath+"/v/" + i0,schemaPath:"#/properties/v/items/type",keyword:"type",params:{type: "object"},message:"must be object",schema:schema31.properties.v.items.type,parentSchema:schema31.properties.v.items,data:data8}];
return false;
}
}
var valid2 = _errs18 === errors;
if(!valid2){
break;
}
}
}
}
else {
validate20.errors = [{instancePath:instancePath+"/v",schemaPath:"#/properties/v/type",keyword:"type",params:{type: "array"},message:"must be array",schema:schema31.properties.v.type,parentSchema:schema31.properties.v,data:data7}];
return false;
}
}
var valid0 = _errs16 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.t !== undefined){
let data19 = data.t;
const _errs75 = errors;
if(errors === _errs75){
if(Array.isArray(data19)){
if(data19.length < 1){
validate20.errors = [{instancePath:instancePath+"/t",schemaPath:"#/properties/t/minItems",keyword:"minItems",params:{limit: 1},message:"must NOT have fewer than 1 items",schema:1,parentSchema:schema31.properties.t,data:data19}];
return false;
}
else {
var valid8 = true;
const len1 = data19.length;
for(let i1=0; i1<len1; i1++){
let data20 = data19[i1];
const _errs77 = errors;
if(errors === _errs77){
if(data20 && typeof data20 == "object" && !Array.isArray(data20)){
let missing3;
if(((((((((data20.tg === undefined) && (missing3 = "tg")) || ((data20.tt === undefined) && (missing3 = "tt"))) || ((data20.sc === undefined) && (missing3 = "sc"))) || ((data20.tr === undefined) && (missing3 = "tr"))) || ((data20.tc === undefined) && (missing3 = "tc"))) || ((data20.co === undefined) && (missing3 = "co"))) || ((data20.is === undefined) && (missing3 = "is"))) || ((data20.ci === undefined) && (missing3 = "ci"))){
validate20.errors = [{instancePath:instancePath+"/t/" + i1,schemaPath:"#/properties/t/items/required",keyword:"required",params:{missingProperty: missing3},message:"must have required property '"+missing3+"'",schema:schema31.properties.t.items.required,parentSchema:schema31.properties.t.items,data:data20}];
return false;
}
else {
if(data20.tg !== undefined){
let data21 = data20.tg;
const _errs79 = errors;
if(typeof data21 !== "string"){
validate20.errors = [{instancePath:instancePath+"/t/" + i1+"/tg",schemaPath:"#/properties/t/items/properties/tg/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.t.items.properties.tg.type,parentSchema:schema31.properties.t.items.properties.tg,data:data21}];
return false;
}
const _errs81 = errors;
let valid10 = false;
let passing4 = null;
const _errs82 = errors;
if(!func0(data21, "840539006")){
const err34 = {instancePath:instancePath+"/t/" + i1+"/tg",schemaPath:"#/properties/t/items/properties/tg/oneOf/0/const",keyword:"const",params:{allowedValue: "840539006"},message:"must be equal to constant",schema:"840539006",parentSchema:schema31.properties.t.items.properties.tg.oneOf[0],data:data21};
if(vErrors === null){
vErrors = [err34];
}
else {
vErrors.push(err34);
}
errors++;
}
var _valid4 = _errs82 === errors;
if(_valid4){
valid10 = true;
passing4 = 0;
}
if(!valid10){
const err35 = {instancePath:instancePath+"/t/" + i1+"/tg",schemaPath:"#/properties/t/items/properties/tg/oneOf",keyword:"oneOf",params:{passingSchemas: passing4},message:"must match exactly one schema in oneOf",schema:schema31.properties.t.items.properties.tg.oneOf,parentSchema:schema31.properties.t.items.properties.tg,data:data21};
if(vErrors === null){
vErrors = [err35];
}
else {
vErrors.push(err35);
}
errors++;
validate20.errors = vErrors;
return false;
}
else {
errors = _errs81;
if(vErrors !== null){
if(_errs81){
vErrors.length = _errs81;
}
else {
vErrors = null;
}
}
}
var valid9 = _errs79 === errors;
}
else {
var valid9 = true;
}
if(valid9){
if(data20.tt !== undefined){
let data22 = data20.tt;
const _errs83 = errors;
if(typeof data22 !== "string"){
validate20.errors = [{instancePath:instancePath+"/t/" + i1+"/tt",schemaPath:"#/properties/t/items/properties/tt/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.t.items.properties.tt.type,parentSchema:schema31.properties.t.items.properties.tt,data:data22}];
return false;
}
var valid9 = _errs83 === errors;
}
else {
var valid9 = true;
}
if(valid9){
if(data20.nm !== undefined){
let data23 = data20.nm;
const _errs85 = errors;
if(typeof data23 !== "string"){
validate20.errors = [{instancePath:instancePath+"/t/" + i1+"/nm",schemaPath:"#/properties/t/items/properties/nm/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.t.items.properties.nm.type,parentSchema:schema31.properties.t.items.properties.nm,data:data23}];
return false;
}
var valid9 = _errs85 === errors;
}
else {
var valid9 = true;
}
if(valid9){
if(data20.ma !== undefined){
let data24 = data20.ma;
const _errs87 = errors;
if(typeof data24 !== "string"){
validate20.errors = [{instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.t.items.properties.ma.type,parentSchema:schema31.properties.t.items.properties.ma,data:data24}];
return false;
}
const _errs89 = errors;
let valid11 = false;
let passing5 = null;
const _errs90 = errors;
if(!func0(data24, "344")){
const err36 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/0/const",keyword:"const",params:{allowedValue: "344"},message:"must be equal to constant",schema:"344",parentSchema:schema31.properties.t.items.properties.ma.oneOf[0],data:data24};
if(vErrors === null){
vErrors = [err36];
}
else {
vErrors.push(err36);
}
errors++;
}
var _valid5 = _errs90 === errors;
if(_valid5){
valid11 = true;
passing5 = 0;
}
const _errs91 = errors;
if(!func0(data24, "345")){
const err37 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/1/const",keyword:"const",params:{allowedValue: "345"},message:"must be equal to constant",schema:"345",parentSchema:schema31.properties.t.items.properties.ma.oneOf[1],data:data24};
if(vErrors === null){
vErrors = [err37];
}
else {
vErrors.push(err37);
}
errors++;
}
var _valid5 = _errs91 === errors;
if(_valid5 && valid11){
valid11 = false;
passing5 = [passing5, 1];
}
else {
if(_valid5){
valid11 = true;
passing5 = 1;
}
const _errs92 = errors;
if(!func0(data24, "1065")){
const err38 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/2/const",keyword:"const",params:{allowedValue: "1065"},message:"must be equal to constant",schema:"1065",parentSchema:schema31.properties.t.items.properties.ma.oneOf[2],data:data24};
if(vErrors === null){
vErrors = [err38];
}
else {
vErrors.push(err38);
}
errors++;
}
var _valid5 = _errs92 === errors;
if(_valid5 && valid11){
valid11 = false;
passing5 = [passing5, 2];
}
else {
if(_valid5){
valid11 = true;
passing5 = 2;
}
const _errs93 = errors;
if(!func0(data24, "1097")){
const err39 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/3/const",keyword:"const",params:{allowedValue: "1097"},message:"must be equal to constant",schema:"1097",parentSchema:schema31.properties.t.items.properties.ma.oneOf[3],data:data24};
if(vErrors === null){
vErrors = [err39];
}
else {
vErrors.push(err39);
}
errors++;
}
var _valid5 = _errs93 === errors;
if(_valid5 && valid11){
valid11 = false;
passing5 = [passing5, 3];
}
else {
if(_valid5){
valid11 = true;
passing5 = 3;
}
const _errs94 = errors;
if(!func0(data24, "1162")){
const err40 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/4/const",keyword:"const",params:{allowedValue: "1162"},message:"must be equal to constant",schema:"1162",parentSchema:schema31.properties.t.items.properties.ma.oneOf[4],data:data24};
if(vErrors === null){
vErrors = [err40];
}
else {
vErrors.push(err40);
}
errors++;
}
var _valid5 = _errs94 === errors;
if(_valid5 && valid11){
valid11 = false;
passing5 = [passing5, 4];
}
else {
if(_valid5){
valid11 = true;
passing5 = 4;
}
const _errs95 = errors;
if(!func0(data24, "1173")){
const err41 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/5/const",keyword:"const",params:{allowedValue: "1173"},message:"must be equal to constant",schema:"1173",parentSchema:schema31.properties.t.items.properties.ma.oneOf[5],data:data24};
if(vErrors === null){
vErrors = [err41];
}
else {
vErrors.push(err41);
}
errors++;
}
var _valid5 = _errs95 === errors;
if(_valid5 && valid11){
valid11 = false;
passing5 = [passing5, 5];
}
else {
if(_valid5){
valid11 = true;
passing5 = 5;
}
const _errs96 = errors;
if(!func0(data24, "1180")){
const err42 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/6/const",keyword:"const",params:{allowedValue: "1180"},message:"must be equal to constant",schema:"1180",parentSchema:schema31.properties.t.items.properties.ma.oneOf[6],data:data24};
if(vErrors === null){
vErrors = [err42];
}
else {
vErrors.push(err42);
}
errors++;
}
var _valid5 = _errs96 === errors;
if(_valid5 && valid11){
valid11 = false;
passing5 = [passing5, 6];
}
else {
if(_valid5){
valid11 = true;
passing5 = 6;
}
const _errs97 = errors;
if(!func0(data24, "1218")){
const err43 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/7/const",keyword:"const",params:{allowedValue: "1218"},message:"must be equal to constant",schema:"1218",parentSchema:schema31.properties.t.items.properties.ma.oneOf[7],data:data24};
if(vErrors === null){
vErrors = [err43];
}
else {
vErrors.push(err43);
}
errors++;
}
var _valid5 = _errs97 === errors;
if(_valid5 && valid11){
valid11 = false;
passing5 = [passing5, 7];
}
else {
if(_valid5){
valid11 = true;
passing5 = 7;
}
const _errs98 = errors;
if(!func0(data24, "1223")){
const err44 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/8/const",keyword:"const",params:{allowedValue: "1223"},message:"must be equal to constant",schema:"1223",parentSchema:schema31.properties.t.items.properties.ma.oneOf[8],data:data24};
if(vErrors === null){
vErrors = [err44];
}
else {
vErrors.push(err44);
}
errors++;
}
var _valid5 = _errs98 === errors;
if(_valid5 && valid11){
valid11 = false;
passing5 = [passing5, 8];
}
else {
if(_valid5){
valid11 = true;
passing5 = 8;
}
const _errs99 = errors;
if(!func0(data24, "1232")){
const err45 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/9/const",keyword:"const",params:{allowedValue: "1232"},message:"must be equal to constant",schema:"1232",parentSchema:schema31.properties.t.items.properties.ma.oneOf[9],data:data24};
if(vErrors === null){
vErrors = [err45];
}
else {
vErrors.push(err45);
}
errors++;
}
var _valid5 = _errs99 === errors;
if(_valid5 && valid11){
valid11 = false;
passing5 = [passing5, 9];
}
else {
if(_valid5){
valid11 = true;
passing5 = 9;
}
const _errs100 = errors;
if(!func0(data24, "1242")){
const err46 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/10/const",keyword:"const",params:{allowedValue: "1242"},message:"must be equal to constant",schema:"1242",parentSchema:schema31.properties.t.items.properties.ma.oneOf[10],data:data24};
if(vErrors === null){
vErrors = [err46];
}
else {
vErrors.push(err46);
}
errors++;
}
var _valid5 = _errs100 === errors;
if(_valid5 && valid11){
valid11 = false;
passing5 = [passing5, 10];
}
else {
if(_valid5){
valid11 = true;
passing5 = 10;
}
const _errs101 = errors;
if(!func0(data24, "1244")){
const err47 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/11/const",keyword:"const",params:{allowedValue: "1244"},message:"must be equal to constant",schema:"1244",parentSchema:schema31.properties.t.items.properties.ma.oneOf[11],data:data24};
if(vErrors === null){
vErrors = [err47];
}
else {
vErrors.push(err47);
}
errors++;
}
var _valid5 = _errs101 === errors;
if(_valid5 && valid11){
valid11 = false;
passing5 = [passing5, 11];
}
else {
if(_valid5){
valid11 = true;
passing5 = 11;
}
const _errs102 = errors;
if(!func0(data24, "1268")){
const err48 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/12/const",keyword:"const",params:{allowedValue: "1268"},message:"must be equal to constant",schema:"1268",parentSchema:schema31.properties.t.items.properties.ma.oneOf[12],data:data24};
if(vErrors === null){
vErrors = [err48];
}
else {
vErrors.push(err48);
}
errors++;
}
var _valid5 = _errs102 === errors;
if(_valid5 && valid11){
valid11 = false;
passing5 = [passing5, 12];
}
else {
if(_valid5){
valid11 = true;
passing5 = 12;
}
const _errs103 = errors;
if(!func0(data24, "1271")){
const err49 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/13/const",keyword:"const",params:{allowedValue: "1271"},message:"must be equal to constant",schema:"1271",parentSchema:schema31.properties.t.items.properties.ma.oneOf[13],data:data24};
if(vErrors === null){
vErrors = [err49];
}
else {
vErrors.push(err49);
}
errors++;
}
var _valid5 = _errs103 === errors;
if(_valid5 && valid11){
valid11 = false;
passing5 = [passing5, 13];
}
else {
if(_valid5){
valid11 = true;
passing5 = 13;
}
const _errs104 = errors;
if(!func0(data24, "1278")){
const err50 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/14/const",keyword:"const",params:{allowedValue: "1278"},message:"must be equal to constant",schema:"1278",parentSchema:schema31.properties.t.items.properties.ma.oneOf[14],data:data24};
if(vErrors === null){
vErrors = [err50];
}
else {
vErrors.push(err50);
}
errors++;
}
var _valid5 = _errs104 === errors;
if(_valid5 && valid11){
valid11 = false;
passing5 = [passing5, 14];
}
else {
if(_valid5){
valid11 = true;
passing5 = 14;
}
const _errs105 = errors;
if(!func0(data24, "1304")){
const err51 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/15/const",keyword:"const",params:{allowedValue: "1304"},message:"must be equal to constant",schema:"1304",parentSchema:schema31.properties.t.items.properties.ma.oneOf[15],data:data24};
if(vErrors === null){
vErrors = [err51];
}
else {
vErrors.push(err51);
}
errors++;
}
var _valid5 = _errs105 === errors;
if(_valid5 && valid11){
valid11 = false;
passing5 = [passing5, 15];
}
else {
if(_valid5){
valid11 = true;
passing5 = 15;
}
const _errs106 = errors;
if(!func0(data24, "1331")){
const err52 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/16/const",keyword:"const",params:{allowedValue: "1331"},message:"must be equal to constant",schema:"1331",parentSchema:schema31.properties.t.items.properties.ma.oneOf[16],data:data24};
if(vErrors === null){
vErrors = [err52];
}
else {
vErrors.push(err52);
}
errors++;
}
var _valid5 = _errs106 === errors;
if(_valid5 && valid11){
valid11 = false;
passing5 = [passing5, 16];
}
else {
if(_valid5){
valid11 = true;
passing5 = 16;
}
const _errs107 = errors;
if(!func0(data24, "1333")){
const err53 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/17/const",keyword:"const",params:{allowedValue: "1333"},message:"must be equal to constant",schema:"1333",parentSchema:schema31.properties.t.items.properties.ma.oneOf[17],data:data24};
if(vErrors === null){
vErrors = [err53];
}
else {
vErrors.push(err53);
}
errors++;
}
var _valid5 = _errs107 === errors;
if(_valid5 && valid11){
valid11 = false;
passing5 = [passing5, 17];
}
else {
if(_valid5){
valid11 = true;
passing5 = 17;
}
const _errs108 = errors;
if(!func0(data24, "1341")){
const err54 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/18/const",keyword:"const",params:{allowedValue: "1341"},message:"must be equal to constant",schema:"1341",parentSchema:schema31.properties.t.items.properties.ma.oneOf[18],data:data24};
if(vErrors === null){
vErrors = [err54];
}
else {
vErrors.push(err54);
}
errors++;
}
var _valid5 = _errs108 === errors;
if(_valid5 && valid11){
valid11 = false;
passing5 = [passing5, 18];
}
else {
if(_valid5){
valid11 = true;
passing5 = 18;
}
const _errs109 = errors;
if(!func0(data24, "1343")){
const err55 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/19/const",keyword:"const",params:{allowedValue: "1343"},message:"must be equal to constant",schema:"1343",parentSchema:schema31.properties.t.items.properties.ma.oneOf[19],data:data24};
if(vErrors === null){
vErrors = [err55];
}
else {
vErrors.push(err55);
}
errors++;
}
var _valid5 = _errs109 === errors;
if(_valid5 && valid11){
valid11 = false;
passing5 = [passing5, 19];
}
else {
if(_valid5){
valid11 = true;
passing5 = 19;
}
const _errs110 = errors;
if(!func0(data24, "1360")){
const err56 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/20/const",keyword:"const",params:{allowedValue: "1360"},message:"must be equal to constant",schema:"1360",parentSchema:schema31.properties.t.items.properties.ma.oneOf[20],data:data24};
if(vErrors === null){
vErrors = [err56];
}
else {
vErrors.push(err56);
}
errors++;
}
var _valid5 = _errs110 === errors;
if(_valid5 && valid11){
valid11 = false;
passing5 = [passing5, 20];
}
else {
if(_valid5){
valid11 = true;
passing5 = 20;
}
const _errs111 = errors;
if(!func0(data24, "1363")){
const err57 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/21/const",keyword:"const",params:{allowedValue: "1363"},message:"must be equal to constant",schema:"1363",parentSchema:schema31.properties.t.items.properties.ma.oneOf[21],data:data24};
if(vErrors === null){
vErrors = [err57];
}
else {
vErrors.push(err57);
}
errors++;
}
var _valid5 = _errs111 === errors;
if(_valid5 && valid11){
valid11 = false;
passing5 = [passing5, 21];
}
else {
if(_valid5){
valid11 = true;
passing5 = 21;
}
const _errs112 = errors;
if(!func0(data24, "1481")){
const err58 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/22/const",keyword:"const",params:{allowedValue: "1481"},message:"must be equal to constant",schema:"1481",parentSchema:schema31.properties.t.items.properties.ma.oneOf[22],data:data24};
if(vErrors === null){
vErrors = [err58];
}
else {
vErrors.push(err58);
}
errors++;
}
var _valid5 = _errs112 === errors;
if(_valid5 && valid11){
valid11 = false;
passing5 = [passing5, 22];
}
else {
if(_valid5){
valid11 = true;
passing5 = 22;
}
const _errs113 = errors;
if(!func0(data24, "1484")){
const err59 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/23/const",keyword:"const",params:{allowedValue: "1484"},message:"must be equal to constant",schema:"1484",parentSchema:schema31.properties.t.items.properties.ma.oneOf[23],data:data24};
if(vErrors === null){
vErrors = [err59];
}
else {
vErrors.push(err59);
}
errors++;
}
var _valid5 = _errs113 === errors;
if(_valid5 && valid11){
valid11 = false;
passing5 = [passing5, 23];
}
else {
if(_valid5){
valid11 = true;
passing5 = 23;
}
const _errs114 = errors;
if(!func0(data24, "1489")){
const err60 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/24/const",keyword:"const",params:{allowedValue: "1489"},message:"must be equal to constant",schema:"1489",parentSchema:schema31.properties.t.items.properties.ma.oneOf[24],data:data24};
if(vErrors === null){
vErrors = [err60];
}
else {
vErrors.push(err60);
}
errors++;
}
var _valid5 = _errs114 === errors;
if(_valid5 && valid11){
valid11 = false;
passing5 = [passing5, 24];
}
else {
if(_valid5){
valid11 = true;
passing5 = 24;
}
const _errs115 = errors;
if(!func0(data24, "1767")){
const err61 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/25/const",keyword:"const",params:{allowedValue: "1767"},message:"must be equal to constant",schema:"1767",parentSchema:schema31.properties.t.items.properties.ma.oneOf[25],data:data24};
if(vErrors === null){
vErrors = [err61];
}
else {
vErrors.push(err61);
}
errors++;
}
var _valid5 = _errs115 === errors;
if(_valid5 && valid11){
valid11 = false;
passing5 = [passing5, 25];
}
else {
if(_valid5){
valid11 = true;
passing5 = 25;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
if(!valid11){
const err62 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf",keyword:"oneOf",params:{passingSchemas: passing5},message:"must match exactly one schema in oneOf",schema:schema31.properties.t.items.properties.ma.oneOf,parentSchema:schema31.properties.t.items.properties.ma,data:data24};
if(vErrors === null){
vErrors = [err62];
}
else {
vErrors.push(err62);
}
errors++;
validate20.errors = vErrors;
return false;
}
else {
errors = _errs89;
if(vErrors !== null){
if(_errs89){
vErrors.length = _errs89;
}
else {
vErrors = null;
}
}
}
var valid9 = _errs87 === errors;
}
else {
var valid9 = true;
}
if(valid9){
if(data20.sc !== undefined){
let data25 = data20.sc;
const _errs116 = errors;
if(errors === _errs116){
if(errors === _errs116){
if(typeof data25 === "string"){
if(!(formats4.validate(data25))){
validate20.errors = [{instancePath:instancePath+"/t/" + i1+"/sc",schemaPath:"#/properties/t/items/properties/sc/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\"",schema:"date-time",parentSchema:schema31.properties.t.items.properties.sc,data:data25}];
return false;
}
}
else {
validate20.errors = [{instancePath:instancePath+"/t/" + i1+"/sc",schemaPath:"#/properties/t/items/properties/sc/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.t.items.properties.sc.type,parentSchema:schema31.properties.t.items.properties.sc,data:data25}];
return false;
}
}
}
var valid9 = _errs116 === errors;
}
else {
var valid9 = true;
}
if(valid9){
if(data20.dr !== undefined){
let data26 = data20.dr;
const _errs118 = errors;
if(errors === _errs118){
if(errors === _errs118){
if(typeof data26 === "string"){
if(!(formats4.validate(data26))){
validate20.errors = [{instancePath:instancePath+"/t/" + i1+"/dr",schemaPath:"#/properties/t/items/properties/dr/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\"",schema:"date-time",parentSchema:schema31.properties.t.items.properties.dr,data:data26}];
return false;
}
}
else {
validate20.errors = [{instancePath:instancePath+"/t/" + i1+"/dr",schemaPath:"#/properties/t/items/properties/dr/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.t.items.properties.dr.type,parentSchema:schema31.properties.t.items.properties.dr,data:data26}];
return false;
}
}
}
var valid9 = _errs118 === errors;
}
else {
var valid9 = true;
}
if(valid9){
if(data20.tr !== undefined){
let data27 = data20.tr;
const _errs120 = errors;
if(typeof data27 !== "string"){
validate20.errors = [{instancePath:instancePath+"/t/" + i1+"/tr",schemaPath:"#/properties/t/items/properties/tr/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.t.items.properties.tr.type,parentSchema:schema31.properties.t.items.properties.tr,data:data27}];
return false;
}
const _errs122 = errors;
let valid12 = false;
let passing6 = null;
const _errs123 = errors;
if(!func0(data27, "260373001")){
const err63 = {instancePath:instancePath+"/t/" + i1+"/tr",schemaPath:"#/properties/t/items/properties/tr/oneOf/0/const",keyword:"const",params:{allowedValue: "260373001"},message:"must be equal to constant",schema:"260373001",parentSchema:schema31.properties.t.items.properties.tr.oneOf[0],data:data27};
if(vErrors === null){
vErrors = [err63];
}
else {
vErrors.push(err63);
}
errors++;
}
var _valid6 = _errs123 === errors;
if(_valid6){
valid12 = true;
passing6 = 0;
}
const _errs124 = errors;
if(!func0(data27, "260415000")){
const err64 = {instancePath:instancePath+"/t/" + i1+"/tr",schemaPath:"#/properties/t/items/properties/tr/oneOf/1/const",keyword:"const",params:{allowedValue: "260415000"},message:"must be equal to constant",schema:"260415000",parentSchema:schema31.properties.t.items.properties.tr.oneOf[1],data:data27};
if(vErrors === null){
vErrors = [err64];
}
else {
vErrors.push(err64);
}
errors++;
}
var _valid6 = _errs124 === errors;
if(_valid6 && valid12){
valid12 = false;
passing6 = [passing6, 1];
}
else {
if(_valid6){
valid12 = true;
passing6 = 1;
}
}
if(!valid12){
const err65 = {instancePath:instancePath+"/t/" + i1+"/tr",schemaPath:"#/properties/t/items/properties/tr/oneOf",keyword:"oneOf",params:{passingSchemas: passing6},message:"must match exactly one schema in oneOf",schema:schema31.properties.t.items.properties.tr.oneOf,parentSchema:schema31.properties.t.items.properties.tr,data:data27};
if(vErrors === null){
vErrors = [err65];
}
else {
vErrors.push(err65);
}
errors++;
validate20.errors = vErrors;
return false;
}
else {
errors = _errs122;
if(vErrors !== null){
if(_errs122){
vErrors.length = _errs122;
}
else {
vErrors = null;
}
}
}
var valid9 = _errs120 === errors;
}
else {
var valid9 = true;
}
if(valid9){
if(data20.tc !== undefined){
let data28 = data20.tc;
const _errs125 = errors;
if(errors === _errs125){
if(typeof data28 === "string"){
if(func3(data28) > 50){
validate20.errors = [{instancePath:instancePath+"/t/" + i1+"/tc",schemaPath:"#/properties/t/items/properties/tc/maxLength",keyword:"maxLength",params:{limit: 50},message:"must NOT have more than 50 characters",schema:50,parentSchema:schema31.properties.t.items.properties.tc,data:data28}];
return false;
}
}
else {
validate20.errors = [{instancePath:instancePath+"/t/" + i1+"/tc",schemaPath:"#/properties/t/items/properties/tc/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.t.items.properties.tc.type,parentSchema:schema31.properties.t.items.properties.tc,data:data28}];
return false;
}
}
var valid9 = _errs125 === errors;
}
else {
var valid9 = true;
}
if(valid9){
if(data20.co !== undefined){
let data29 = data20.co;
const _errs127 = errors;
if(errors === _errs127){
if(typeof data29 === "string"){
if(!pattern8.test(data29)){
validate20.errors = [{instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/properties/t/items/properties/co/pattern",keyword:"pattern",params:{pattern: "[A-Z]{1,10}"},message:"must match pattern \""+"[A-Z]{1,10}"+"\"",schema:"[A-Z]{1,10}",parentSchema:schema31.properties.t.items.properties.co,data:data29}];
return false;
}
}
else {
validate20.errors = [{instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/properties/t/items/properties/co/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.t.items.properties.co.type,parentSchema:schema31.properties.t.items.properties.co,data:data29}];
return false;
}
}
var valid9 = _errs127 === errors;
}
else {
var valid9 = true;
}
if(valid9){
if(data20.is !== undefined){
let data30 = data20.is;
const _errs129 = errors;
if(errors === _errs129){
if(typeof data30 === "string"){
if(func3(data30) > 50){
validate20.errors = [{instancePath:instancePath+"/t/" + i1+"/is",schemaPath:"#/properties/t/items/properties/is/maxLength",keyword:"maxLength",params:{limit: 50},message:"must NOT have more than 50 characters",schema:50,parentSchema:schema31.properties.t.items.properties.is,data:data30}];
return false;
}
}
else {
validate20.errors = [{instancePath:instancePath+"/t/" + i1+"/is",schemaPath:"#/properties/t/items/properties/is/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.t.items.properties.is.type,parentSchema:schema31.properties.t.items.properties.is,data:data30}];
return false;
}
}
var valid9 = _errs129 === errors;
}
else {
var valid9 = true;
}
if(valid9){
if(data20.ci !== undefined){
let data31 = data20.ci;
const _errs131 = errors;
if(errors === _errs131){
if(typeof data31 === "string"){
if(func3(data31) > 50){
validate20.errors = [{instancePath:instancePath+"/t/" + i1+"/ci",schemaPath:"#/properties/t/items/properties/ci/maxLength",keyword:"maxLength",params:{limit: 50},message:"must NOT have more than 50 characters",schema:50,parentSchema:schema31.properties.t.items.properties.ci,data:data31}];
return false;
}
}
else {
validate20.errors = [{instancePath:instancePath+"/t/" + i1+"/ci",schemaPath:"#/properties/t/items/properties/ci/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.t.items.properties.ci.type,parentSchema:schema31.properties.t.items.properties.ci,data:data31}];
return false;
}
}
var valid9 = _errs131 === errors;
}
else {
var valid9 = true;
}
}
}
}
}
}
}
}
}
}
}
}
}
else {
validate20.errors = [{instancePath:instancePath+"/t/" + i1,schemaPath:"#/properties/t/items/type",keyword:"type",params:{type: "object"},message:"must be object",schema:schema31.properties.t.items.type,parentSchema:schema31.properties.t.items,data:data20}];
return false;
}
}
var valid8 = _errs77 === errors;
if(!valid8){
break;
}
}
}
}
else {
validate20.errors = [{instancePath:instancePath+"/t",schemaPath:"#/properties/t/type",keyword:"type",params:{type: "array"},message:"must be array",schema:schema31.properties.t.type,parentSchema:schema31.properties.t,data:data19}];
return false;
}
}
var valid0 = _errs75 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.r !== undefined){
let data32 = data.r;
const _errs133 = errors;
if(errors === _errs133){
if(Array.isArray(data32)){
if(data32.length < 1){
validate20.errors = [{instancePath:instancePath+"/r",schemaPath:"#/properties/r/minItems",keyword:"minItems",params:{limit: 1},message:"must NOT have fewer than 1 items",schema:1,parentSchema:schema31.properties.r,data:data32}];
return false;
}
else {
var valid13 = true;
const len2 = data32.length;
for(let i2=0; i2<len2; i2++){
let data33 = data32[i2];
const _errs135 = errors;
if(errors === _errs135){
if(data33 && typeof data33 == "object" && !Array.isArray(data33)){
let missing4;
if((((((((data33.tg === undefined) && (missing4 = "tg")) || ((data33.fr === undefined) && (missing4 = "fr"))) || ((data33.co === undefined) && (missing4 = "co"))) || ((data33.is === undefined) && (missing4 = "is"))) || ((data33.df === undefined) && (missing4 = "df"))) || ((data33.du === undefined) && (missing4 = "du"))) || ((data33.ci === undefined) && (missing4 = "ci"))){
validate20.errors = [{instancePath:instancePath+"/r/" + i2,schemaPath:"#/properties/r/items/required",keyword:"required",params:{missingProperty: missing4},message:"must have required property '"+missing4+"'",schema:schema31.properties.r.items.required,parentSchema:schema31.properties.r.items,data:data33}];
return false;
}
else {
if(data33.tg !== undefined){
let data34 = data33.tg;
const _errs137 = errors;
if(typeof data34 !== "string"){
validate20.errors = [{instancePath:instancePath+"/r/" + i2+"/tg",schemaPath:"#/properties/r/items/properties/tg/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.r.items.properties.tg.type,parentSchema:schema31.properties.r.items.properties.tg,data:data34}];
return false;
}
const _errs139 = errors;
let valid15 = false;
let passing7 = null;
const _errs140 = errors;
if(!func0(data34, "840539006")){
const err66 = {instancePath:instancePath+"/r/" + i2+"/tg",schemaPath:"#/properties/r/items/properties/tg/oneOf/0/const",keyword:"const",params:{allowedValue: "840539006"},message:"must be equal to constant",schema:"840539006",parentSchema:schema31.properties.r.items.properties.tg.oneOf[0],data:data34};
if(vErrors === null){
vErrors = [err66];
}
else {
vErrors.push(err66);
}
errors++;
}
var _valid7 = _errs140 === errors;
if(_valid7){
valid15 = true;
passing7 = 0;
}
if(!valid15){
const err67 = {instancePath:instancePath+"/r/" + i2+"/tg",schemaPath:"#/properties/r/items/properties/tg/oneOf",keyword:"oneOf",params:{passingSchemas: passing7},message:"must match exactly one schema in oneOf",schema:schema31.properties.r.items.properties.tg.oneOf,parentSchema:schema31.properties.r.items.properties.tg,data:data34};
if(vErrors === null){
vErrors = [err67];
}
else {
vErrors.push(err67);
}
errors++;
validate20.errors = vErrors;
return false;
}
else {
errors = _errs139;
if(vErrors !== null){
if(_errs139){
vErrors.length = _errs139;
}
else {
vErrors = null;
}
}
}
var valid14 = _errs137 === errors;
}
else {
var valid14 = true;
}
if(valid14){
if(data33.fr !== undefined){
let data35 = data33.fr;
const _errs141 = errors;
if(errors === _errs141){
if(errors === _errs141){
if(typeof data35 === "string"){
if(!(formats0.validate(data35))){
validate20.errors = [{instancePath:instancePath+"/r/" + i2+"/fr",schemaPath:"#/properties/r/items/properties/fr/format",keyword:"format",params:{format: "date"},message:"must match format \""+"date"+"\"",schema:"date",parentSchema:schema31.properties.r.items.properties.fr,data:data35}];
return false;
}
}
else {
validate20.errors = [{instancePath:instancePath+"/r/" + i2+"/fr",schemaPath:"#/properties/r/items/properties/fr/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.r.items.properties.fr.type,parentSchema:schema31.properties.r.items.properties.fr,data:data35}];
return false;
}
}
}
var valid14 = _errs141 === errors;
}
else {
var valid14 = true;
}
if(valid14){
if(data33.co !== undefined){
let data36 = data33.co;
const _errs143 = errors;
if(errors === _errs143){
if(typeof data36 === "string"){
if(!pattern8.test(data36)){
validate20.errors = [{instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/properties/r/items/properties/co/pattern",keyword:"pattern",params:{pattern: "[A-Z]{1,10}"},message:"must match pattern \""+"[A-Z]{1,10}"+"\"",schema:"[A-Z]{1,10}",parentSchema:schema31.properties.r.items.properties.co,data:data36}];
return false;
}
}
else {
validate20.errors = [{instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/properties/r/items/properties/co/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.r.items.properties.co.type,parentSchema:schema31.properties.r.items.properties.co,data:data36}];
return false;
}
}
var valid14 = _errs143 === errors;
}
else {
var valid14 = true;
}
if(valid14){
if(data33.is !== undefined){
let data37 = data33.is;
const _errs145 = errors;
if(errors === _errs145){
if(typeof data37 === "string"){
if(func3(data37) > 50){
validate20.errors = [{instancePath:instancePath+"/r/" + i2+"/is",schemaPath:"#/properties/r/items/properties/is/maxLength",keyword:"maxLength",params:{limit: 50},message:"must NOT have more than 50 characters",schema:50,parentSchema:schema31.properties.r.items.properties.is,data:data37}];
return false;
}
}
else {
validate20.errors = [{instancePath:instancePath+"/r/" + i2+"/is",schemaPath:"#/properties/r/items/properties/is/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.r.items.properties.is.type,parentSchema:schema31.properties.r.items.properties.is,data:data37}];
return false;
}
}
var valid14 = _errs145 === errors;
}
else {
var valid14 = true;
}
if(valid14){
if(data33.df !== undefined){
let data38 = data33.df;
const _errs147 = errors;
if(errors === _errs147){
if(errors === _errs147){
if(typeof data38 === "string"){
if(!(formats0.validate(data38))){
validate20.errors = [{instancePath:instancePath+"/r/" + i2+"/df",schemaPath:"#/properties/r/items/properties/df/format",keyword:"format",params:{format: "date"},message:"must match format \""+"date"+"\"",schema:"date",parentSchema:schema31.properties.r.items.properties.df,data:data38}];
return false;
}
}
else {
validate20.errors = [{instancePath:instancePath+"/r/" + i2+"/df",schemaPath:"#/properties/r/items/properties/df/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.r.items.properties.df.type,parentSchema:schema31.properties.r.items.properties.df,data:data38}];
return false;
}
}
}
var valid14 = _errs147 === errors;
}
else {
var valid14 = true;
}
if(valid14){
if(data33.du !== undefined){
let data39 = data33.du;
const _errs149 = errors;
if(errors === _errs149){
if(errors === _errs149){
if(typeof data39 === "string"){
if(!(formats0.validate(data39))){
validate20.errors = [{instancePath:instancePath+"/r/" + i2+"/du",schemaPath:"#/properties/r/items/properties/du/format",keyword:"format",params:{format: "date"},message:"must match format \""+"date"+"\"",schema:"date",parentSchema:schema31.properties.r.items.properties.du,data:data39}];
return false;
}
}
else {
validate20.errors = [{instancePath:instancePath+"/r/" + i2+"/du",schemaPath:"#/properties/r/items/properties/du/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.r.items.properties.du.type,parentSchema:schema31.properties.r.items.properties.du,data:data39}];
return false;
}
}
}
var valid14 = _errs149 === errors;
}
else {
var valid14 = true;
}
if(valid14){
if(data33.ci !== undefined){
let data40 = data33.ci;
const _errs151 = errors;
if(errors === _errs151){
if(typeof data40 === "string"){
if(func3(data40) > 50){
validate20.errors = [{instancePath:instancePath+"/r/" + i2+"/ci",schemaPath:"#/properties/r/items/properties/ci/maxLength",keyword:"maxLength",params:{limit: 50},message:"must NOT have more than 50 characters",schema:50,parentSchema:schema31.properties.r.items.properties.ci,data:data40}];
return false;
}
}
else {
validate20.errors = [{instancePath:instancePath+"/r/" + i2+"/ci",schemaPath:"#/properties/r/items/properties/ci/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.r.items.properties.ci.type,parentSchema:schema31.properties.r.items.properties.ci,data:data40}];
return false;
}
}
var valid14 = _errs151 === errors;
}
else {
var valid14 = true;
}
}
}
}
}
}
}
}
}
else {
validate20.errors = [{instancePath:instancePath+"/r/" + i2,schemaPath:"#/properties/r/items/type",keyword:"type",params:{type: "object"},message:"must be object",schema:schema31.properties.r.items.type,parentSchema:schema31.properties.r.items,data:data33}];
return false;
}
}
var valid13 = _errs135 === errors;
if(!valid13){
break;
}
}
}
}
else {
validate20.errors = [{instancePath:instancePath+"/r",schemaPath:"#/properties/r/type",keyword:"type",params:{type: "array"},message:"must be array",schema:schema31.properties.r.type,parentSchema:schema31.properties.r,data:data32}];
return false;
}
}
var valid0 = _errs133 === errors;
}
else {
var valid0 = true;
}
}
}
}
}
}
}
}
else {
validate20.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object",schema:schema31.type,parentSchema:schema31,data}];
return false;
}
}
validate20.errors = vErrors;
return errors === 0;
}
validate20.evaluated = {"props":{"ver":true,"nam":true,"dob":true,"v":true,"t":true,"r":true},"dynamicProps":false,"dynamicItems":false};
