"use strict";
module.exports = validate20;
module.exports.default = validate20;
const schema31 = {"$schema":"https://json-schema.org/draft/2020-12/schema","$id":"https://id.uvci.eu/DCC.schema.json","title":"EU DGC","description":"EU Digital Green Certificate","$comment":"Schema version 1.1.0","required":["ver","nam","dob"],"type":"object","properties":{"ver":{"title":"Schema version","description":"Version of the schema, according to Semantic versioning (ISO, https://semver.org/ version 2.0.0 or newer)","type":"string","pattern":"^\\d+.\\d+.\\d+$","examples":["1.1.0"]},"nam":{"description":"Surname(s), given name(s) - in that order","required":["fnt"],"type":"object","properties":{"fn":{"title":"Family name","description":"The family or primary name(s) of the person addressed in the certificate","type":"string","maxLength":50,"examples":["d'Červenková Panklová"]},"fnt":{"title":"Standardised family name","description":"The family name(s) of the person transliterated","type":"string","pattern":"^[A-Z<]*$","maxLength":50,"examples":["DCERVENKOVA<PANKLOVA"]},"gn":{"title":"Given name","description":"The given name(s) of the person addressed in the certificate","type":"string","maxLength":50,"examples":["Jiřina-Maria Alena"]},"gnt":{"title":"Standardised given name","description":"The given name(s) of the person transliterated","type":"string","pattern":"^[A-Z<]*$","maxLength":50,"examples":["JIRINA<MARIA<ALENA"]}}},"dob":{"title":"Date of birth","description":"Date of Birth of the person addressed in the DGC. ISO 8601 date format restricted to range 1900-2099","type":"string","pattern":"^(19|20)\\d\\d(-\\d\\d){0,2}$","examples":["1979-04-14","1950","1901-08"]},"v":{"description":"Vaccination Group","type":"array","items":{"description":"Vaccination Entry","required":["tg","vp","mp","ma","dn","sd","dt","co","is","ci"],"type":"object","properties":{"tg":{"description":"disease or agent targeted","type":"string","oneOf":[{"const":"840539006"}]},"vp":{"description":"vaccine or prophylaxis","type":"string","oneOf":[{"const":"1119305005"},{"const":"1119349007"},{"const":"J07BX03"}]},"mp":{"description":"vaccine medicinal product","type":"string","oneOf":[{"const":"EU/1/20/1528"},{"const":"EU/1/20/1507"},{"const":"EU/1/21/1529"},{"const":"EU/1/20/1525"},{"const":"CVnCoV"},{"const":"Sputnik-V"},{"const":"Convidecia"},{"const":"EpiVacCorona"},{"const":"BBIBP-CorV"},{"const":"Inactivated-SARS-CoV-2-Vero-Cell"},{"const":"CoronaVac"},{"const":"Covaxin"}]},"ma":{"description":"Marketing Authorization Holder - if no MAH present, then manufacturer","type":"string","oneOf":[{"const":"ORG-100001699"},{"const":"ORG-100030215"},{"const":"ORG-100001417"},{"const":"ORG-100031184"},{"const":"ORG-100006270"},{"const":"ORG-100013793"},{"const":"ORG-100020693"},{"const":"ORG-100010771"},{"const":"ORG-100024420"},{"const":"ORG-100032020"},{"const":"Gamaleya-Research-Institute"},{"const":"Vector-Institute"},{"const":"Sinovac-Biotech"},{"const":"Bharat-Biotech"}]},"dn":{"description":"Dose Number","type":"integer","minimum":1,"maximum":9},"sd":{"description":"Total Series of Doses","type":"integer","minimum":1,"maximum":9},"dt":{"description":"Date of Vaccination","type":"string","format":"date","$comment":"SemanticSG: constrain to specific date range?"},"co":{"description":"Country of Vaccination","type":"string","pattern":"[A-Z]{1,10}"},"is":{"description":"Certificate Issuer","type":"string","maxLength":50},"ci":{"description":"Unique Certificate Identifier: UVCI","type":"string","maxLength":50}}},"minItems":1},"t":{"description":"Test Group","type":"array","items":{"description":"Test Entry","required":["tg","tt","sc","tr","tc","co","is","ci"],"type":"object","properties":{"tg":{"description":"EU eHealthNetwork: Value Sets for Digital Green Certificates. version 1.0, 2021-04-16, section 2.1","type":"string","oneOf":[{"const":"840539006"}]},"tt":{"description":"Type of Test","type":"string","oneOf":[{"const":"LP6464-4"},{"const":"LP217198-3"}]},"nm":{"description":"NAA Test Name","type":"string"},"ma":{"description":"RAT Test name and manufacturer","type":"string","oneOf":[{"const":"308"},{"const":"344"},{"const":"345"},{"const":"768"},{"const":"1065"},{"const":"1097"},{"const":"1114"},{"const":"1144"},{"const":"1162"},{"const":"1173"},{"const":"1180"},{"const":"1190"},{"const":"1199"},{"const":"1215"},{"const":"1218"},{"const":"1223"},{"const":"1225"},{"const":"1232"},{"const":"1236"},{"const":"1242"},{"const":"1244"},{"const":"1246"},{"const":"1253"},{"const":"1256"},{"const":"1263"},{"const":"1266"},{"const":"1267"},{"const":"1268"},{"const":"1271"},{"const":"1278"},{"const":"1295"},{"const":"1296"},{"const":"1304"},{"const":"1319"},{"const":"1331"},{"const":"1333"},{"const":"1341"},{"const":"1343"},{"const":"1360"},{"const":"1363"},{"const":"1365"},{"const":"1375"},{"const":"1392"},{"const":"1420"},{"const":"1437"},{"const":"1443"},{"const":"1456"},{"const":"1466"},{"const":"1468"},{"const":"1481"},{"const":"1484"},{"const":"1489"},{"const":"1490"},{"const":"1574"},{"const":"1604"},{"const":"1606"},{"const":"1654"},{"const":"1736"},{"const":"1747"},{"const":"1763"},{"const":"1764"},{"const":"1767"},{"const":"1769"},{"const":"1815"},{"const":"1822"},{"const":"1833"},{"const":"1844"},{"const":"1870"},{"const":"1884"},{"const":"1906"},{"const":"1919"},{"const":"1934"},{"const":"2010"},{"const":"2017"}]},"sc":{"description":"Date/Time of Sample Collection","type":"string","format":"date-time"},"dr":{"description":"Date/Time of Test Result","type":"string","format":"date-time"},"tr":{"description":"Test Result","type":"string","oneOf":[{"const":"260373001"},{"const":"260415000"}]},"tc":{"description":"Testing Centre","type":"string","maxLength":50},"co":{"description":"Country of Test","type":"string","pattern":"[A-Z]{1,10}"},"is":{"description":"Certificate Issuer","type":"string","maxLength":50},"ci":{"description":"Unique Certificate Identifier, UVCI","type":"string","maxLength":50}}},"minItems":1},"r":{"description":"Recovery Group","type":"array","items":{"description":"Recovery Entry","required":["tg","fr","co","is","df","du","ci"],"type":"object","properties":{"tg":{"description":"EU eHealthNetwork: Value Sets for Digital Green Certificates. version 1.0, 2021-04-16, section 2.1","type":"string","oneOf":[{"const":"840539006"}]},"fr":{"description":"ISO 8601 Date of First Positive Test Result","type":"string","format":"date"},"co":{"description":"Country of Test","type":"string","pattern":"[A-Z]{1,10}"},"is":{"description":"Certificate Issuer","type":"string","maxLength":50},"df":{"description":"ISO 8601 Date: Certificate Valid From","type":"string","format":"date"},"du":{"description":"Certificate Valid Until","type":"string","format":"date"},"ci":{"description":"Unique Certificate Identifier, UVCI","type":"string","maxLength":50}}},"minItems":1}}};
const pattern4 = new RegExp("^\\d+.\\d+.\\d+$", "u");
const pattern5 = new RegExp("^[A-Z<]*$", "u");
const pattern7 = new RegExp("^(19|20)\\d\\d(-\\d\\d){0,2}$", "u");
const pattern8 = new RegExp("[A-Z]{1,10}", "u");
const func3 = require("ajv/dist/runtime/ucs2length").default;
const formats0 = require("ajv-formats/dist/formats").fullFormats.date;
const formats2 = require("ajv-formats/dist/formats").fullFormats["date-time"];

function validate20(data, {instancePath="", parentData, parentDataProperty, rootData=data, dynamicAnchors={}}={}){
/*# sourceURL="https://id.uvci.eu/DCC.schema.json" */;
let vErrors = null;
let errors = 0;
const evaluated0 = validate20.evaluated;
if(evaluated0.dynamicProps){
evaluated0.props = undefined;
}
if(evaluated0.dynamicItems){
evaluated0.items = undefined;
}
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.ver === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "ver"},message:"must have required property '"+"ver"+"'",schema:schema31.required,parentSchema:schema31,data};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.nam === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "nam"},message:"must have required property '"+"nam"+"'",schema:schema31.required,parentSchema:schema31,data};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.dob === undefined){
const err2 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "dob"},message:"must have required property '"+"dob"+"'",schema:schema31.required,parentSchema:schema31,data};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
if(data.ver !== undefined){
let data0 = data.ver;
if(typeof data0 === "string"){
if(!pattern4.test(data0)){
const err3 = {instancePath:instancePath+"/ver",schemaPath:"#/properties/ver/pattern",keyword:"pattern",params:{pattern: "^\\d+.\\d+.\\d+$"},message:"must match pattern \""+"^\\d+.\\d+.\\d+$"+"\"",schema:"^\\d+.\\d+.\\d+$",parentSchema:schema31.properties.ver,data:data0};
if(vErrors === null){
vErrors = [err3];
}
else {
vErrors.push(err3);
}
errors++;
}
}
else {
const err4 = {instancePath:instancePath+"/ver",schemaPath:"#/properties/ver/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.ver.type,parentSchema:schema31.properties.ver,data:data0};
if(vErrors === null){
vErrors = [err4];
}
else {
vErrors.push(err4);
}
errors++;
}
}
if(data.nam !== undefined){
let data1 = data.nam;
if(data1 && typeof data1 == "object" && !Array.isArray(data1)){
if(data1.fnt === undefined){
const err5 = {instancePath:instancePath+"/nam",schemaPath:"#/properties/nam/required",keyword:"required",params:{missingProperty: "fnt"},message:"must have required property '"+"fnt"+"'",schema:schema31.properties.nam.required,parentSchema:schema31.properties.nam,data:data1};
if(vErrors === null){
vErrors = [err5];
}
else {
vErrors.push(err5);
}
errors++;
}
if(data1.fn !== undefined){
let data2 = data1.fn;
if(typeof data2 === "string"){
if(func3(data2) > 50){
const err6 = {instancePath:instancePath+"/nam/fn",schemaPath:"#/properties/nam/properties/fn/maxLength",keyword:"maxLength",params:{limit: 50},message:"must NOT have more than 50 characters",schema:50,parentSchema:schema31.properties.nam.properties.fn,data:data2};
if(vErrors === null){
vErrors = [err6];
}
else {
vErrors.push(err6);
}
errors++;
}
}
else {
const err7 = {instancePath:instancePath+"/nam/fn",schemaPath:"#/properties/nam/properties/fn/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.nam.properties.fn.type,parentSchema:schema31.properties.nam.properties.fn,data:data2};
if(vErrors === null){
vErrors = [err7];
}
else {
vErrors.push(err7);
}
errors++;
}
}
if(data1.fnt !== undefined){
let data3 = data1.fnt;
if(typeof data3 === "string"){
if(func3(data3) > 50){
const err8 = {instancePath:instancePath+"/nam/fnt",schemaPath:"#/properties/nam/properties/fnt/maxLength",keyword:"maxLength",params:{limit: 50},message:"must NOT have more than 50 characters",schema:50,parentSchema:schema31.properties.nam.properties.fnt,data:data3};
if(vErrors === null){
vErrors = [err8];
}
else {
vErrors.push(err8);
}
errors++;
}
if(!pattern5.test(data3)){
const err9 = {instancePath:instancePath+"/nam/fnt",schemaPath:"#/properties/nam/properties/fnt/pattern",keyword:"pattern",params:{pattern: "^[A-Z<]*$"},message:"must match pattern \""+"^[A-Z<]*$"+"\"",schema:"^[A-Z<]*$",parentSchema:schema31.properties.nam.properties.fnt,data:data3};
if(vErrors === null){
vErrors = [err9];
}
else {
vErrors.push(err9);
}
errors++;
}
}
else {
const err10 = {instancePath:instancePath+"/nam/fnt",schemaPath:"#/properties/nam/properties/fnt/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.nam.properties.fnt.type,parentSchema:schema31.properties.nam.properties.fnt,data:data3};
if(vErrors === null){
vErrors = [err10];
}
else {
vErrors.push(err10);
}
errors++;
}
}
if(data1.gn !== undefined){
let data4 = data1.gn;
if(typeof data4 === "string"){
if(func3(data4) > 50){
const err11 = {instancePath:instancePath+"/nam/gn",schemaPath:"#/properties/nam/properties/gn/maxLength",keyword:"maxLength",params:{limit: 50},message:"must NOT have more than 50 characters",schema:50,parentSchema:schema31.properties.nam.properties.gn,data:data4};
if(vErrors === null){
vErrors = [err11];
}
else {
vErrors.push(err11);
}
errors++;
}
}
else {
const err12 = {instancePath:instancePath+"/nam/gn",schemaPath:"#/properties/nam/properties/gn/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.nam.properties.gn.type,parentSchema:schema31.properties.nam.properties.gn,data:data4};
if(vErrors === null){
vErrors = [err12];
}
else {
vErrors.push(err12);
}
errors++;
}
}
if(data1.gnt !== undefined){
let data5 = data1.gnt;
if(typeof data5 === "string"){
if(func3(data5) > 50){
const err13 = {instancePath:instancePath+"/nam/gnt",schemaPath:"#/properties/nam/properties/gnt/maxLength",keyword:"maxLength",params:{limit: 50},message:"must NOT have more than 50 characters",schema:50,parentSchema:schema31.properties.nam.properties.gnt,data:data5};
if(vErrors === null){
vErrors = [err13];
}
else {
vErrors.push(err13);
}
errors++;
}
if(!pattern5.test(data5)){
const err14 = {instancePath:instancePath+"/nam/gnt",schemaPath:"#/properties/nam/properties/gnt/pattern",keyword:"pattern",params:{pattern: "^[A-Z<]*$"},message:"must match pattern \""+"^[A-Z<]*$"+"\"",schema:"^[A-Z<]*$",parentSchema:schema31.properties.nam.properties.gnt,data:data5};
if(vErrors === null){
vErrors = [err14];
}
else {
vErrors.push(err14);
}
errors++;
}
}
else {
const err15 = {instancePath:instancePath+"/nam/gnt",schemaPath:"#/properties/nam/properties/gnt/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.nam.properties.gnt.type,parentSchema:schema31.properties.nam.properties.gnt,data:data5};
if(vErrors === null){
vErrors = [err15];
}
else {
vErrors.push(err15);
}
errors++;
}
}
}
else {
const err16 = {instancePath:instancePath+"/nam",schemaPath:"#/properties/nam/type",keyword:"type",params:{type: "object"},message:"must be object",schema:schema31.properties.nam.type,parentSchema:schema31.properties.nam,data:data1};
if(vErrors === null){
vErrors = [err16];
}
else {
vErrors.push(err16);
}
errors++;
}
}
if(data.dob !== undefined){
let data6 = data.dob;
if(typeof data6 === "string"){
if(!pattern7.test(data6)){
const err17 = {instancePath:instancePath+"/dob",schemaPath:"#/properties/dob/pattern",keyword:"pattern",params:{pattern: "^(19|20)\\d\\d(-\\d\\d){0,2}$"},message:"must match pattern \""+"^(19|20)\\d\\d(-\\d\\d){0,2}$"+"\"",schema:"^(19|20)\\d\\d(-\\d\\d){0,2}$",parentSchema:schema31.properties.dob,data:data6};
if(vErrors === null){
vErrors = [err17];
}
else {
vErrors.push(err17);
}
errors++;
}
}
else {
const err18 = {instancePath:instancePath+"/dob",schemaPath:"#/properties/dob/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.dob.type,parentSchema:schema31.properties.dob,data:data6};
if(vErrors === null){
vErrors = [err18];
}
else {
vErrors.push(err18);
}
errors++;
}
}
if(data.v !== undefined){
let data7 = data.v;
if(Array.isArray(data7)){
if(data7.length < 1){
const err19 = {instancePath:instancePath+"/v",schemaPath:"#/properties/v/minItems",keyword:"minItems",params:{limit: 1},message:"must NOT have fewer than 1 items",schema:1,parentSchema:schema31.properties.v,data:data7};
if(vErrors === null){
vErrors = [err19];
}
else {
vErrors.push(err19);
}
errors++;
}
const len0 = data7.length;
for(let i0=0; i0<len0; i0++){
let data8 = data7[i0];
if(data8 && typeof data8 == "object" && !Array.isArray(data8)){
if(data8.tg === undefined){
const err20 = {instancePath:instancePath+"/v/" + i0,schemaPath:"#/properties/v/items/required",keyword:"required",params:{missingProperty: "tg"},message:"must have required property '"+"tg"+"'",schema:schema31.properties.v.items.required,parentSchema:schema31.properties.v.items,data:data8};
if(vErrors === null){
vErrors = [err20];
}
else {
vErrors.push(err20);
}
errors++;
}
if(data8.vp === undefined){
const err21 = {instancePath:instancePath+"/v/" + i0,schemaPath:"#/properties/v/items/required",keyword:"required",params:{missingProperty: "vp"},message:"must have required property '"+"vp"+"'",schema:schema31.properties.v.items.required,parentSchema:schema31.properties.v.items,data:data8};
if(vErrors === null){
vErrors = [err21];
}
else {
vErrors.push(err21);
}
errors++;
}
if(data8.mp === undefined){
const err22 = {instancePath:instancePath+"/v/" + i0,schemaPath:"#/properties/v/items/required",keyword:"required",params:{missingProperty: "mp"},message:"must have required property '"+"mp"+"'",schema:schema31.properties.v.items.required,parentSchema:schema31.properties.v.items,data:data8};
if(vErrors === null){
vErrors = [err22];
}
else {
vErrors.push(err22);
}
errors++;
}
if(data8.ma === undefined){
const err23 = {instancePath:instancePath+"/v/" + i0,schemaPath:"#/properties/v/items/required",keyword:"required",params:{missingProperty: "ma"},message:"must have required property '"+"ma"+"'",schema:schema31.properties.v.items.required,parentSchema:schema31.properties.v.items,data:data8};
if(vErrors === null){
vErrors = [err23];
}
else {
vErrors.push(err23);
}
errors++;
}
if(data8.dn === undefined){
const err24 = {instancePath:instancePath+"/v/" + i0,schemaPath:"#/properties/v/items/required",keyword:"required",params:{missingProperty: "dn"},message:"must have required property '"+"dn"+"'",schema:schema31.properties.v.items.required,parentSchema:schema31.properties.v.items,data:data8};
if(vErrors === null){
vErrors = [err24];
}
else {
vErrors.push(err24);
}
errors++;
}
if(data8.sd === undefined){
const err25 = {instancePath:instancePath+"/v/" + i0,schemaPath:"#/properties/v/items/required",keyword:"required",params:{missingProperty: "sd"},message:"must have required property '"+"sd"+"'",schema:schema31.properties.v.items.required,parentSchema:schema31.properties.v.items,data:data8};
if(vErrors === null){
vErrors = [err25];
}
else {
vErrors.push(err25);
}
errors++;
}
if(data8.dt === undefined){
const err26 = {instancePath:instancePath+"/v/" + i0,schemaPath:"#/properties/v/items/required",keyword:"required",params:{missingProperty: "dt"},message:"must have required property '"+"dt"+"'",schema:schema31.properties.v.items.required,parentSchema:schema31.properties.v.items,data:data8};
if(vErrors === null){
vErrors = [err26];
}
else {
vErrors.push(err26);
}
errors++;
}
if(data8.co === undefined){
const err27 = {instancePath:instancePath+"/v/" + i0,schemaPath:"#/properties/v/items/required",keyword:"required",params:{missingProperty: "co"},message:"must have required property '"+"co"+"'",schema:schema31.properties.v.items.required,parentSchema:schema31.properties.v.items,data:data8};
if(vErrors === null){
vErrors = [err27];
}
else {
vErrors.push(err27);
}
errors++;
}
if(data8.is === undefined){
const err28 = {instancePath:instancePath+"/v/" + i0,schemaPath:"#/properties/v/items/required",keyword:"required",params:{missingProperty: "is"},message:"must have required property '"+"is"+"'",schema:schema31.properties.v.items.required,parentSchema:schema31.properties.v.items,data:data8};
if(vErrors === null){
vErrors = [err28];
}
else {
vErrors.push(err28);
}
errors++;
}
if(data8.ci === undefined){
const err29 = {instancePath:instancePath+"/v/" + i0,schemaPath:"#/properties/v/items/required",keyword:"required",params:{missingProperty: "ci"},message:"must have required property '"+"ci"+"'",schema:schema31.properties.v.items.required,parentSchema:schema31.properties.v.items,data:data8};
if(vErrors === null){
vErrors = [err29];
}
else {
vErrors.push(err29);
}
errors++;
}
if(data8.tg !== undefined){
let data9 = data8.tg;
if(typeof data9 !== "string"){
const err30 = {instancePath:instancePath+"/v/" + i0+"/tg",schemaPath:"#/properties/v/items/properties/tg/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.v.items.properties.tg.type,parentSchema:schema31.properties.v.items.properties.tg,data:data9};
if(vErrors === null){
vErrors = [err30];
}
else {
vErrors.push(err30);
}
errors++;
}
const _errs22 = errors;
let valid5 = false;
let passing0 = null;
const _errs23 = errors;
if("840539006" !== data9){
const err31 = {instancePath:instancePath+"/v/" + i0+"/tg",schemaPath:"#/properties/v/items/properties/tg/oneOf/0/const",keyword:"const",params:{allowedValue: "840539006"},message:"must be equal to constant",schema:"840539006",parentSchema:schema31.properties.v.items.properties.tg.oneOf[0],data:data9};
if(vErrors === null){
vErrors = [err31];
}
else {
vErrors.push(err31);
}
errors++;
}
var _valid0 = _errs23 === errors;
if(_valid0){
valid5 = true;
passing0 = 0;
}
if(!valid5){
const err32 = {instancePath:instancePath+"/v/" + i0+"/tg",schemaPath:"#/properties/v/items/properties/tg/oneOf",keyword:"oneOf",params:{passingSchemas: passing0},message:"must match exactly one schema in oneOf",schema:schema31.properties.v.items.properties.tg.oneOf,parentSchema:schema31.properties.v.items.properties.tg,data:data9};
if(vErrors === null){
vErrors = [err32];
}
else {
vErrors.push(err32);
}
errors++;
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
}
if(data8.vp !== undefined){
let data10 = data8.vp;
if(typeof data10 !== "string"){
const err33 = {instancePath:instancePath+"/v/" + i0+"/vp",schemaPath:"#/properties/v/items/properties/vp/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.v.items.properties.vp.type,parentSchema:schema31.properties.v.items.properties.vp,data:data10};
if(vErrors === null){
vErrors = [err33];
}
else {
vErrors.push(err33);
}
errors++;
}
const _errs26 = errors;
let valid6 = false;
let passing1 = null;
const _errs27 = errors;
if("1119305005" !== data10){
const err34 = {instancePath:instancePath+"/v/" + i0+"/vp",schemaPath:"#/properties/v/items/properties/vp/oneOf/0/const",keyword:"const",params:{allowedValue: "1119305005"},message:"must be equal to constant",schema:"1119305005",parentSchema:schema31.properties.v.items.properties.vp.oneOf[0],data:data10};
if(vErrors === null){
vErrors = [err34];
}
else {
vErrors.push(err34);
}
errors++;
}
var _valid1 = _errs27 === errors;
if(_valid1){
valid6 = true;
passing1 = 0;
}
const _errs28 = errors;
if("1119349007" !== data10){
const err35 = {instancePath:instancePath+"/v/" + i0+"/vp",schemaPath:"#/properties/v/items/properties/vp/oneOf/1/const",keyword:"const",params:{allowedValue: "1119349007"},message:"must be equal to constant",schema:"1119349007",parentSchema:schema31.properties.v.items.properties.vp.oneOf[1],data:data10};
if(vErrors === null){
vErrors = [err35];
}
else {
vErrors.push(err35);
}
errors++;
}
var _valid1 = _errs28 === errors;
if(_valid1 && valid6){
valid6 = false;
passing1 = [passing1, 1];
}
else {
if(_valid1){
valid6 = true;
passing1 = 1;
}
const _errs29 = errors;
if("J07BX03" !== data10){
const err36 = {instancePath:instancePath+"/v/" + i0+"/vp",schemaPath:"#/properties/v/items/properties/vp/oneOf/2/const",keyword:"const",params:{allowedValue: "J07BX03"},message:"must be equal to constant",schema:"J07BX03",parentSchema:schema31.properties.v.items.properties.vp.oneOf[2],data:data10};
if(vErrors === null){
vErrors = [err36];
}
else {
vErrors.push(err36);
}
errors++;
}
var _valid1 = _errs29 === errors;
if(_valid1 && valid6){
valid6 = false;
passing1 = [passing1, 2];
}
else {
if(_valid1){
valid6 = true;
passing1 = 2;
}
}
}
if(!valid6){
const err37 = {instancePath:instancePath+"/v/" + i0+"/vp",schemaPath:"#/properties/v/items/properties/vp/oneOf",keyword:"oneOf",params:{passingSchemas: passing1},message:"must match exactly one schema in oneOf",schema:schema31.properties.v.items.properties.vp.oneOf,parentSchema:schema31.properties.v.items.properties.vp,data:data10};
if(vErrors === null){
vErrors = [err37];
}
else {
vErrors.push(err37);
}
errors++;
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
}
if(data8.mp !== undefined){
let data11 = data8.mp;
if(typeof data11 !== "string"){
const err38 = {instancePath:instancePath+"/v/" + i0+"/mp",schemaPath:"#/properties/v/items/properties/mp/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.v.items.properties.mp.type,parentSchema:schema31.properties.v.items.properties.mp,data:data11};
if(vErrors === null){
vErrors = [err38];
}
else {
vErrors.push(err38);
}
errors++;
}
const _errs32 = errors;
let valid7 = false;
let passing2 = null;
const _errs33 = errors;
if("EU/1/20/1528" !== data11){
const err39 = {instancePath:instancePath+"/v/" + i0+"/mp",schemaPath:"#/properties/v/items/properties/mp/oneOf/0/const",keyword:"const",params:{allowedValue: "EU/1/20/1528"},message:"must be equal to constant",schema:"EU/1/20/1528",parentSchema:schema31.properties.v.items.properties.mp.oneOf[0],data:data11};
if(vErrors === null){
vErrors = [err39];
}
else {
vErrors.push(err39);
}
errors++;
}
var _valid2 = _errs33 === errors;
if(_valid2){
valid7 = true;
passing2 = 0;
}
const _errs34 = errors;
if("EU/1/20/1507" !== data11){
const err40 = {instancePath:instancePath+"/v/" + i0+"/mp",schemaPath:"#/properties/v/items/properties/mp/oneOf/1/const",keyword:"const",params:{allowedValue: "EU/1/20/1507"},message:"must be equal to constant",schema:"EU/1/20/1507",parentSchema:schema31.properties.v.items.properties.mp.oneOf[1],data:data11};
if(vErrors === null){
vErrors = [err40];
}
else {
vErrors.push(err40);
}
errors++;
}
var _valid2 = _errs34 === errors;
if(_valid2 && valid7){
valid7 = false;
passing2 = [passing2, 1];
}
else {
if(_valid2){
valid7 = true;
passing2 = 1;
}
const _errs35 = errors;
if("EU/1/21/1529" !== data11){
const err41 = {instancePath:instancePath+"/v/" + i0+"/mp",schemaPath:"#/properties/v/items/properties/mp/oneOf/2/const",keyword:"const",params:{allowedValue: "EU/1/21/1529"},message:"must be equal to constant",schema:"EU/1/21/1529",parentSchema:schema31.properties.v.items.properties.mp.oneOf[2],data:data11};
if(vErrors === null){
vErrors = [err41];
}
else {
vErrors.push(err41);
}
errors++;
}
var _valid2 = _errs35 === errors;
if(_valid2 && valid7){
valid7 = false;
passing2 = [passing2, 2];
}
else {
if(_valid2){
valid7 = true;
passing2 = 2;
}
const _errs36 = errors;
if("EU/1/20/1525" !== data11){
const err42 = {instancePath:instancePath+"/v/" + i0+"/mp",schemaPath:"#/properties/v/items/properties/mp/oneOf/3/const",keyword:"const",params:{allowedValue: "EU/1/20/1525"},message:"must be equal to constant",schema:"EU/1/20/1525",parentSchema:schema31.properties.v.items.properties.mp.oneOf[3],data:data11};
if(vErrors === null){
vErrors = [err42];
}
else {
vErrors.push(err42);
}
errors++;
}
var _valid2 = _errs36 === errors;
if(_valid2 && valid7){
valid7 = false;
passing2 = [passing2, 3];
}
else {
if(_valid2){
valid7 = true;
passing2 = 3;
}
const _errs37 = errors;
if("CVnCoV" !== data11){
const err43 = {instancePath:instancePath+"/v/" + i0+"/mp",schemaPath:"#/properties/v/items/properties/mp/oneOf/4/const",keyword:"const",params:{allowedValue: "CVnCoV"},message:"must be equal to constant",schema:"CVnCoV",parentSchema:schema31.properties.v.items.properties.mp.oneOf[4],data:data11};
if(vErrors === null){
vErrors = [err43];
}
else {
vErrors.push(err43);
}
errors++;
}
var _valid2 = _errs37 === errors;
if(_valid2 && valid7){
valid7 = false;
passing2 = [passing2, 4];
}
else {
if(_valid2){
valid7 = true;
passing2 = 4;
}
const _errs38 = errors;
if("Sputnik-V" !== data11){
const err44 = {instancePath:instancePath+"/v/" + i0+"/mp",schemaPath:"#/properties/v/items/properties/mp/oneOf/5/const",keyword:"const",params:{allowedValue: "Sputnik-V"},message:"must be equal to constant",schema:"Sputnik-V",parentSchema:schema31.properties.v.items.properties.mp.oneOf[5],data:data11};
if(vErrors === null){
vErrors = [err44];
}
else {
vErrors.push(err44);
}
errors++;
}
var _valid2 = _errs38 === errors;
if(_valid2 && valid7){
valid7 = false;
passing2 = [passing2, 5];
}
else {
if(_valid2){
valid7 = true;
passing2 = 5;
}
const _errs39 = errors;
if("Convidecia" !== data11){
const err45 = {instancePath:instancePath+"/v/" + i0+"/mp",schemaPath:"#/properties/v/items/properties/mp/oneOf/6/const",keyword:"const",params:{allowedValue: "Convidecia"},message:"must be equal to constant",schema:"Convidecia",parentSchema:schema31.properties.v.items.properties.mp.oneOf[6],data:data11};
if(vErrors === null){
vErrors = [err45];
}
else {
vErrors.push(err45);
}
errors++;
}
var _valid2 = _errs39 === errors;
if(_valid2 && valid7){
valid7 = false;
passing2 = [passing2, 6];
}
else {
if(_valid2){
valid7 = true;
passing2 = 6;
}
const _errs40 = errors;
if("EpiVacCorona" !== data11){
const err46 = {instancePath:instancePath+"/v/" + i0+"/mp",schemaPath:"#/properties/v/items/properties/mp/oneOf/7/const",keyword:"const",params:{allowedValue: "EpiVacCorona"},message:"must be equal to constant",schema:"EpiVacCorona",parentSchema:schema31.properties.v.items.properties.mp.oneOf[7],data:data11};
if(vErrors === null){
vErrors = [err46];
}
else {
vErrors.push(err46);
}
errors++;
}
var _valid2 = _errs40 === errors;
if(_valid2 && valid7){
valid7 = false;
passing2 = [passing2, 7];
}
else {
if(_valid2){
valid7 = true;
passing2 = 7;
}
const _errs41 = errors;
if("BBIBP-CorV" !== data11){
const err47 = {instancePath:instancePath+"/v/" + i0+"/mp",schemaPath:"#/properties/v/items/properties/mp/oneOf/8/const",keyword:"const",params:{allowedValue: "BBIBP-CorV"},message:"must be equal to constant",schema:"BBIBP-CorV",parentSchema:schema31.properties.v.items.properties.mp.oneOf[8],data:data11};
if(vErrors === null){
vErrors = [err47];
}
else {
vErrors.push(err47);
}
errors++;
}
var _valid2 = _errs41 === errors;
if(_valid2 && valid7){
valid7 = false;
passing2 = [passing2, 8];
}
else {
if(_valid2){
valid7 = true;
passing2 = 8;
}
const _errs42 = errors;
if("Inactivated-SARS-CoV-2-Vero-Cell" !== data11){
const err48 = {instancePath:instancePath+"/v/" + i0+"/mp",schemaPath:"#/properties/v/items/properties/mp/oneOf/9/const",keyword:"const",params:{allowedValue: "Inactivated-SARS-CoV-2-Vero-Cell"},message:"must be equal to constant",schema:"Inactivated-SARS-CoV-2-Vero-Cell",parentSchema:schema31.properties.v.items.properties.mp.oneOf[9],data:data11};
if(vErrors === null){
vErrors = [err48];
}
else {
vErrors.push(err48);
}
errors++;
}
var _valid2 = _errs42 === errors;
if(_valid2 && valid7){
valid7 = false;
passing2 = [passing2, 9];
}
else {
if(_valid2){
valid7 = true;
passing2 = 9;
}
const _errs43 = errors;
if("CoronaVac" !== data11){
const err49 = {instancePath:instancePath+"/v/" + i0+"/mp",schemaPath:"#/properties/v/items/properties/mp/oneOf/10/const",keyword:"const",params:{allowedValue: "CoronaVac"},message:"must be equal to constant",schema:"CoronaVac",parentSchema:schema31.properties.v.items.properties.mp.oneOf[10],data:data11};
if(vErrors === null){
vErrors = [err49];
}
else {
vErrors.push(err49);
}
errors++;
}
var _valid2 = _errs43 === errors;
if(_valid2 && valid7){
valid7 = false;
passing2 = [passing2, 10];
}
else {
if(_valid2){
valid7 = true;
passing2 = 10;
}
const _errs44 = errors;
if("Covaxin" !== data11){
const err50 = {instancePath:instancePath+"/v/" + i0+"/mp",schemaPath:"#/properties/v/items/properties/mp/oneOf/11/const",keyword:"const",params:{allowedValue: "Covaxin"},message:"must be equal to constant",schema:"Covaxin",parentSchema:schema31.properties.v.items.properties.mp.oneOf[11],data:data11};
if(vErrors === null){
vErrors = [err50];
}
else {
vErrors.push(err50);
}
errors++;
}
var _valid2 = _errs44 === errors;
if(_valid2 && valid7){
valid7 = false;
passing2 = [passing2, 11];
}
else {
if(_valid2){
valid7 = true;
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
if(!valid7){
const err51 = {instancePath:instancePath+"/v/" + i0+"/mp",schemaPath:"#/properties/v/items/properties/mp/oneOf",keyword:"oneOf",params:{passingSchemas: passing2},message:"must match exactly one schema in oneOf",schema:schema31.properties.v.items.properties.mp.oneOf,parentSchema:schema31.properties.v.items.properties.mp,data:data11};
if(vErrors === null){
vErrors = [err51];
}
else {
vErrors.push(err51);
}
errors++;
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
}
if(data8.ma !== undefined){
let data12 = data8.ma;
if(typeof data12 !== "string"){
const err52 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/properties/v/items/properties/ma/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.v.items.properties.ma.type,parentSchema:schema31.properties.v.items.properties.ma,data:data12};
if(vErrors === null){
vErrors = [err52];
}
else {
vErrors.push(err52);
}
errors++;
}
const _errs47 = errors;
let valid8 = false;
let passing3 = null;
const _errs48 = errors;
if("ORG-100001699" !== data12){
const err53 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/properties/v/items/properties/ma/oneOf/0/const",keyword:"const",params:{allowedValue: "ORG-100001699"},message:"must be equal to constant",schema:"ORG-100001699",parentSchema:schema31.properties.v.items.properties.ma.oneOf[0],data:data12};
if(vErrors === null){
vErrors = [err53];
}
else {
vErrors.push(err53);
}
errors++;
}
var _valid3 = _errs48 === errors;
if(_valid3){
valid8 = true;
passing3 = 0;
}
const _errs49 = errors;
if("ORG-100030215" !== data12){
const err54 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/properties/v/items/properties/ma/oneOf/1/const",keyword:"const",params:{allowedValue: "ORG-100030215"},message:"must be equal to constant",schema:"ORG-100030215",parentSchema:schema31.properties.v.items.properties.ma.oneOf[1],data:data12};
if(vErrors === null){
vErrors = [err54];
}
else {
vErrors.push(err54);
}
errors++;
}
var _valid3 = _errs49 === errors;
if(_valid3 && valid8){
valid8 = false;
passing3 = [passing3, 1];
}
else {
if(_valid3){
valid8 = true;
passing3 = 1;
}
const _errs50 = errors;
if("ORG-100001417" !== data12){
const err55 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/properties/v/items/properties/ma/oneOf/2/const",keyword:"const",params:{allowedValue: "ORG-100001417"},message:"must be equal to constant",schema:"ORG-100001417",parentSchema:schema31.properties.v.items.properties.ma.oneOf[2],data:data12};
if(vErrors === null){
vErrors = [err55];
}
else {
vErrors.push(err55);
}
errors++;
}
var _valid3 = _errs50 === errors;
if(_valid3 && valid8){
valid8 = false;
passing3 = [passing3, 2];
}
else {
if(_valid3){
valid8 = true;
passing3 = 2;
}
const _errs51 = errors;
if("ORG-100031184" !== data12){
const err56 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/properties/v/items/properties/ma/oneOf/3/const",keyword:"const",params:{allowedValue: "ORG-100031184"},message:"must be equal to constant",schema:"ORG-100031184",parentSchema:schema31.properties.v.items.properties.ma.oneOf[3],data:data12};
if(vErrors === null){
vErrors = [err56];
}
else {
vErrors.push(err56);
}
errors++;
}
var _valid3 = _errs51 === errors;
if(_valid3 && valid8){
valid8 = false;
passing3 = [passing3, 3];
}
else {
if(_valid3){
valid8 = true;
passing3 = 3;
}
const _errs52 = errors;
if("ORG-100006270" !== data12){
const err57 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/properties/v/items/properties/ma/oneOf/4/const",keyword:"const",params:{allowedValue: "ORG-100006270"},message:"must be equal to constant",schema:"ORG-100006270",parentSchema:schema31.properties.v.items.properties.ma.oneOf[4],data:data12};
if(vErrors === null){
vErrors = [err57];
}
else {
vErrors.push(err57);
}
errors++;
}
var _valid3 = _errs52 === errors;
if(_valid3 && valid8){
valid8 = false;
passing3 = [passing3, 4];
}
else {
if(_valid3){
valid8 = true;
passing3 = 4;
}
const _errs53 = errors;
if("ORG-100013793" !== data12){
const err58 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/properties/v/items/properties/ma/oneOf/5/const",keyword:"const",params:{allowedValue: "ORG-100013793"},message:"must be equal to constant",schema:"ORG-100013793",parentSchema:schema31.properties.v.items.properties.ma.oneOf[5],data:data12};
if(vErrors === null){
vErrors = [err58];
}
else {
vErrors.push(err58);
}
errors++;
}
var _valid3 = _errs53 === errors;
if(_valid3 && valid8){
valid8 = false;
passing3 = [passing3, 5];
}
else {
if(_valid3){
valid8 = true;
passing3 = 5;
}
const _errs54 = errors;
if("ORG-100020693" !== data12){
const err59 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/properties/v/items/properties/ma/oneOf/6/const",keyword:"const",params:{allowedValue: "ORG-100020693"},message:"must be equal to constant",schema:"ORG-100020693",parentSchema:schema31.properties.v.items.properties.ma.oneOf[6],data:data12};
if(vErrors === null){
vErrors = [err59];
}
else {
vErrors.push(err59);
}
errors++;
}
var _valid3 = _errs54 === errors;
if(_valid3 && valid8){
valid8 = false;
passing3 = [passing3, 6];
}
else {
if(_valid3){
valid8 = true;
passing3 = 6;
}
const _errs55 = errors;
if("ORG-100010771" !== data12){
const err60 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/properties/v/items/properties/ma/oneOf/7/const",keyword:"const",params:{allowedValue: "ORG-100010771"},message:"must be equal to constant",schema:"ORG-100010771",parentSchema:schema31.properties.v.items.properties.ma.oneOf[7],data:data12};
if(vErrors === null){
vErrors = [err60];
}
else {
vErrors.push(err60);
}
errors++;
}
var _valid3 = _errs55 === errors;
if(_valid3 && valid8){
valid8 = false;
passing3 = [passing3, 7];
}
else {
if(_valid3){
valid8 = true;
passing3 = 7;
}
const _errs56 = errors;
if("ORG-100024420" !== data12){
const err61 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/properties/v/items/properties/ma/oneOf/8/const",keyword:"const",params:{allowedValue: "ORG-100024420"},message:"must be equal to constant",schema:"ORG-100024420",parentSchema:schema31.properties.v.items.properties.ma.oneOf[8],data:data12};
if(vErrors === null){
vErrors = [err61];
}
else {
vErrors.push(err61);
}
errors++;
}
var _valid3 = _errs56 === errors;
if(_valid3 && valid8){
valid8 = false;
passing3 = [passing3, 8];
}
else {
if(_valid3){
valid8 = true;
passing3 = 8;
}
const _errs57 = errors;
if("ORG-100032020" !== data12){
const err62 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/properties/v/items/properties/ma/oneOf/9/const",keyword:"const",params:{allowedValue: "ORG-100032020"},message:"must be equal to constant",schema:"ORG-100032020",parentSchema:schema31.properties.v.items.properties.ma.oneOf[9],data:data12};
if(vErrors === null){
vErrors = [err62];
}
else {
vErrors.push(err62);
}
errors++;
}
var _valid3 = _errs57 === errors;
if(_valid3 && valid8){
valid8 = false;
passing3 = [passing3, 9];
}
else {
if(_valid3){
valid8 = true;
passing3 = 9;
}
const _errs58 = errors;
if("Gamaleya-Research-Institute" !== data12){
const err63 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/properties/v/items/properties/ma/oneOf/10/const",keyword:"const",params:{allowedValue: "Gamaleya-Research-Institute"},message:"must be equal to constant",schema:"Gamaleya-Research-Institute",parentSchema:schema31.properties.v.items.properties.ma.oneOf[10],data:data12};
if(vErrors === null){
vErrors = [err63];
}
else {
vErrors.push(err63);
}
errors++;
}
var _valid3 = _errs58 === errors;
if(_valid3 && valid8){
valid8 = false;
passing3 = [passing3, 10];
}
else {
if(_valid3){
valid8 = true;
passing3 = 10;
}
const _errs59 = errors;
if("Vector-Institute" !== data12){
const err64 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/properties/v/items/properties/ma/oneOf/11/const",keyword:"const",params:{allowedValue: "Vector-Institute"},message:"must be equal to constant",schema:"Vector-Institute",parentSchema:schema31.properties.v.items.properties.ma.oneOf[11],data:data12};
if(vErrors === null){
vErrors = [err64];
}
else {
vErrors.push(err64);
}
errors++;
}
var _valid3 = _errs59 === errors;
if(_valid3 && valid8){
valid8 = false;
passing3 = [passing3, 11];
}
else {
if(_valid3){
valid8 = true;
passing3 = 11;
}
const _errs60 = errors;
if("Sinovac-Biotech" !== data12){
const err65 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/properties/v/items/properties/ma/oneOf/12/const",keyword:"const",params:{allowedValue: "Sinovac-Biotech"},message:"must be equal to constant",schema:"Sinovac-Biotech",parentSchema:schema31.properties.v.items.properties.ma.oneOf[12],data:data12};
if(vErrors === null){
vErrors = [err65];
}
else {
vErrors.push(err65);
}
errors++;
}
var _valid3 = _errs60 === errors;
if(_valid3 && valid8){
valid8 = false;
passing3 = [passing3, 12];
}
else {
if(_valid3){
valid8 = true;
passing3 = 12;
}
const _errs61 = errors;
if("Bharat-Biotech" !== data12){
const err66 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/properties/v/items/properties/ma/oneOf/13/const",keyword:"const",params:{allowedValue: "Bharat-Biotech"},message:"must be equal to constant",schema:"Bharat-Biotech",parentSchema:schema31.properties.v.items.properties.ma.oneOf[13],data:data12};
if(vErrors === null){
vErrors = [err66];
}
else {
vErrors.push(err66);
}
errors++;
}
var _valid3 = _errs61 === errors;
if(_valid3 && valid8){
valid8 = false;
passing3 = [passing3, 13];
}
else {
if(_valid3){
valid8 = true;
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
if(!valid8){
const err67 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/properties/v/items/properties/ma/oneOf",keyword:"oneOf",params:{passingSchemas: passing3},message:"must match exactly one schema in oneOf",schema:schema31.properties.v.items.properties.ma.oneOf,parentSchema:schema31.properties.v.items.properties.ma,data:data12};
if(vErrors === null){
vErrors = [err67];
}
else {
vErrors.push(err67);
}
errors++;
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
}
if(data8.dn !== undefined){
let data13 = data8.dn;
if(!(((typeof data13 == "number") && (!(data13 % 1) && !isNaN(data13))) && (isFinite(data13)))){
const err68 = {instancePath:instancePath+"/v/" + i0+"/dn",schemaPath:"#/properties/v/items/properties/dn/type",keyword:"type",params:{type: "integer"},message:"must be integer",schema:schema31.properties.v.items.properties.dn.type,parentSchema:schema31.properties.v.items.properties.dn,data:data13};
if(vErrors === null){
vErrors = [err68];
}
else {
vErrors.push(err68);
}
errors++;
}
if((typeof data13 == "number") && (isFinite(data13))){
if(data13 > 9 || isNaN(data13)){
const err69 = {instancePath:instancePath+"/v/" + i0+"/dn",schemaPath:"#/properties/v/items/properties/dn/maximum",keyword:"maximum",params:{comparison: "<=", limit: 9},message:"must be <= 9",schema:9,parentSchema:schema31.properties.v.items.properties.dn,data:data13};
if(vErrors === null){
vErrors = [err69];
}
else {
vErrors.push(err69);
}
errors++;
}
if(data13 < 1 || isNaN(data13)){
const err70 = {instancePath:instancePath+"/v/" + i0+"/dn",schemaPath:"#/properties/v/items/properties/dn/minimum",keyword:"minimum",params:{comparison: ">=", limit: 1},message:"must be >= 1",schema:1,parentSchema:schema31.properties.v.items.properties.dn,data:data13};
if(vErrors === null){
vErrors = [err70];
}
else {
vErrors.push(err70);
}
errors++;
}
}
}
if(data8.sd !== undefined){
let data14 = data8.sd;
if(!(((typeof data14 == "number") && (!(data14 % 1) && !isNaN(data14))) && (isFinite(data14)))){
const err71 = {instancePath:instancePath+"/v/" + i0+"/sd",schemaPath:"#/properties/v/items/properties/sd/type",keyword:"type",params:{type: "integer"},message:"must be integer",schema:schema31.properties.v.items.properties.sd.type,parentSchema:schema31.properties.v.items.properties.sd,data:data14};
if(vErrors === null){
vErrors = [err71];
}
else {
vErrors.push(err71);
}
errors++;
}
if((typeof data14 == "number") && (isFinite(data14))){
if(data14 > 9 || isNaN(data14)){
const err72 = {instancePath:instancePath+"/v/" + i0+"/sd",schemaPath:"#/properties/v/items/properties/sd/maximum",keyword:"maximum",params:{comparison: "<=", limit: 9},message:"must be <= 9",schema:9,parentSchema:schema31.properties.v.items.properties.sd,data:data14};
if(vErrors === null){
vErrors = [err72];
}
else {
vErrors.push(err72);
}
errors++;
}
if(data14 < 1 || isNaN(data14)){
const err73 = {instancePath:instancePath+"/v/" + i0+"/sd",schemaPath:"#/properties/v/items/properties/sd/minimum",keyword:"minimum",params:{comparison: ">=", limit: 1},message:"must be >= 1",schema:1,parentSchema:schema31.properties.v.items.properties.sd,data:data14};
if(vErrors === null){
vErrors = [err73];
}
else {
vErrors.push(err73);
}
errors++;
}
}
}
if(data8.dt !== undefined){
let data15 = data8.dt;
if(typeof data15 === "string"){
if(!(formats0.validate(data15))){
const err74 = {instancePath:instancePath+"/v/" + i0+"/dt",schemaPath:"#/properties/v/items/properties/dt/format",keyword:"format",params:{format: "date"},message:"must match format \""+"date"+"\"",schema:"date",parentSchema:schema31.properties.v.items.properties.dt,data:data15};
if(vErrors === null){
vErrors = [err74];
}
else {
vErrors.push(err74);
}
errors++;
}
}
else {
const err75 = {instancePath:instancePath+"/v/" + i0+"/dt",schemaPath:"#/properties/v/items/properties/dt/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.v.items.properties.dt.type,parentSchema:schema31.properties.v.items.properties.dt,data:data15};
if(vErrors === null){
vErrors = [err75];
}
else {
vErrors.push(err75);
}
errors++;
}
}
if(data8.co !== undefined){
let data16 = data8.co;
if(typeof data16 === "string"){
if(!pattern8.test(data16)){
const err76 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/properties/v/items/properties/co/pattern",keyword:"pattern",params:{pattern: "[A-Z]{1,10}"},message:"must match pattern \""+"[A-Z]{1,10}"+"\"",schema:"[A-Z]{1,10}",parentSchema:schema31.properties.v.items.properties.co,data:data16};
if(vErrors === null){
vErrors = [err76];
}
else {
vErrors.push(err76);
}
errors++;
}
}
else {
const err77 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/properties/v/items/properties/co/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.v.items.properties.co.type,parentSchema:schema31.properties.v.items.properties.co,data:data16};
if(vErrors === null){
vErrors = [err77];
}
else {
vErrors.push(err77);
}
errors++;
}
}
if(data8.is !== undefined){
let data17 = data8.is;
if(typeof data17 === "string"){
if(func3(data17) > 50){
const err78 = {instancePath:instancePath+"/v/" + i0+"/is",schemaPath:"#/properties/v/items/properties/is/maxLength",keyword:"maxLength",params:{limit: 50},message:"must NOT have more than 50 characters",schema:50,parentSchema:schema31.properties.v.items.properties.is,data:data17};
if(vErrors === null){
vErrors = [err78];
}
else {
vErrors.push(err78);
}
errors++;
}
}
else {
const err79 = {instancePath:instancePath+"/v/" + i0+"/is",schemaPath:"#/properties/v/items/properties/is/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.v.items.properties.is.type,parentSchema:schema31.properties.v.items.properties.is,data:data17};
if(vErrors === null){
vErrors = [err79];
}
else {
vErrors.push(err79);
}
errors++;
}
}
if(data8.ci !== undefined){
let data18 = data8.ci;
if(typeof data18 === "string"){
if(func3(data18) > 50){
const err80 = {instancePath:instancePath+"/v/" + i0+"/ci",schemaPath:"#/properties/v/items/properties/ci/maxLength",keyword:"maxLength",params:{limit: 50},message:"must NOT have more than 50 characters",schema:50,parentSchema:schema31.properties.v.items.properties.ci,data:data18};
if(vErrors === null){
vErrors = [err80];
}
else {
vErrors.push(err80);
}
errors++;
}
}
else {
const err81 = {instancePath:instancePath+"/v/" + i0+"/ci",schemaPath:"#/properties/v/items/properties/ci/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.v.items.properties.ci.type,parentSchema:schema31.properties.v.items.properties.ci,data:data18};
if(vErrors === null){
vErrors = [err81];
}
else {
vErrors.push(err81);
}
errors++;
}
}
}
else {
const err82 = {instancePath:instancePath+"/v/" + i0,schemaPath:"#/properties/v/items/type",keyword:"type",params:{type: "object"},message:"must be object",schema:schema31.properties.v.items.type,parentSchema:schema31.properties.v.items,data:data8};
if(vErrors === null){
vErrors = [err82];
}
else {
vErrors.push(err82);
}
errors++;
}
}
}
else {
const err83 = {instancePath:instancePath+"/v",schemaPath:"#/properties/v/type",keyword:"type",params:{type: "array"},message:"must be array",schema:schema31.properties.v.type,parentSchema:schema31.properties.v,data:data7};
if(vErrors === null){
vErrors = [err83];
}
else {
vErrors.push(err83);
}
errors++;
}
}
if(data.t !== undefined){
let data19 = data.t;
if(Array.isArray(data19)){
if(data19.length < 1){
const err84 = {instancePath:instancePath+"/t",schemaPath:"#/properties/t/minItems",keyword:"minItems",params:{limit: 1},message:"must NOT have fewer than 1 items",schema:1,parentSchema:schema31.properties.t,data:data19};
if(vErrors === null){
vErrors = [err84];
}
else {
vErrors.push(err84);
}
errors++;
}
const len1 = data19.length;
for(let i1=0; i1<len1; i1++){
let data20 = data19[i1];
if(data20 && typeof data20 == "object" && !Array.isArray(data20)){
if(data20.tg === undefined){
const err85 = {instancePath:instancePath+"/t/" + i1,schemaPath:"#/properties/t/items/required",keyword:"required",params:{missingProperty: "tg"},message:"must have required property '"+"tg"+"'",schema:schema31.properties.t.items.required,parentSchema:schema31.properties.t.items,data:data20};
if(vErrors === null){
vErrors = [err85];
}
else {
vErrors.push(err85);
}
errors++;
}
if(data20.tt === undefined){
const err86 = {instancePath:instancePath+"/t/" + i1,schemaPath:"#/properties/t/items/required",keyword:"required",params:{missingProperty: "tt"},message:"must have required property '"+"tt"+"'",schema:schema31.properties.t.items.required,parentSchema:schema31.properties.t.items,data:data20};
if(vErrors === null){
vErrors = [err86];
}
else {
vErrors.push(err86);
}
errors++;
}
if(data20.sc === undefined){
const err87 = {instancePath:instancePath+"/t/" + i1,schemaPath:"#/properties/t/items/required",keyword:"required",params:{missingProperty: "sc"},message:"must have required property '"+"sc"+"'",schema:schema31.properties.t.items.required,parentSchema:schema31.properties.t.items,data:data20};
if(vErrors === null){
vErrors = [err87];
}
else {
vErrors.push(err87);
}
errors++;
}
if(data20.tr === undefined){
const err88 = {instancePath:instancePath+"/t/" + i1,schemaPath:"#/properties/t/items/required",keyword:"required",params:{missingProperty: "tr"},message:"must have required property '"+"tr"+"'",schema:schema31.properties.t.items.required,parentSchema:schema31.properties.t.items,data:data20};
if(vErrors === null){
vErrors = [err88];
}
else {
vErrors.push(err88);
}
errors++;
}
if(data20.tc === undefined){
const err89 = {instancePath:instancePath+"/t/" + i1,schemaPath:"#/properties/t/items/required",keyword:"required",params:{missingProperty: "tc"},message:"must have required property '"+"tc"+"'",schema:schema31.properties.t.items.required,parentSchema:schema31.properties.t.items,data:data20};
if(vErrors === null){
vErrors = [err89];
}
else {
vErrors.push(err89);
}
errors++;
}
if(data20.co === undefined){
const err90 = {instancePath:instancePath+"/t/" + i1,schemaPath:"#/properties/t/items/required",keyword:"required",params:{missingProperty: "co"},message:"must have required property '"+"co"+"'",schema:schema31.properties.t.items.required,parentSchema:schema31.properties.t.items,data:data20};
if(vErrors === null){
vErrors = [err90];
}
else {
vErrors.push(err90);
}
errors++;
}
if(data20.is === undefined){
const err91 = {instancePath:instancePath+"/t/" + i1,schemaPath:"#/properties/t/items/required",keyword:"required",params:{missingProperty: "is"},message:"must have required property '"+"is"+"'",schema:schema31.properties.t.items.required,parentSchema:schema31.properties.t.items,data:data20};
if(vErrors === null){
vErrors = [err91];
}
else {
vErrors.push(err91);
}
errors++;
}
if(data20.ci === undefined){
const err92 = {instancePath:instancePath+"/t/" + i1,schemaPath:"#/properties/t/items/required",keyword:"required",params:{missingProperty: "ci"},message:"must have required property '"+"ci"+"'",schema:schema31.properties.t.items.required,parentSchema:schema31.properties.t.items,data:data20};
if(vErrors === null){
vErrors = [err92];
}
else {
vErrors.push(err92);
}
errors++;
}
if(data20.tg !== undefined){
let data21 = data20.tg;
if(typeof data21 !== "string"){
const err93 = {instancePath:instancePath+"/t/" + i1+"/tg",schemaPath:"#/properties/t/items/properties/tg/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.t.items.properties.tg.type,parentSchema:schema31.properties.t.items.properties.tg,data:data21};
if(vErrors === null){
vErrors = [err93];
}
else {
vErrors.push(err93);
}
errors++;
}
const _errs81 = errors;
let valid12 = false;
let passing4 = null;
const _errs82 = errors;
if("840539006" !== data21){
const err94 = {instancePath:instancePath+"/t/" + i1+"/tg",schemaPath:"#/properties/t/items/properties/tg/oneOf/0/const",keyword:"const",params:{allowedValue: "840539006"},message:"must be equal to constant",schema:"840539006",parentSchema:schema31.properties.t.items.properties.tg.oneOf[0],data:data21};
if(vErrors === null){
vErrors = [err94];
}
else {
vErrors.push(err94);
}
errors++;
}
var _valid4 = _errs82 === errors;
if(_valid4){
valid12 = true;
passing4 = 0;
}
if(!valid12){
const err95 = {instancePath:instancePath+"/t/" + i1+"/tg",schemaPath:"#/properties/t/items/properties/tg/oneOf",keyword:"oneOf",params:{passingSchemas: passing4},message:"must match exactly one schema in oneOf",schema:schema31.properties.t.items.properties.tg.oneOf,parentSchema:schema31.properties.t.items.properties.tg,data:data21};
if(vErrors === null){
vErrors = [err95];
}
else {
vErrors.push(err95);
}
errors++;
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
}
if(data20.tt !== undefined){
let data22 = data20.tt;
if(typeof data22 !== "string"){
const err96 = {instancePath:instancePath+"/t/" + i1+"/tt",schemaPath:"#/properties/t/items/properties/tt/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.t.items.properties.tt.type,parentSchema:schema31.properties.t.items.properties.tt,data:data22};
if(vErrors === null){
vErrors = [err96];
}
else {
vErrors.push(err96);
}
errors++;
}
const _errs85 = errors;
let valid13 = false;
let passing5 = null;
const _errs86 = errors;
if("LP6464-4" !== data22){
const err97 = {instancePath:instancePath+"/t/" + i1+"/tt",schemaPath:"#/properties/t/items/properties/tt/oneOf/0/const",keyword:"const",params:{allowedValue: "LP6464-4"},message:"must be equal to constant",schema:"LP6464-4",parentSchema:schema31.properties.t.items.properties.tt.oneOf[0],data:data22};
if(vErrors === null){
vErrors = [err97];
}
else {
vErrors.push(err97);
}
errors++;
}
var _valid5 = _errs86 === errors;
if(_valid5){
valid13 = true;
passing5 = 0;
}
const _errs87 = errors;
if("LP217198-3" !== data22){
const err98 = {instancePath:instancePath+"/t/" + i1+"/tt",schemaPath:"#/properties/t/items/properties/tt/oneOf/1/const",keyword:"const",params:{allowedValue: "LP217198-3"},message:"must be equal to constant",schema:"LP217198-3",parentSchema:schema31.properties.t.items.properties.tt.oneOf[1],data:data22};
if(vErrors === null){
vErrors = [err98];
}
else {
vErrors.push(err98);
}
errors++;
}
var _valid5 = _errs87 === errors;
if(_valid5 && valid13){
valid13 = false;
passing5 = [passing5, 1];
}
else {
if(_valid5){
valid13 = true;
passing5 = 1;
}
}
if(!valid13){
const err99 = {instancePath:instancePath+"/t/" + i1+"/tt",schemaPath:"#/properties/t/items/properties/tt/oneOf",keyword:"oneOf",params:{passingSchemas: passing5},message:"must match exactly one schema in oneOf",schema:schema31.properties.t.items.properties.tt.oneOf,parentSchema:schema31.properties.t.items.properties.tt,data:data22};
if(vErrors === null){
vErrors = [err99];
}
else {
vErrors.push(err99);
}
errors++;
}
else {
errors = _errs85;
if(vErrors !== null){
if(_errs85){
vErrors.length = _errs85;
}
else {
vErrors = null;
}
}
}
}
if(data20.nm !== undefined){
let data23 = data20.nm;
if(typeof data23 !== "string"){
const err100 = {instancePath:instancePath+"/t/" + i1+"/nm",schemaPath:"#/properties/t/items/properties/nm/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.t.items.properties.nm.type,parentSchema:schema31.properties.t.items.properties.nm,data:data23};
if(vErrors === null){
vErrors = [err100];
}
else {
vErrors.push(err100);
}
errors++;
}
}
if(data20.ma !== undefined){
let data24 = data20.ma;
if(typeof data24 !== "string"){
const err101 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.t.items.properties.ma.type,parentSchema:schema31.properties.t.items.properties.ma,data:data24};
if(vErrors === null){
vErrors = [err101];
}
else {
vErrors.push(err101);
}
errors++;
}
const _errs92 = errors;
let valid14 = false;
let passing6 = null;
const _errs93 = errors;
if("308" !== data24){
const err102 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/0/const",keyword:"const",params:{allowedValue: "308"},message:"must be equal to constant",schema:"308",parentSchema:schema31.properties.t.items.properties.ma.oneOf[0],data:data24};
if(vErrors === null){
vErrors = [err102];
}
else {
vErrors.push(err102);
}
errors++;
}
var _valid6 = _errs93 === errors;
if(_valid6){
valid14 = true;
passing6 = 0;
}
const _errs94 = errors;
if("344" !== data24){
const err103 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/1/const",keyword:"const",params:{allowedValue: "344"},message:"must be equal to constant",schema:"344",parentSchema:schema31.properties.t.items.properties.ma.oneOf[1],data:data24};
if(vErrors === null){
vErrors = [err103];
}
else {
vErrors.push(err103);
}
errors++;
}
var _valid6 = _errs94 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 1];
}
else {
if(_valid6){
valid14 = true;
passing6 = 1;
}
const _errs95 = errors;
if("345" !== data24){
const err104 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/2/const",keyword:"const",params:{allowedValue: "345"},message:"must be equal to constant",schema:"345",parentSchema:schema31.properties.t.items.properties.ma.oneOf[2],data:data24};
if(vErrors === null){
vErrors = [err104];
}
else {
vErrors.push(err104);
}
errors++;
}
var _valid6 = _errs95 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 2];
}
else {
if(_valid6){
valid14 = true;
passing6 = 2;
}
const _errs96 = errors;
if("768" !== data24){
const err105 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/3/const",keyword:"const",params:{allowedValue: "768"},message:"must be equal to constant",schema:"768",parentSchema:schema31.properties.t.items.properties.ma.oneOf[3],data:data24};
if(vErrors === null){
vErrors = [err105];
}
else {
vErrors.push(err105);
}
errors++;
}
var _valid6 = _errs96 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 3];
}
else {
if(_valid6){
valid14 = true;
passing6 = 3;
}
const _errs97 = errors;
if("1065" !== data24){
const err106 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/4/const",keyword:"const",params:{allowedValue: "1065"},message:"must be equal to constant",schema:"1065",parentSchema:schema31.properties.t.items.properties.ma.oneOf[4],data:data24};
if(vErrors === null){
vErrors = [err106];
}
else {
vErrors.push(err106);
}
errors++;
}
var _valid6 = _errs97 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 4];
}
else {
if(_valid6){
valid14 = true;
passing6 = 4;
}
const _errs98 = errors;
if("1097" !== data24){
const err107 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/5/const",keyword:"const",params:{allowedValue: "1097"},message:"must be equal to constant",schema:"1097",parentSchema:schema31.properties.t.items.properties.ma.oneOf[5],data:data24};
if(vErrors === null){
vErrors = [err107];
}
else {
vErrors.push(err107);
}
errors++;
}
var _valid6 = _errs98 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 5];
}
else {
if(_valid6){
valid14 = true;
passing6 = 5;
}
const _errs99 = errors;
if("1114" !== data24){
const err108 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/6/const",keyword:"const",params:{allowedValue: "1114"},message:"must be equal to constant",schema:"1114",parentSchema:schema31.properties.t.items.properties.ma.oneOf[6],data:data24};
if(vErrors === null){
vErrors = [err108];
}
else {
vErrors.push(err108);
}
errors++;
}
var _valid6 = _errs99 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 6];
}
else {
if(_valid6){
valid14 = true;
passing6 = 6;
}
const _errs100 = errors;
if("1144" !== data24){
const err109 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/7/const",keyword:"const",params:{allowedValue: "1144"},message:"must be equal to constant",schema:"1144",parentSchema:schema31.properties.t.items.properties.ma.oneOf[7],data:data24};
if(vErrors === null){
vErrors = [err109];
}
else {
vErrors.push(err109);
}
errors++;
}
var _valid6 = _errs100 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 7];
}
else {
if(_valid6){
valid14 = true;
passing6 = 7;
}
const _errs101 = errors;
if("1162" !== data24){
const err110 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/8/const",keyword:"const",params:{allowedValue: "1162"},message:"must be equal to constant",schema:"1162",parentSchema:schema31.properties.t.items.properties.ma.oneOf[8],data:data24};
if(vErrors === null){
vErrors = [err110];
}
else {
vErrors.push(err110);
}
errors++;
}
var _valid6 = _errs101 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 8];
}
else {
if(_valid6){
valid14 = true;
passing6 = 8;
}
const _errs102 = errors;
if("1173" !== data24){
const err111 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/9/const",keyword:"const",params:{allowedValue: "1173"},message:"must be equal to constant",schema:"1173",parentSchema:schema31.properties.t.items.properties.ma.oneOf[9],data:data24};
if(vErrors === null){
vErrors = [err111];
}
else {
vErrors.push(err111);
}
errors++;
}
var _valid6 = _errs102 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 9];
}
else {
if(_valid6){
valid14 = true;
passing6 = 9;
}
const _errs103 = errors;
if("1180" !== data24){
const err112 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/10/const",keyword:"const",params:{allowedValue: "1180"},message:"must be equal to constant",schema:"1180",parentSchema:schema31.properties.t.items.properties.ma.oneOf[10],data:data24};
if(vErrors === null){
vErrors = [err112];
}
else {
vErrors.push(err112);
}
errors++;
}
var _valid6 = _errs103 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 10];
}
else {
if(_valid6){
valid14 = true;
passing6 = 10;
}
const _errs104 = errors;
if("1190" !== data24){
const err113 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/11/const",keyword:"const",params:{allowedValue: "1190"},message:"must be equal to constant",schema:"1190",parentSchema:schema31.properties.t.items.properties.ma.oneOf[11],data:data24};
if(vErrors === null){
vErrors = [err113];
}
else {
vErrors.push(err113);
}
errors++;
}
var _valid6 = _errs104 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 11];
}
else {
if(_valid6){
valid14 = true;
passing6 = 11;
}
const _errs105 = errors;
if("1199" !== data24){
const err114 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/12/const",keyword:"const",params:{allowedValue: "1199"},message:"must be equal to constant",schema:"1199",parentSchema:schema31.properties.t.items.properties.ma.oneOf[12],data:data24};
if(vErrors === null){
vErrors = [err114];
}
else {
vErrors.push(err114);
}
errors++;
}
var _valid6 = _errs105 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 12];
}
else {
if(_valid6){
valid14 = true;
passing6 = 12;
}
const _errs106 = errors;
if("1215" !== data24){
const err115 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/13/const",keyword:"const",params:{allowedValue: "1215"},message:"must be equal to constant",schema:"1215",parentSchema:schema31.properties.t.items.properties.ma.oneOf[13],data:data24};
if(vErrors === null){
vErrors = [err115];
}
else {
vErrors.push(err115);
}
errors++;
}
var _valid6 = _errs106 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 13];
}
else {
if(_valid6){
valid14 = true;
passing6 = 13;
}
const _errs107 = errors;
if("1218" !== data24){
const err116 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/14/const",keyword:"const",params:{allowedValue: "1218"},message:"must be equal to constant",schema:"1218",parentSchema:schema31.properties.t.items.properties.ma.oneOf[14],data:data24};
if(vErrors === null){
vErrors = [err116];
}
else {
vErrors.push(err116);
}
errors++;
}
var _valid6 = _errs107 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 14];
}
else {
if(_valid6){
valid14 = true;
passing6 = 14;
}
const _errs108 = errors;
if("1223" !== data24){
const err117 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/15/const",keyword:"const",params:{allowedValue: "1223"},message:"must be equal to constant",schema:"1223",parentSchema:schema31.properties.t.items.properties.ma.oneOf[15],data:data24};
if(vErrors === null){
vErrors = [err117];
}
else {
vErrors.push(err117);
}
errors++;
}
var _valid6 = _errs108 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 15];
}
else {
if(_valid6){
valid14 = true;
passing6 = 15;
}
const _errs109 = errors;
if("1225" !== data24){
const err118 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/16/const",keyword:"const",params:{allowedValue: "1225"},message:"must be equal to constant",schema:"1225",parentSchema:schema31.properties.t.items.properties.ma.oneOf[16],data:data24};
if(vErrors === null){
vErrors = [err118];
}
else {
vErrors.push(err118);
}
errors++;
}
var _valid6 = _errs109 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 16];
}
else {
if(_valid6){
valid14 = true;
passing6 = 16;
}
const _errs110 = errors;
if("1232" !== data24){
const err119 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/17/const",keyword:"const",params:{allowedValue: "1232"},message:"must be equal to constant",schema:"1232",parentSchema:schema31.properties.t.items.properties.ma.oneOf[17],data:data24};
if(vErrors === null){
vErrors = [err119];
}
else {
vErrors.push(err119);
}
errors++;
}
var _valid6 = _errs110 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 17];
}
else {
if(_valid6){
valid14 = true;
passing6 = 17;
}
const _errs111 = errors;
if("1236" !== data24){
const err120 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/18/const",keyword:"const",params:{allowedValue: "1236"},message:"must be equal to constant",schema:"1236",parentSchema:schema31.properties.t.items.properties.ma.oneOf[18],data:data24};
if(vErrors === null){
vErrors = [err120];
}
else {
vErrors.push(err120);
}
errors++;
}
var _valid6 = _errs111 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 18];
}
else {
if(_valid6){
valid14 = true;
passing6 = 18;
}
const _errs112 = errors;
if("1242" !== data24){
const err121 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/19/const",keyword:"const",params:{allowedValue: "1242"},message:"must be equal to constant",schema:"1242",parentSchema:schema31.properties.t.items.properties.ma.oneOf[19],data:data24};
if(vErrors === null){
vErrors = [err121];
}
else {
vErrors.push(err121);
}
errors++;
}
var _valid6 = _errs112 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 19];
}
else {
if(_valid6){
valid14 = true;
passing6 = 19;
}
const _errs113 = errors;
if("1244" !== data24){
const err122 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/20/const",keyword:"const",params:{allowedValue: "1244"},message:"must be equal to constant",schema:"1244",parentSchema:schema31.properties.t.items.properties.ma.oneOf[20],data:data24};
if(vErrors === null){
vErrors = [err122];
}
else {
vErrors.push(err122);
}
errors++;
}
var _valid6 = _errs113 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 20];
}
else {
if(_valid6){
valid14 = true;
passing6 = 20;
}
const _errs114 = errors;
if("1246" !== data24){
const err123 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/21/const",keyword:"const",params:{allowedValue: "1246"},message:"must be equal to constant",schema:"1246",parentSchema:schema31.properties.t.items.properties.ma.oneOf[21],data:data24};
if(vErrors === null){
vErrors = [err123];
}
else {
vErrors.push(err123);
}
errors++;
}
var _valid6 = _errs114 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 21];
}
else {
if(_valid6){
valid14 = true;
passing6 = 21;
}
const _errs115 = errors;
if("1253" !== data24){
const err124 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/22/const",keyword:"const",params:{allowedValue: "1253"},message:"must be equal to constant",schema:"1253",parentSchema:schema31.properties.t.items.properties.ma.oneOf[22],data:data24};
if(vErrors === null){
vErrors = [err124];
}
else {
vErrors.push(err124);
}
errors++;
}
var _valid6 = _errs115 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 22];
}
else {
if(_valid6){
valid14 = true;
passing6 = 22;
}
const _errs116 = errors;
if("1256" !== data24){
const err125 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/23/const",keyword:"const",params:{allowedValue: "1256"},message:"must be equal to constant",schema:"1256",parentSchema:schema31.properties.t.items.properties.ma.oneOf[23],data:data24};
if(vErrors === null){
vErrors = [err125];
}
else {
vErrors.push(err125);
}
errors++;
}
var _valid6 = _errs116 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 23];
}
else {
if(_valid6){
valid14 = true;
passing6 = 23;
}
const _errs117 = errors;
if("1263" !== data24){
const err126 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/24/const",keyword:"const",params:{allowedValue: "1263"},message:"must be equal to constant",schema:"1263",parentSchema:schema31.properties.t.items.properties.ma.oneOf[24],data:data24};
if(vErrors === null){
vErrors = [err126];
}
else {
vErrors.push(err126);
}
errors++;
}
var _valid6 = _errs117 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 24];
}
else {
if(_valid6){
valid14 = true;
passing6 = 24;
}
const _errs118 = errors;
if("1266" !== data24){
const err127 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/25/const",keyword:"const",params:{allowedValue: "1266"},message:"must be equal to constant",schema:"1266",parentSchema:schema31.properties.t.items.properties.ma.oneOf[25],data:data24};
if(vErrors === null){
vErrors = [err127];
}
else {
vErrors.push(err127);
}
errors++;
}
var _valid6 = _errs118 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 25];
}
else {
if(_valid6){
valid14 = true;
passing6 = 25;
}
const _errs119 = errors;
if("1267" !== data24){
const err128 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/26/const",keyword:"const",params:{allowedValue: "1267"},message:"must be equal to constant",schema:"1267",parentSchema:schema31.properties.t.items.properties.ma.oneOf[26],data:data24};
if(vErrors === null){
vErrors = [err128];
}
else {
vErrors.push(err128);
}
errors++;
}
var _valid6 = _errs119 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 26];
}
else {
if(_valid6){
valid14 = true;
passing6 = 26;
}
const _errs120 = errors;
if("1268" !== data24){
const err129 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/27/const",keyword:"const",params:{allowedValue: "1268"},message:"must be equal to constant",schema:"1268",parentSchema:schema31.properties.t.items.properties.ma.oneOf[27],data:data24};
if(vErrors === null){
vErrors = [err129];
}
else {
vErrors.push(err129);
}
errors++;
}
var _valid6 = _errs120 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 27];
}
else {
if(_valid6){
valid14 = true;
passing6 = 27;
}
const _errs121 = errors;
if("1271" !== data24){
const err130 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/28/const",keyword:"const",params:{allowedValue: "1271"},message:"must be equal to constant",schema:"1271",parentSchema:schema31.properties.t.items.properties.ma.oneOf[28],data:data24};
if(vErrors === null){
vErrors = [err130];
}
else {
vErrors.push(err130);
}
errors++;
}
var _valid6 = _errs121 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 28];
}
else {
if(_valid6){
valid14 = true;
passing6 = 28;
}
const _errs122 = errors;
if("1278" !== data24){
const err131 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/29/const",keyword:"const",params:{allowedValue: "1278"},message:"must be equal to constant",schema:"1278",parentSchema:schema31.properties.t.items.properties.ma.oneOf[29],data:data24};
if(vErrors === null){
vErrors = [err131];
}
else {
vErrors.push(err131);
}
errors++;
}
var _valid6 = _errs122 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 29];
}
else {
if(_valid6){
valid14 = true;
passing6 = 29;
}
const _errs123 = errors;
if("1295" !== data24){
const err132 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/30/const",keyword:"const",params:{allowedValue: "1295"},message:"must be equal to constant",schema:"1295",parentSchema:schema31.properties.t.items.properties.ma.oneOf[30],data:data24};
if(vErrors === null){
vErrors = [err132];
}
else {
vErrors.push(err132);
}
errors++;
}
var _valid6 = _errs123 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 30];
}
else {
if(_valid6){
valid14 = true;
passing6 = 30;
}
const _errs124 = errors;
if("1296" !== data24){
const err133 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/31/const",keyword:"const",params:{allowedValue: "1296"},message:"must be equal to constant",schema:"1296",parentSchema:schema31.properties.t.items.properties.ma.oneOf[31],data:data24};
if(vErrors === null){
vErrors = [err133];
}
else {
vErrors.push(err133);
}
errors++;
}
var _valid6 = _errs124 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 31];
}
else {
if(_valid6){
valid14 = true;
passing6 = 31;
}
const _errs125 = errors;
if("1304" !== data24){
const err134 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/32/const",keyword:"const",params:{allowedValue: "1304"},message:"must be equal to constant",schema:"1304",parentSchema:schema31.properties.t.items.properties.ma.oneOf[32],data:data24};
if(vErrors === null){
vErrors = [err134];
}
else {
vErrors.push(err134);
}
errors++;
}
var _valid6 = _errs125 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 32];
}
else {
if(_valid6){
valid14 = true;
passing6 = 32;
}
const _errs126 = errors;
if("1319" !== data24){
const err135 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/33/const",keyword:"const",params:{allowedValue: "1319"},message:"must be equal to constant",schema:"1319",parentSchema:schema31.properties.t.items.properties.ma.oneOf[33],data:data24};
if(vErrors === null){
vErrors = [err135];
}
else {
vErrors.push(err135);
}
errors++;
}
var _valid6 = _errs126 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 33];
}
else {
if(_valid6){
valid14 = true;
passing6 = 33;
}
const _errs127 = errors;
if("1331" !== data24){
const err136 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/34/const",keyword:"const",params:{allowedValue: "1331"},message:"must be equal to constant",schema:"1331",parentSchema:schema31.properties.t.items.properties.ma.oneOf[34],data:data24};
if(vErrors === null){
vErrors = [err136];
}
else {
vErrors.push(err136);
}
errors++;
}
var _valid6 = _errs127 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 34];
}
else {
if(_valid6){
valid14 = true;
passing6 = 34;
}
const _errs128 = errors;
if("1333" !== data24){
const err137 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/35/const",keyword:"const",params:{allowedValue: "1333"},message:"must be equal to constant",schema:"1333",parentSchema:schema31.properties.t.items.properties.ma.oneOf[35],data:data24};
if(vErrors === null){
vErrors = [err137];
}
else {
vErrors.push(err137);
}
errors++;
}
var _valid6 = _errs128 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 35];
}
else {
if(_valid6){
valid14 = true;
passing6 = 35;
}
const _errs129 = errors;
if("1341" !== data24){
const err138 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/36/const",keyword:"const",params:{allowedValue: "1341"},message:"must be equal to constant",schema:"1341",parentSchema:schema31.properties.t.items.properties.ma.oneOf[36],data:data24};
if(vErrors === null){
vErrors = [err138];
}
else {
vErrors.push(err138);
}
errors++;
}
var _valid6 = _errs129 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 36];
}
else {
if(_valid6){
valid14 = true;
passing6 = 36;
}
const _errs130 = errors;
if("1343" !== data24){
const err139 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/37/const",keyword:"const",params:{allowedValue: "1343"},message:"must be equal to constant",schema:"1343",parentSchema:schema31.properties.t.items.properties.ma.oneOf[37],data:data24};
if(vErrors === null){
vErrors = [err139];
}
else {
vErrors.push(err139);
}
errors++;
}
var _valid6 = _errs130 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 37];
}
else {
if(_valid6){
valid14 = true;
passing6 = 37;
}
const _errs131 = errors;
if("1360" !== data24){
const err140 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/38/const",keyword:"const",params:{allowedValue: "1360"},message:"must be equal to constant",schema:"1360",parentSchema:schema31.properties.t.items.properties.ma.oneOf[38],data:data24};
if(vErrors === null){
vErrors = [err140];
}
else {
vErrors.push(err140);
}
errors++;
}
var _valid6 = _errs131 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 38];
}
else {
if(_valid6){
valid14 = true;
passing6 = 38;
}
const _errs132 = errors;
if("1363" !== data24){
const err141 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/39/const",keyword:"const",params:{allowedValue: "1363"},message:"must be equal to constant",schema:"1363",parentSchema:schema31.properties.t.items.properties.ma.oneOf[39],data:data24};
if(vErrors === null){
vErrors = [err141];
}
else {
vErrors.push(err141);
}
errors++;
}
var _valid6 = _errs132 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 39];
}
else {
if(_valid6){
valid14 = true;
passing6 = 39;
}
const _errs133 = errors;
if("1365" !== data24){
const err142 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/40/const",keyword:"const",params:{allowedValue: "1365"},message:"must be equal to constant",schema:"1365",parentSchema:schema31.properties.t.items.properties.ma.oneOf[40],data:data24};
if(vErrors === null){
vErrors = [err142];
}
else {
vErrors.push(err142);
}
errors++;
}
var _valid6 = _errs133 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 40];
}
else {
if(_valid6){
valid14 = true;
passing6 = 40;
}
const _errs134 = errors;
if("1375" !== data24){
const err143 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/41/const",keyword:"const",params:{allowedValue: "1375"},message:"must be equal to constant",schema:"1375",parentSchema:schema31.properties.t.items.properties.ma.oneOf[41],data:data24};
if(vErrors === null){
vErrors = [err143];
}
else {
vErrors.push(err143);
}
errors++;
}
var _valid6 = _errs134 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 41];
}
else {
if(_valid6){
valid14 = true;
passing6 = 41;
}
const _errs135 = errors;
if("1392" !== data24){
const err144 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/42/const",keyword:"const",params:{allowedValue: "1392"},message:"must be equal to constant",schema:"1392",parentSchema:schema31.properties.t.items.properties.ma.oneOf[42],data:data24};
if(vErrors === null){
vErrors = [err144];
}
else {
vErrors.push(err144);
}
errors++;
}
var _valid6 = _errs135 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 42];
}
else {
if(_valid6){
valid14 = true;
passing6 = 42;
}
const _errs136 = errors;
if("1420" !== data24){
const err145 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/43/const",keyword:"const",params:{allowedValue: "1420"},message:"must be equal to constant",schema:"1420",parentSchema:schema31.properties.t.items.properties.ma.oneOf[43],data:data24};
if(vErrors === null){
vErrors = [err145];
}
else {
vErrors.push(err145);
}
errors++;
}
var _valid6 = _errs136 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 43];
}
else {
if(_valid6){
valid14 = true;
passing6 = 43;
}
const _errs137 = errors;
if("1437" !== data24){
const err146 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/44/const",keyword:"const",params:{allowedValue: "1437"},message:"must be equal to constant",schema:"1437",parentSchema:schema31.properties.t.items.properties.ma.oneOf[44],data:data24};
if(vErrors === null){
vErrors = [err146];
}
else {
vErrors.push(err146);
}
errors++;
}
var _valid6 = _errs137 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 44];
}
else {
if(_valid6){
valid14 = true;
passing6 = 44;
}
const _errs138 = errors;
if("1443" !== data24){
const err147 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/45/const",keyword:"const",params:{allowedValue: "1443"},message:"must be equal to constant",schema:"1443",parentSchema:schema31.properties.t.items.properties.ma.oneOf[45],data:data24};
if(vErrors === null){
vErrors = [err147];
}
else {
vErrors.push(err147);
}
errors++;
}
var _valid6 = _errs138 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 45];
}
else {
if(_valid6){
valid14 = true;
passing6 = 45;
}
const _errs139 = errors;
if("1456" !== data24){
const err148 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/46/const",keyword:"const",params:{allowedValue: "1456"},message:"must be equal to constant",schema:"1456",parentSchema:schema31.properties.t.items.properties.ma.oneOf[46],data:data24};
if(vErrors === null){
vErrors = [err148];
}
else {
vErrors.push(err148);
}
errors++;
}
var _valid6 = _errs139 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 46];
}
else {
if(_valid6){
valid14 = true;
passing6 = 46;
}
const _errs140 = errors;
if("1466" !== data24){
const err149 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/47/const",keyword:"const",params:{allowedValue: "1466"},message:"must be equal to constant",schema:"1466",parentSchema:schema31.properties.t.items.properties.ma.oneOf[47],data:data24};
if(vErrors === null){
vErrors = [err149];
}
else {
vErrors.push(err149);
}
errors++;
}
var _valid6 = _errs140 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 47];
}
else {
if(_valid6){
valid14 = true;
passing6 = 47;
}
const _errs141 = errors;
if("1468" !== data24){
const err150 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/48/const",keyword:"const",params:{allowedValue: "1468"},message:"must be equal to constant",schema:"1468",parentSchema:schema31.properties.t.items.properties.ma.oneOf[48],data:data24};
if(vErrors === null){
vErrors = [err150];
}
else {
vErrors.push(err150);
}
errors++;
}
var _valid6 = _errs141 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 48];
}
else {
if(_valid6){
valid14 = true;
passing6 = 48;
}
const _errs142 = errors;
if("1481" !== data24){
const err151 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/49/const",keyword:"const",params:{allowedValue: "1481"},message:"must be equal to constant",schema:"1481",parentSchema:schema31.properties.t.items.properties.ma.oneOf[49],data:data24};
if(vErrors === null){
vErrors = [err151];
}
else {
vErrors.push(err151);
}
errors++;
}
var _valid6 = _errs142 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 49];
}
else {
if(_valid6){
valid14 = true;
passing6 = 49;
}
const _errs143 = errors;
if("1484" !== data24){
const err152 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/50/const",keyword:"const",params:{allowedValue: "1484"},message:"must be equal to constant",schema:"1484",parentSchema:schema31.properties.t.items.properties.ma.oneOf[50],data:data24};
if(vErrors === null){
vErrors = [err152];
}
else {
vErrors.push(err152);
}
errors++;
}
var _valid6 = _errs143 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 50];
}
else {
if(_valid6){
valid14 = true;
passing6 = 50;
}
const _errs144 = errors;
if("1489" !== data24){
const err153 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/51/const",keyword:"const",params:{allowedValue: "1489"},message:"must be equal to constant",schema:"1489",parentSchema:schema31.properties.t.items.properties.ma.oneOf[51],data:data24};
if(vErrors === null){
vErrors = [err153];
}
else {
vErrors.push(err153);
}
errors++;
}
var _valid6 = _errs144 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 51];
}
else {
if(_valid6){
valid14 = true;
passing6 = 51;
}
const _errs145 = errors;
if("1490" !== data24){
const err154 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/52/const",keyword:"const",params:{allowedValue: "1490"},message:"must be equal to constant",schema:"1490",parentSchema:schema31.properties.t.items.properties.ma.oneOf[52],data:data24};
if(vErrors === null){
vErrors = [err154];
}
else {
vErrors.push(err154);
}
errors++;
}
var _valid6 = _errs145 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 52];
}
else {
if(_valid6){
valid14 = true;
passing6 = 52;
}
const _errs146 = errors;
if("1574" !== data24){
const err155 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/53/const",keyword:"const",params:{allowedValue: "1574"},message:"must be equal to constant",schema:"1574",parentSchema:schema31.properties.t.items.properties.ma.oneOf[53],data:data24};
if(vErrors === null){
vErrors = [err155];
}
else {
vErrors.push(err155);
}
errors++;
}
var _valid6 = _errs146 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 53];
}
else {
if(_valid6){
valid14 = true;
passing6 = 53;
}
const _errs147 = errors;
if("1604" !== data24){
const err156 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/54/const",keyword:"const",params:{allowedValue: "1604"},message:"must be equal to constant",schema:"1604",parentSchema:schema31.properties.t.items.properties.ma.oneOf[54],data:data24};
if(vErrors === null){
vErrors = [err156];
}
else {
vErrors.push(err156);
}
errors++;
}
var _valid6 = _errs147 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 54];
}
else {
if(_valid6){
valid14 = true;
passing6 = 54;
}
const _errs148 = errors;
if("1606" !== data24){
const err157 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/55/const",keyword:"const",params:{allowedValue: "1606"},message:"must be equal to constant",schema:"1606",parentSchema:schema31.properties.t.items.properties.ma.oneOf[55],data:data24};
if(vErrors === null){
vErrors = [err157];
}
else {
vErrors.push(err157);
}
errors++;
}
var _valid6 = _errs148 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 55];
}
else {
if(_valid6){
valid14 = true;
passing6 = 55;
}
const _errs149 = errors;
if("1654" !== data24){
const err158 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/56/const",keyword:"const",params:{allowedValue: "1654"},message:"must be equal to constant",schema:"1654",parentSchema:schema31.properties.t.items.properties.ma.oneOf[56],data:data24};
if(vErrors === null){
vErrors = [err158];
}
else {
vErrors.push(err158);
}
errors++;
}
var _valid6 = _errs149 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 56];
}
else {
if(_valid6){
valid14 = true;
passing6 = 56;
}
const _errs150 = errors;
if("1736" !== data24){
const err159 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/57/const",keyword:"const",params:{allowedValue: "1736"},message:"must be equal to constant",schema:"1736",parentSchema:schema31.properties.t.items.properties.ma.oneOf[57],data:data24};
if(vErrors === null){
vErrors = [err159];
}
else {
vErrors.push(err159);
}
errors++;
}
var _valid6 = _errs150 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 57];
}
else {
if(_valid6){
valid14 = true;
passing6 = 57;
}
const _errs151 = errors;
if("1747" !== data24){
const err160 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/58/const",keyword:"const",params:{allowedValue: "1747"},message:"must be equal to constant",schema:"1747",parentSchema:schema31.properties.t.items.properties.ma.oneOf[58],data:data24};
if(vErrors === null){
vErrors = [err160];
}
else {
vErrors.push(err160);
}
errors++;
}
var _valid6 = _errs151 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 58];
}
else {
if(_valid6){
valid14 = true;
passing6 = 58;
}
const _errs152 = errors;
if("1763" !== data24){
const err161 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/59/const",keyword:"const",params:{allowedValue: "1763"},message:"must be equal to constant",schema:"1763",parentSchema:schema31.properties.t.items.properties.ma.oneOf[59],data:data24};
if(vErrors === null){
vErrors = [err161];
}
else {
vErrors.push(err161);
}
errors++;
}
var _valid6 = _errs152 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 59];
}
else {
if(_valid6){
valid14 = true;
passing6 = 59;
}
const _errs153 = errors;
if("1764" !== data24){
const err162 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/60/const",keyword:"const",params:{allowedValue: "1764"},message:"must be equal to constant",schema:"1764",parentSchema:schema31.properties.t.items.properties.ma.oneOf[60],data:data24};
if(vErrors === null){
vErrors = [err162];
}
else {
vErrors.push(err162);
}
errors++;
}
var _valid6 = _errs153 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 60];
}
else {
if(_valid6){
valid14 = true;
passing6 = 60;
}
const _errs154 = errors;
if("1767" !== data24){
const err163 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/61/const",keyword:"const",params:{allowedValue: "1767"},message:"must be equal to constant",schema:"1767",parentSchema:schema31.properties.t.items.properties.ma.oneOf[61],data:data24};
if(vErrors === null){
vErrors = [err163];
}
else {
vErrors.push(err163);
}
errors++;
}
var _valid6 = _errs154 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 61];
}
else {
if(_valid6){
valid14 = true;
passing6 = 61;
}
const _errs155 = errors;
if("1769" !== data24){
const err164 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/62/const",keyword:"const",params:{allowedValue: "1769"},message:"must be equal to constant",schema:"1769",parentSchema:schema31.properties.t.items.properties.ma.oneOf[62],data:data24};
if(vErrors === null){
vErrors = [err164];
}
else {
vErrors.push(err164);
}
errors++;
}
var _valid6 = _errs155 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 62];
}
else {
if(_valid6){
valid14 = true;
passing6 = 62;
}
const _errs156 = errors;
if("1815" !== data24){
const err165 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/63/const",keyword:"const",params:{allowedValue: "1815"},message:"must be equal to constant",schema:"1815",parentSchema:schema31.properties.t.items.properties.ma.oneOf[63],data:data24};
if(vErrors === null){
vErrors = [err165];
}
else {
vErrors.push(err165);
}
errors++;
}
var _valid6 = _errs156 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 63];
}
else {
if(_valid6){
valid14 = true;
passing6 = 63;
}
const _errs157 = errors;
if("1822" !== data24){
const err166 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/64/const",keyword:"const",params:{allowedValue: "1822"},message:"must be equal to constant",schema:"1822",parentSchema:schema31.properties.t.items.properties.ma.oneOf[64],data:data24};
if(vErrors === null){
vErrors = [err166];
}
else {
vErrors.push(err166);
}
errors++;
}
var _valid6 = _errs157 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 64];
}
else {
if(_valid6){
valid14 = true;
passing6 = 64;
}
const _errs158 = errors;
if("1833" !== data24){
const err167 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/65/const",keyword:"const",params:{allowedValue: "1833"},message:"must be equal to constant",schema:"1833",parentSchema:schema31.properties.t.items.properties.ma.oneOf[65],data:data24};
if(vErrors === null){
vErrors = [err167];
}
else {
vErrors.push(err167);
}
errors++;
}
var _valid6 = _errs158 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 65];
}
else {
if(_valid6){
valid14 = true;
passing6 = 65;
}
const _errs159 = errors;
if("1844" !== data24){
const err168 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/66/const",keyword:"const",params:{allowedValue: "1844"},message:"must be equal to constant",schema:"1844",parentSchema:schema31.properties.t.items.properties.ma.oneOf[66],data:data24};
if(vErrors === null){
vErrors = [err168];
}
else {
vErrors.push(err168);
}
errors++;
}
var _valid6 = _errs159 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 66];
}
else {
if(_valid6){
valid14 = true;
passing6 = 66;
}
const _errs160 = errors;
if("1870" !== data24){
const err169 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/67/const",keyword:"const",params:{allowedValue: "1870"},message:"must be equal to constant",schema:"1870",parentSchema:schema31.properties.t.items.properties.ma.oneOf[67],data:data24};
if(vErrors === null){
vErrors = [err169];
}
else {
vErrors.push(err169);
}
errors++;
}
var _valid6 = _errs160 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 67];
}
else {
if(_valid6){
valid14 = true;
passing6 = 67;
}
const _errs161 = errors;
if("1884" !== data24){
const err170 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/68/const",keyword:"const",params:{allowedValue: "1884"},message:"must be equal to constant",schema:"1884",parentSchema:schema31.properties.t.items.properties.ma.oneOf[68],data:data24};
if(vErrors === null){
vErrors = [err170];
}
else {
vErrors.push(err170);
}
errors++;
}
var _valid6 = _errs161 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 68];
}
else {
if(_valid6){
valid14 = true;
passing6 = 68;
}
const _errs162 = errors;
if("1906" !== data24){
const err171 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/69/const",keyword:"const",params:{allowedValue: "1906"},message:"must be equal to constant",schema:"1906",parentSchema:schema31.properties.t.items.properties.ma.oneOf[69],data:data24};
if(vErrors === null){
vErrors = [err171];
}
else {
vErrors.push(err171);
}
errors++;
}
var _valid6 = _errs162 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 69];
}
else {
if(_valid6){
valid14 = true;
passing6 = 69;
}
const _errs163 = errors;
if("1919" !== data24){
const err172 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/70/const",keyword:"const",params:{allowedValue: "1919"},message:"must be equal to constant",schema:"1919",parentSchema:schema31.properties.t.items.properties.ma.oneOf[70],data:data24};
if(vErrors === null){
vErrors = [err172];
}
else {
vErrors.push(err172);
}
errors++;
}
var _valid6 = _errs163 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 70];
}
else {
if(_valid6){
valid14 = true;
passing6 = 70;
}
const _errs164 = errors;
if("1934" !== data24){
const err173 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/71/const",keyword:"const",params:{allowedValue: "1934"},message:"must be equal to constant",schema:"1934",parentSchema:schema31.properties.t.items.properties.ma.oneOf[71],data:data24};
if(vErrors === null){
vErrors = [err173];
}
else {
vErrors.push(err173);
}
errors++;
}
var _valid6 = _errs164 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 71];
}
else {
if(_valid6){
valid14 = true;
passing6 = 71;
}
const _errs165 = errors;
if("2010" !== data24){
const err174 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/72/const",keyword:"const",params:{allowedValue: "2010"},message:"must be equal to constant",schema:"2010",parentSchema:schema31.properties.t.items.properties.ma.oneOf[72],data:data24};
if(vErrors === null){
vErrors = [err174];
}
else {
vErrors.push(err174);
}
errors++;
}
var _valid6 = _errs165 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 72];
}
else {
if(_valid6){
valid14 = true;
passing6 = 72;
}
const _errs166 = errors;
if("2017" !== data24){
const err175 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf/73/const",keyword:"const",params:{allowedValue: "2017"},message:"must be equal to constant",schema:"2017",parentSchema:schema31.properties.t.items.properties.ma.oneOf[73],data:data24};
if(vErrors === null){
vErrors = [err175];
}
else {
vErrors.push(err175);
}
errors++;
}
var _valid6 = _errs166 === errors;
if(_valid6 && valid14){
valid14 = false;
passing6 = [passing6, 73];
}
else {
if(_valid6){
valid14 = true;
passing6 = 73;
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
if(!valid14){
const err176 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/properties/t/items/properties/ma/oneOf",keyword:"oneOf",params:{passingSchemas: passing6},message:"must match exactly one schema in oneOf",schema:schema31.properties.t.items.properties.ma.oneOf,parentSchema:schema31.properties.t.items.properties.ma,data:data24};
if(vErrors === null){
vErrors = [err176];
}
else {
vErrors.push(err176);
}
errors++;
}
else {
errors = _errs92;
if(vErrors !== null){
if(_errs92){
vErrors.length = _errs92;
}
else {
vErrors = null;
}
}
}
}
if(data20.sc !== undefined){
let data25 = data20.sc;
if(typeof data25 === "string"){
if(!(formats2.validate(data25))){
const err177 = {instancePath:instancePath+"/t/" + i1+"/sc",schemaPath:"#/properties/t/items/properties/sc/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\"",schema:"date-time",parentSchema:schema31.properties.t.items.properties.sc,data:data25};
if(vErrors === null){
vErrors = [err177];
}
else {
vErrors.push(err177);
}
errors++;
}
}
else {
const err178 = {instancePath:instancePath+"/t/" + i1+"/sc",schemaPath:"#/properties/t/items/properties/sc/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.t.items.properties.sc.type,parentSchema:schema31.properties.t.items.properties.sc,data:data25};
if(vErrors === null){
vErrors = [err178];
}
else {
vErrors.push(err178);
}
errors++;
}
}
if(data20.dr !== undefined){
let data26 = data20.dr;
if(typeof data26 === "string"){
if(!(formats2.validate(data26))){
const err179 = {instancePath:instancePath+"/t/" + i1+"/dr",schemaPath:"#/properties/t/items/properties/dr/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\"",schema:"date-time",parentSchema:schema31.properties.t.items.properties.dr,data:data26};
if(vErrors === null){
vErrors = [err179];
}
else {
vErrors.push(err179);
}
errors++;
}
}
else {
const err180 = {instancePath:instancePath+"/t/" + i1+"/dr",schemaPath:"#/properties/t/items/properties/dr/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.t.items.properties.dr.type,parentSchema:schema31.properties.t.items.properties.dr,data:data26};
if(vErrors === null){
vErrors = [err180];
}
else {
vErrors.push(err180);
}
errors++;
}
}
if(data20.tr !== undefined){
let data27 = data20.tr;
if(typeof data27 !== "string"){
const err181 = {instancePath:instancePath+"/t/" + i1+"/tr",schemaPath:"#/properties/t/items/properties/tr/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.t.items.properties.tr.type,parentSchema:schema31.properties.t.items.properties.tr,data:data27};
if(vErrors === null){
vErrors = [err181];
}
else {
vErrors.push(err181);
}
errors++;
}
const _errs173 = errors;
let valid15 = false;
let passing7 = null;
const _errs174 = errors;
if("260373001" !== data27){
const err182 = {instancePath:instancePath+"/t/" + i1+"/tr",schemaPath:"#/properties/t/items/properties/tr/oneOf/0/const",keyword:"const",params:{allowedValue: "260373001"},message:"must be equal to constant",schema:"260373001",parentSchema:schema31.properties.t.items.properties.tr.oneOf[0],data:data27};
if(vErrors === null){
vErrors = [err182];
}
else {
vErrors.push(err182);
}
errors++;
}
var _valid7 = _errs174 === errors;
if(_valid7){
valid15 = true;
passing7 = 0;
}
const _errs175 = errors;
if("260415000" !== data27){
const err183 = {instancePath:instancePath+"/t/" + i1+"/tr",schemaPath:"#/properties/t/items/properties/tr/oneOf/1/const",keyword:"const",params:{allowedValue: "260415000"},message:"must be equal to constant",schema:"260415000",parentSchema:schema31.properties.t.items.properties.tr.oneOf[1],data:data27};
if(vErrors === null){
vErrors = [err183];
}
else {
vErrors.push(err183);
}
errors++;
}
var _valid7 = _errs175 === errors;
if(_valid7 && valid15){
valid15 = false;
passing7 = [passing7, 1];
}
else {
if(_valid7){
valid15 = true;
passing7 = 1;
}
}
if(!valid15){
const err184 = {instancePath:instancePath+"/t/" + i1+"/tr",schemaPath:"#/properties/t/items/properties/tr/oneOf",keyword:"oneOf",params:{passingSchemas: passing7},message:"must match exactly one schema in oneOf",schema:schema31.properties.t.items.properties.tr.oneOf,parentSchema:schema31.properties.t.items.properties.tr,data:data27};
if(vErrors === null){
vErrors = [err184];
}
else {
vErrors.push(err184);
}
errors++;
}
else {
errors = _errs173;
if(vErrors !== null){
if(_errs173){
vErrors.length = _errs173;
}
else {
vErrors = null;
}
}
}
}
if(data20.tc !== undefined){
let data28 = data20.tc;
if(typeof data28 === "string"){
if(func3(data28) > 50){
const err185 = {instancePath:instancePath+"/t/" + i1+"/tc",schemaPath:"#/properties/t/items/properties/tc/maxLength",keyword:"maxLength",params:{limit: 50},message:"must NOT have more than 50 characters",schema:50,parentSchema:schema31.properties.t.items.properties.tc,data:data28};
if(vErrors === null){
vErrors = [err185];
}
else {
vErrors.push(err185);
}
errors++;
}
}
else {
const err186 = {instancePath:instancePath+"/t/" + i1+"/tc",schemaPath:"#/properties/t/items/properties/tc/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.t.items.properties.tc.type,parentSchema:schema31.properties.t.items.properties.tc,data:data28};
if(vErrors === null){
vErrors = [err186];
}
else {
vErrors.push(err186);
}
errors++;
}
}
if(data20.co !== undefined){
let data29 = data20.co;
if(typeof data29 === "string"){
if(!pattern8.test(data29)){
const err187 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/properties/t/items/properties/co/pattern",keyword:"pattern",params:{pattern: "[A-Z]{1,10}"},message:"must match pattern \""+"[A-Z]{1,10}"+"\"",schema:"[A-Z]{1,10}",parentSchema:schema31.properties.t.items.properties.co,data:data29};
if(vErrors === null){
vErrors = [err187];
}
else {
vErrors.push(err187);
}
errors++;
}
}
else {
const err188 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/properties/t/items/properties/co/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.t.items.properties.co.type,parentSchema:schema31.properties.t.items.properties.co,data:data29};
if(vErrors === null){
vErrors = [err188];
}
else {
vErrors.push(err188);
}
errors++;
}
}
if(data20.is !== undefined){
let data30 = data20.is;
if(typeof data30 === "string"){
if(func3(data30) > 50){
const err189 = {instancePath:instancePath+"/t/" + i1+"/is",schemaPath:"#/properties/t/items/properties/is/maxLength",keyword:"maxLength",params:{limit: 50},message:"must NOT have more than 50 characters",schema:50,parentSchema:schema31.properties.t.items.properties.is,data:data30};
if(vErrors === null){
vErrors = [err189];
}
else {
vErrors.push(err189);
}
errors++;
}
}
else {
const err190 = {instancePath:instancePath+"/t/" + i1+"/is",schemaPath:"#/properties/t/items/properties/is/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.t.items.properties.is.type,parentSchema:schema31.properties.t.items.properties.is,data:data30};
if(vErrors === null){
vErrors = [err190];
}
else {
vErrors.push(err190);
}
errors++;
}
}
if(data20.ci !== undefined){
let data31 = data20.ci;
if(typeof data31 === "string"){
if(func3(data31) > 50){
const err191 = {instancePath:instancePath+"/t/" + i1+"/ci",schemaPath:"#/properties/t/items/properties/ci/maxLength",keyword:"maxLength",params:{limit: 50},message:"must NOT have more than 50 characters",schema:50,parentSchema:schema31.properties.t.items.properties.ci,data:data31};
if(vErrors === null){
vErrors = [err191];
}
else {
vErrors.push(err191);
}
errors++;
}
}
else {
const err192 = {instancePath:instancePath+"/t/" + i1+"/ci",schemaPath:"#/properties/t/items/properties/ci/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.t.items.properties.ci.type,parentSchema:schema31.properties.t.items.properties.ci,data:data31};
if(vErrors === null){
vErrors = [err192];
}
else {
vErrors.push(err192);
}
errors++;
}
}
}
else {
const err193 = {instancePath:instancePath+"/t/" + i1,schemaPath:"#/properties/t/items/type",keyword:"type",params:{type: "object"},message:"must be object",schema:schema31.properties.t.items.type,parentSchema:schema31.properties.t.items,data:data20};
if(vErrors === null){
vErrors = [err193];
}
else {
vErrors.push(err193);
}
errors++;
}
}
}
else {
const err194 = {instancePath:instancePath+"/t",schemaPath:"#/properties/t/type",keyword:"type",params:{type: "array"},message:"must be array",schema:schema31.properties.t.type,parentSchema:schema31.properties.t,data:data19};
if(vErrors === null){
vErrors = [err194];
}
else {
vErrors.push(err194);
}
errors++;
}
}
if(data.r !== undefined){
let data32 = data.r;
if(Array.isArray(data32)){
if(data32.length < 1){
const err195 = {instancePath:instancePath+"/r",schemaPath:"#/properties/r/minItems",keyword:"minItems",params:{limit: 1},message:"must NOT have fewer than 1 items",schema:1,parentSchema:schema31.properties.r,data:data32};
if(vErrors === null){
vErrors = [err195];
}
else {
vErrors.push(err195);
}
errors++;
}
const len2 = data32.length;
for(let i2=0; i2<len2; i2++){
let data33 = data32[i2];
if(data33 && typeof data33 == "object" && !Array.isArray(data33)){
if(data33.tg === undefined){
const err196 = {instancePath:instancePath+"/r/" + i2,schemaPath:"#/properties/r/items/required",keyword:"required",params:{missingProperty: "tg"},message:"must have required property '"+"tg"+"'",schema:schema31.properties.r.items.required,parentSchema:schema31.properties.r.items,data:data33};
if(vErrors === null){
vErrors = [err196];
}
else {
vErrors.push(err196);
}
errors++;
}
if(data33.fr === undefined){
const err197 = {instancePath:instancePath+"/r/" + i2,schemaPath:"#/properties/r/items/required",keyword:"required",params:{missingProperty: "fr"},message:"must have required property '"+"fr"+"'",schema:schema31.properties.r.items.required,parentSchema:schema31.properties.r.items,data:data33};
if(vErrors === null){
vErrors = [err197];
}
else {
vErrors.push(err197);
}
errors++;
}
if(data33.co === undefined){
const err198 = {instancePath:instancePath+"/r/" + i2,schemaPath:"#/properties/r/items/required",keyword:"required",params:{missingProperty: "co"},message:"must have required property '"+"co"+"'",schema:schema31.properties.r.items.required,parentSchema:schema31.properties.r.items,data:data33};
if(vErrors === null){
vErrors = [err198];
}
else {
vErrors.push(err198);
}
errors++;
}
if(data33.is === undefined){
const err199 = {instancePath:instancePath+"/r/" + i2,schemaPath:"#/properties/r/items/required",keyword:"required",params:{missingProperty: "is"},message:"must have required property '"+"is"+"'",schema:schema31.properties.r.items.required,parentSchema:schema31.properties.r.items,data:data33};
if(vErrors === null){
vErrors = [err199];
}
else {
vErrors.push(err199);
}
errors++;
}
if(data33.df === undefined){
const err200 = {instancePath:instancePath+"/r/" + i2,schemaPath:"#/properties/r/items/required",keyword:"required",params:{missingProperty: "df"},message:"must have required property '"+"df"+"'",schema:schema31.properties.r.items.required,parentSchema:schema31.properties.r.items,data:data33};
if(vErrors === null){
vErrors = [err200];
}
else {
vErrors.push(err200);
}
errors++;
}
if(data33.du === undefined){
const err201 = {instancePath:instancePath+"/r/" + i2,schemaPath:"#/properties/r/items/required",keyword:"required",params:{missingProperty: "du"},message:"must have required property '"+"du"+"'",schema:schema31.properties.r.items.required,parentSchema:schema31.properties.r.items,data:data33};
if(vErrors === null){
vErrors = [err201];
}
else {
vErrors.push(err201);
}
errors++;
}
if(data33.ci === undefined){
const err202 = {instancePath:instancePath+"/r/" + i2,schemaPath:"#/properties/r/items/required",keyword:"required",params:{missingProperty: "ci"},message:"must have required property '"+"ci"+"'",schema:schema31.properties.r.items.required,parentSchema:schema31.properties.r.items,data:data33};
if(vErrors === null){
vErrors = [err202];
}
else {
vErrors.push(err202);
}
errors++;
}
if(data33.tg !== undefined){
let data34 = data33.tg;
if(typeof data34 !== "string"){
const err203 = {instancePath:instancePath+"/r/" + i2+"/tg",schemaPath:"#/properties/r/items/properties/tg/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.r.items.properties.tg.type,parentSchema:schema31.properties.r.items.properties.tg,data:data34};
if(vErrors === null){
vErrors = [err203];
}
else {
vErrors.push(err203);
}
errors++;
}
const _errs190 = errors;
let valid19 = false;
let passing8 = null;
const _errs191 = errors;
if("840539006" !== data34){
const err204 = {instancePath:instancePath+"/r/" + i2+"/tg",schemaPath:"#/properties/r/items/properties/tg/oneOf/0/const",keyword:"const",params:{allowedValue: "840539006"},message:"must be equal to constant",schema:"840539006",parentSchema:schema31.properties.r.items.properties.tg.oneOf[0],data:data34};
if(vErrors === null){
vErrors = [err204];
}
else {
vErrors.push(err204);
}
errors++;
}
var _valid8 = _errs191 === errors;
if(_valid8){
valid19 = true;
passing8 = 0;
}
if(!valid19){
const err205 = {instancePath:instancePath+"/r/" + i2+"/tg",schemaPath:"#/properties/r/items/properties/tg/oneOf",keyword:"oneOf",params:{passingSchemas: passing8},message:"must match exactly one schema in oneOf",schema:schema31.properties.r.items.properties.tg.oneOf,parentSchema:schema31.properties.r.items.properties.tg,data:data34};
if(vErrors === null){
vErrors = [err205];
}
else {
vErrors.push(err205);
}
errors++;
}
else {
errors = _errs190;
if(vErrors !== null){
if(_errs190){
vErrors.length = _errs190;
}
else {
vErrors = null;
}
}
}
}
if(data33.fr !== undefined){
let data35 = data33.fr;
if(typeof data35 === "string"){
if(!(formats0.validate(data35))){
const err206 = {instancePath:instancePath+"/r/" + i2+"/fr",schemaPath:"#/properties/r/items/properties/fr/format",keyword:"format",params:{format: "date"},message:"must match format \""+"date"+"\"",schema:"date",parentSchema:schema31.properties.r.items.properties.fr,data:data35};
if(vErrors === null){
vErrors = [err206];
}
else {
vErrors.push(err206);
}
errors++;
}
}
else {
const err207 = {instancePath:instancePath+"/r/" + i2+"/fr",schemaPath:"#/properties/r/items/properties/fr/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.r.items.properties.fr.type,parentSchema:schema31.properties.r.items.properties.fr,data:data35};
if(vErrors === null){
vErrors = [err207];
}
else {
vErrors.push(err207);
}
errors++;
}
}
if(data33.co !== undefined){
let data36 = data33.co;
if(typeof data36 === "string"){
if(!pattern8.test(data36)){
const err208 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/properties/r/items/properties/co/pattern",keyword:"pattern",params:{pattern: "[A-Z]{1,10}"},message:"must match pattern \""+"[A-Z]{1,10}"+"\"",schema:"[A-Z]{1,10}",parentSchema:schema31.properties.r.items.properties.co,data:data36};
if(vErrors === null){
vErrors = [err208];
}
else {
vErrors.push(err208);
}
errors++;
}
}
else {
const err209 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/properties/r/items/properties/co/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.r.items.properties.co.type,parentSchema:schema31.properties.r.items.properties.co,data:data36};
if(vErrors === null){
vErrors = [err209];
}
else {
vErrors.push(err209);
}
errors++;
}
}
if(data33.is !== undefined){
let data37 = data33.is;
if(typeof data37 === "string"){
if(func3(data37) > 50){
const err210 = {instancePath:instancePath+"/r/" + i2+"/is",schemaPath:"#/properties/r/items/properties/is/maxLength",keyword:"maxLength",params:{limit: 50},message:"must NOT have more than 50 characters",schema:50,parentSchema:schema31.properties.r.items.properties.is,data:data37};
if(vErrors === null){
vErrors = [err210];
}
else {
vErrors.push(err210);
}
errors++;
}
}
else {
const err211 = {instancePath:instancePath+"/r/" + i2+"/is",schemaPath:"#/properties/r/items/properties/is/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.r.items.properties.is.type,parentSchema:schema31.properties.r.items.properties.is,data:data37};
if(vErrors === null){
vErrors = [err211];
}
else {
vErrors.push(err211);
}
errors++;
}
}
if(data33.df !== undefined){
let data38 = data33.df;
if(typeof data38 === "string"){
if(!(formats0.validate(data38))){
const err212 = {instancePath:instancePath+"/r/" + i2+"/df",schemaPath:"#/properties/r/items/properties/df/format",keyword:"format",params:{format: "date"},message:"must match format \""+"date"+"\"",schema:"date",parentSchema:schema31.properties.r.items.properties.df,data:data38};
if(vErrors === null){
vErrors = [err212];
}
else {
vErrors.push(err212);
}
errors++;
}
}
else {
const err213 = {instancePath:instancePath+"/r/" + i2+"/df",schemaPath:"#/properties/r/items/properties/df/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.r.items.properties.df.type,parentSchema:schema31.properties.r.items.properties.df,data:data38};
if(vErrors === null){
vErrors = [err213];
}
else {
vErrors.push(err213);
}
errors++;
}
}
if(data33.du !== undefined){
let data39 = data33.du;
if(typeof data39 === "string"){
if(!(formats0.validate(data39))){
const err214 = {instancePath:instancePath+"/r/" + i2+"/du",schemaPath:"#/properties/r/items/properties/du/format",keyword:"format",params:{format: "date"},message:"must match format \""+"date"+"\"",schema:"date",parentSchema:schema31.properties.r.items.properties.du,data:data39};
if(vErrors === null){
vErrors = [err214];
}
else {
vErrors.push(err214);
}
errors++;
}
}
else {
const err215 = {instancePath:instancePath+"/r/" + i2+"/du",schemaPath:"#/properties/r/items/properties/du/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.r.items.properties.du.type,parentSchema:schema31.properties.r.items.properties.du,data:data39};
if(vErrors === null){
vErrors = [err215];
}
else {
vErrors.push(err215);
}
errors++;
}
}
if(data33.ci !== undefined){
let data40 = data33.ci;
if(typeof data40 === "string"){
if(func3(data40) > 50){
const err216 = {instancePath:instancePath+"/r/" + i2+"/ci",schemaPath:"#/properties/r/items/properties/ci/maxLength",keyword:"maxLength",params:{limit: 50},message:"must NOT have more than 50 characters",schema:50,parentSchema:schema31.properties.r.items.properties.ci,data:data40};
if(vErrors === null){
vErrors = [err216];
}
else {
vErrors.push(err216);
}
errors++;
}
}
else {
const err217 = {instancePath:instancePath+"/r/" + i2+"/ci",schemaPath:"#/properties/r/items/properties/ci/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.properties.r.items.properties.ci.type,parentSchema:schema31.properties.r.items.properties.ci,data:data40};
if(vErrors === null){
vErrors = [err217];
}
else {
vErrors.push(err217);
}
errors++;
}
}
}
else {
const err218 = {instancePath:instancePath+"/r/" + i2,schemaPath:"#/properties/r/items/type",keyword:"type",params:{type: "object"},message:"must be object",schema:schema31.properties.r.items.type,parentSchema:schema31.properties.r.items,data:data33};
if(vErrors === null){
vErrors = [err218];
}
else {
vErrors.push(err218);
}
errors++;
}
}
}
else {
const err219 = {instancePath:instancePath+"/r",schemaPath:"#/properties/r/type",keyword:"type",params:{type: "array"},message:"must be array",schema:schema31.properties.r.type,parentSchema:schema31.properties.r,data:data32};
if(vErrors === null){
vErrors = [err219];
}
else {
vErrors.push(err219);
}
errors++;
}
}
}
else {
const err220 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object",schema:schema31.type,parentSchema:schema31,data};
if(vErrors === null){
vErrors = [err220];
}
else {
vErrors.push(err220);
}
errors++;
}
validate20.errors = vErrors;
return errors === 0;
}
validate20.evaluated = {"props":{"ver":true,"nam":true,"dob":true,"v":true,"t":true,"r":true},"dynamicProps":false,"dynamicItems":false};
