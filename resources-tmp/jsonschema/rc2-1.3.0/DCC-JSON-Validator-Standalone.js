"use strict";
module.exports = validate20;
module.exports.default = validate20;
const schema31 = {"$schema":"https://json-schema.org/draft/2020-12/schema","$id":"https://id.uvci.eu/DCC.schema.json","title":"EU DCC","description":"EU Digital Covid Certificate","$comment":"Schema version 1.3.0 rc2 proposal","type":"object","allOf":[{"required":["ver","nam","dob"],"properties":{"ver":{"title":"Schema version","description":"Version of the schema, according to Semantic versioning (ISO, https://semver.org/ version 2.0.0 or newer)","type":"string","pattern":"^\\d+.\\d+.\\d+$","examples":["1.3.0"]},"nam":{"description":"Surname(s), given name(s) - in that order","required":["fnt"],"type":"object","properties":{"fn":{"title":"Surname","description":"The surname or primary name(s) of the person addressed in the certificate","type":"string","maxLength":80,"examples":["d'Červenková Panklová"]},"fnt":{"title":"Standardised surname","description":"The surname(s) of the person, transliterated ICAO 9303","type":"string","pattern":"^[A-Z<]*$","maxLength":80,"examples":["DCERVENKOVA<PANKLOVA"]},"gn":{"title":"Forename","description":"The forename(s) of the person addressed in the certificate","type":"string","maxLength":80,"examples":["Jiřina-Maria Alena"]},"gnt":{"title":"Standardised forename","description":"The forename(s) of the person, transliterated ICAO 9303","type":"string","pattern":"^[A-Z<]*$","maxLength":80,"examples":["JIRINA<MARIA<ALENA"]}}},"dob":{"title":"Date of birth","description":"Date of Birth of the person addressed in the DCC. ISO 8601 date format restricted to range 1900-2099","type":"string","pattern":"^((19|20)\\d\\d(-\\d\\d){0,2}){0,1}$","examples":["1979-04-14","1950","1901-08"]}}},{"oneOf":[{"required":["v"],"properties":{"v":{"description":"Vaccination Group","type":"array","items":{"description":"Vaccination Entry","required":["tg","vp","mp","ma","dn","sd","dt","co","is","ci"],"type":"object","properties":{"tg":{"description":"disease or agent targeted","type":"string","oneOf":[{"const":"840539006"}]},"vp":{"description":"vaccine or prophylaxis","type":"string","oneOf":[{"const":"1119305005"},{"const":"1119349007"},{"const":"J07BX03"}]},"mp":{"description":"vaccine medicinal product","type":"string","oneOf":[{"const":"EU/1/20/1528"},{"const":"EU/1/20/1507"},{"const":"EU/1/21/1529"},{"const":"EU/1/20/1525"},{"const":"CVnCoV"},{"const":"Sputnik-V"},{"const":"Convidecia"},{"const":"EpiVacCorona"},{"const":"BBIBP-CorV"},{"const":"Inactivated-SARS-CoV-2-Vero-Cell"},{"const":"CoronaVac"},{"const":"Covaxin"}]},"ma":{"description":"Marketing Authorization Holder - if no MAH present, then manufacturer","type":"string","oneOf":[{"const":"ORG-100001699"},{"const":"ORG-100030215"},{"const":"ORG-100001417"},{"const":"ORG-100031184"},{"const":"ORG-100006270"},{"const":"ORG-100013793"},{"const":"ORG-100020693"},{"const":"ORG-100010771"},{"const":"ORG-100024420"},{"const":"ORG-100032020"},{"const":"Gamaleya-Research-Institute"},{"const":"Vector-Institute"},{"const":"Sinovac-Biotech"},{"const":"Bharat-Biotech"}]},"dn":{"description":"Dose Number","type":"integer","minimum":1},"sd":{"description":"Total Series of Doses","type":"integer","minimum":1},"dt":{"description":"Date of Vaccination","type":"string","format":"date","$comment":"ISO8601 full-date only"},"co":{"description":"Country of Vaccination","type":"string","pattern":"[A-Z]{1,10}","oneOf":[{"const":"AD"},{"const":"AE"},{"const":"AF"},{"const":"AG"},{"const":"AI"},{"const":"AL"},{"const":"AM"},{"const":"AO"},{"const":"AQ"},{"const":"AR"},{"const":"AS"},{"const":"AT"},{"const":"AU"},{"const":"AW"},{"const":"AX"},{"const":"AZ"},{"const":"BA"},{"const":"BB"},{"const":"BD"},{"const":"BE"},{"const":"BF"},{"const":"BG"},{"const":"BH"},{"const":"BI"},{"const":"BJ"},{"const":"BL"},{"const":"BM"},{"const":"BN"},{"const":"BO"},{"const":"BQ"},{"const":"BR"},{"const":"BS"},{"const":"BT"},{"const":"BV"},{"const":"BW"},{"const":"BY"},{"const":"BZ"},{"const":"CA"},{"const":"CC"},{"const":"CD"},{"const":"CF"},{"const":"CG"},{"const":"CH"},{"const":"CI"},{"const":"CK"},{"const":"CL"},{"const":"CM"},{"const":"CN"},{"const":"CO"},{"const":"CR"},{"const":"CU"},{"const":"CV"},{"const":"CW"},{"const":"CX"},{"const":"CY"},{"const":"CZ"},{"const":"DE"},{"const":"DJ"},{"const":"DK"},{"const":"DM"},{"const":"DO"},{"const":"DZ"},{"const":"EC"},{"const":"EE"},{"const":"EG"},{"const":"EH"},{"const":"ER"},{"const":"ES"},{"const":"ET"},{"const":"FI"},{"const":"FJ"},{"const":"FK"},{"const":"FM"},{"const":"FO"},{"const":"FR"},{"const":"GA"},{"const":"GB"},{"const":"GD"},{"const":"GE"},{"const":"GF"},{"const":"GG"},{"const":"GH"},{"const":"GI"},{"const":"GL"},{"const":"GM"},{"const":"GN"},{"const":"GP"},{"const":"GQ"},{"const":"GR"},{"const":"GS"},{"const":"GT"},{"const":"GU"},{"const":"GW"},{"const":"GY"},{"const":"HK"},{"const":"HM"},{"const":"HN"},{"const":"HR"},{"const":"HT"},{"const":"HU"},{"const":"ID"},{"const":"IE"},{"const":"IL"},{"const":"IM"},{"const":"IN"},{"const":"IO"},{"const":"IQ"},{"const":"IR"},{"const":"IS"},{"const":"IT"},{"const":"JE"},{"const":"JM"},{"const":"JO"},{"const":"JP"},{"const":"KE"},{"const":"KG"},{"const":"KH"},{"const":"KI"},{"const":"KM"},{"const":"KN"},{"const":"KP"},{"const":"KR"},{"const":"KW"},{"const":"KY"},{"const":"KZ"},{"const":"LA"},{"const":"LB"},{"const":"LC"},{"const":"LI"},{"const":"LK"},{"const":"LR"},{"const":"LS"},{"const":"LT"},{"const":"LU"},{"const":"LV"},{"const":"LY"},{"const":"MA"},{"const":"MC"},{"const":"MD"},{"const":"ME"},{"const":"MF"},{"const":"MG"},{"const":"MH"},{"const":"MK"},{"const":"ML"},{"const":"MM"},{"const":"MN"},{"const":"MO"},{"const":"MP"},{"const":"MQ"},{"const":"MR"},{"const":"MS"},{"const":"MT"},{"const":"MU"},{"const":"MV"},{"const":"MW"},{"const":"MX"},{"const":"MY"},{"const":"MZ"},{"const":"NA"},{"const":"NC"},{"const":"NE"},{"const":"NF"},{"const":"NG"},{"const":"NI"},{"const":"NL"},{"const":"NO"},{"const":"NP"},{"const":"NR"},{"const":"NU"},{"const":"NZ"},{"const":"OM"},{"const":"PA"},{"const":"PE"},{"const":"PF"},{"const":"PG"},{"const":"PH"},{"const":"PK"},{"const":"PL"},{"const":"PM"},{"const":"PN"},{"const":"PR"},{"const":"PS"},{"const":"PT"},{"const":"PW"},{"const":"PY"},{"const":"QA"},{"const":"RE"},{"const":"RO"},{"const":"RS"},{"const":"RU"},{"const":"RW"},{"const":"SA"},{"const":"SB"},{"const":"SC"},{"const":"SD"},{"const":"SE"},{"const":"SG"},{"const":"SH"},{"const":"SI"},{"const":"SJ"},{"const":"SK"},{"const":"SL"},{"const":"SM"},{"const":"SN"},{"const":"SO"},{"const":"SR"},{"const":"SS"},{"const":"ST"},{"const":"SV"},{"const":"SX"},{"const":"SY"},{"const":"SZ"},{"const":"TC"},{"const":"TD"},{"const":"TF"},{"const":"TG"},{"const":"TH"},{"const":"TJ"},{"const":"TK"},{"const":"TL"},{"const":"TM"},{"const":"TN"},{"const":"TO"},{"const":"TR"},{"const":"TT"},{"const":"TV"},{"const":"TW"},{"const":"TZ"},{"const":"UA"},{"const":"UG"},{"const":"UM"},{"const":"US"},{"const":"UY"},{"const":"UZ"},{"const":"VA"},{"const":"VC"},{"const":"VE"},{"const":"VG"},{"const":"VI"},{"const":"VN"},{"const":"VU"},{"const":"WF"},{"const":"WS"},{"const":"YE"},{"const":"YT"},{"const":"ZA"},{"const":"ZM"},{"const":"ZW"}]},"is":{"description":"Certificate Issuer","type":"string","maxLength":80},"ci":{"description":"Unique Certificate Identifier: UVCI","type":"string","maxLength":80}}},"minItems":1,"maxItems":1}}},{"required":["t"],"properties":{"t":{"description":"Test Group","type":"array","items":{"description":"Test Entry","required":["tg","tt","sc","tr","tc","co","is","ci"],"type":"object","properties":{"tg":{"description":"EU eHealthNetwork: Value Sets for Digital Covid Certificates. version 1.0, 2021-04-16, section 2.1","type":"string","oneOf":[{"const":"840539006"}]},"tt":{"description":"Type of Test","type":"string","oneOf":[{"const":"LP6464-4"},{"const":"LP217198-3"}]},"nm":{"description":"NAA Test Name","type":"string","maxLength":80},"ma":{"description":"RAT Test name and manufacturer","type":"string","oneOf":[{"const":"308"},{"const":"344"},{"const":"345"},{"const":"768"},{"const":"1065"},{"const":"1097"},{"const":"1114"},{"const":"1144"},{"const":"1162"},{"const":"1173"},{"const":"1180"},{"const":"1190"},{"const":"1199"},{"const":"1215"},{"const":"1218"},{"const":"1223"},{"const":"1225"},{"const":"1232"},{"const":"1236"},{"const":"1242"},{"const":"1244"},{"const":"1246"},{"const":"1253"},{"const":"1256"},{"const":"1263"},{"const":"1266"},{"const":"1267"},{"const":"1268"},{"const":"1271"},{"const":"1278"},{"const":"1295"},{"const":"1296"},{"const":"1304"},{"const":"1319"},{"const":"1331"},{"const":"1333"},{"const":"1341"},{"const":"1343"},{"const":"1360"},{"const":"1363"},{"const":"1365"},{"const":"1375"},{"const":"1392"},{"const":"1420"},{"const":"1437"},{"const":"1443"},{"const":"1456"},{"const":"1466"},{"const":"1468"},{"const":"1481"},{"const":"1484"},{"const":"1489"},{"const":"1490"},{"const":"1574"},{"const":"1604"},{"const":"1606"},{"const":"1654"},{"const":"1736"},{"const":"1747"},{"const":"1763"},{"const":"1764"},{"const":"1767"},{"const":"1769"},{"const":"1815"},{"const":"1822"},{"const":"1833"},{"const":"1844"},{"const":"1870"},{"const":"1884"},{"const":"1906"},{"const":"1919"},{"const":"1934"},{"const":"2010"},{"const":"2017"}]},"sc":{"description":"Date/Time of Sample Collection","type":"string","format":"date-time"},"tr":{"description":"Test Result","type":"string","oneOf":[{"const":"260373001"},{"const":"260415000"}]},"tc":{"description":"Testing Centre","type":"string","maxLength":80},"co":{"description":"Country of Test","type":"string","pattern":"[A-Z]{1,10}","oneOf":[{"const":"AD"},{"const":"AE"},{"const":"AF"},{"const":"AG"},{"const":"AI"},{"const":"AL"},{"const":"AM"},{"const":"AO"},{"const":"AQ"},{"const":"AR"},{"const":"AS"},{"const":"AT"},{"const":"AU"},{"const":"AW"},{"const":"AX"},{"const":"AZ"},{"const":"BA"},{"const":"BB"},{"const":"BD"},{"const":"BE"},{"const":"BF"},{"const":"BG"},{"const":"BH"},{"const":"BI"},{"const":"BJ"},{"const":"BL"},{"const":"BM"},{"const":"BN"},{"const":"BO"},{"const":"BQ"},{"const":"BR"},{"const":"BS"},{"const":"BT"},{"const":"BV"},{"const":"BW"},{"const":"BY"},{"const":"BZ"},{"const":"CA"},{"const":"CC"},{"const":"CD"},{"const":"CF"},{"const":"CG"},{"const":"CH"},{"const":"CI"},{"const":"CK"},{"const":"CL"},{"const":"CM"},{"const":"CN"},{"const":"CO"},{"const":"CR"},{"const":"CU"},{"const":"CV"},{"const":"CW"},{"const":"CX"},{"const":"CY"},{"const":"CZ"},{"const":"DE"},{"const":"DJ"},{"const":"DK"},{"const":"DM"},{"const":"DO"},{"const":"DZ"},{"const":"EC"},{"const":"EE"},{"const":"EG"},{"const":"EH"},{"const":"ER"},{"const":"ES"},{"const":"ET"},{"const":"FI"},{"const":"FJ"},{"const":"FK"},{"const":"FM"},{"const":"FO"},{"const":"FR"},{"const":"GA"},{"const":"GB"},{"const":"GD"},{"const":"GE"},{"const":"GF"},{"const":"GG"},{"const":"GH"},{"const":"GI"},{"const":"GL"},{"const":"GM"},{"const":"GN"},{"const":"GP"},{"const":"GQ"},{"const":"GR"},{"const":"GS"},{"const":"GT"},{"const":"GU"},{"const":"GW"},{"const":"GY"},{"const":"HK"},{"const":"HM"},{"const":"HN"},{"const":"HR"},{"const":"HT"},{"const":"HU"},{"const":"ID"},{"const":"IE"},{"const":"IL"},{"const":"IM"},{"const":"IN"},{"const":"IO"},{"const":"IQ"},{"const":"IR"},{"const":"IS"},{"const":"IT"},{"const":"JE"},{"const":"JM"},{"const":"JO"},{"const":"JP"},{"const":"KE"},{"const":"KG"},{"const":"KH"},{"const":"KI"},{"const":"KM"},{"const":"KN"},{"const":"KP"},{"const":"KR"},{"const":"KW"},{"const":"KY"},{"const":"KZ"},{"const":"LA"},{"const":"LB"},{"const":"LC"},{"const":"LI"},{"const":"LK"},{"const":"LR"},{"const":"LS"},{"const":"LT"},{"const":"LU"},{"const":"LV"},{"const":"LY"},{"const":"MA"},{"const":"MC"},{"const":"MD"},{"const":"ME"},{"const":"MF"},{"const":"MG"},{"const":"MH"},{"const":"MK"},{"const":"ML"},{"const":"MM"},{"const":"MN"},{"const":"MO"},{"const":"MP"},{"const":"MQ"},{"const":"MR"},{"const":"MS"},{"const":"MT"},{"const":"MU"},{"const":"MV"},{"const":"MW"},{"const":"MX"},{"const":"MY"},{"const":"MZ"},{"const":"NA"},{"const":"NC"},{"const":"NE"},{"const":"NF"},{"const":"NG"},{"const":"NI"},{"const":"NL"},{"const":"NO"},{"const":"NP"},{"const":"NR"},{"const":"NU"},{"const":"NZ"},{"const":"OM"},{"const":"PA"},{"const":"PE"},{"const":"PF"},{"const":"PG"},{"const":"PH"},{"const":"PK"},{"const":"PL"},{"const":"PM"},{"const":"PN"},{"const":"PR"},{"const":"PS"},{"const":"PT"},{"const":"PW"},{"const":"PY"},{"const":"QA"},{"const":"RE"},{"const":"RO"},{"const":"RS"},{"const":"RU"},{"const":"RW"},{"const":"SA"},{"const":"SB"},{"const":"SC"},{"const":"SD"},{"const":"SE"},{"const":"SG"},{"const":"SH"},{"const":"SI"},{"const":"SJ"},{"const":"SK"},{"const":"SL"},{"const":"SM"},{"const":"SN"},{"const":"SO"},{"const":"SR"},{"const":"SS"},{"const":"ST"},{"const":"SV"},{"const":"SX"},{"const":"SY"},{"const":"SZ"},{"const":"TC"},{"const":"TD"},{"const":"TF"},{"const":"TG"},{"const":"TH"},{"const":"TJ"},{"const":"TK"},{"const":"TL"},{"const":"TM"},{"const":"TN"},{"const":"TO"},{"const":"TR"},{"const":"TT"},{"const":"TV"},{"const":"TW"},{"const":"TZ"},{"const":"UA"},{"const":"UG"},{"const":"UM"},{"const":"US"},{"const":"UY"},{"const":"UZ"},{"const":"VA"},{"const":"VC"},{"const":"VE"},{"const":"VG"},{"const":"VI"},{"const":"VN"},{"const":"VU"},{"const":"WF"},{"const":"WS"},{"const":"YE"},{"const":"YT"},{"const":"ZA"},{"const":"ZM"},{"const":"ZW"}]},"is":{"description":"Certificate Issuer","type":"string","maxLength":80},"ci":{"description":"Unique Certificate Identifier, UVCI","type":"string","maxLength":80}}},"minItems":1,"maxItems":1}}},{"required":["r"],"properties":{"r":{"description":"Recovery Group","type":"array","items":{"description":"Recovery Entry","required":["tg","fr","co","is","df","du","ci"],"type":"object","properties":{"tg":{"description":"EU eHealthNetwork: Value Sets for Digital Covid Certificates. version 1.0, 2021-04-16, section 2.1","type":"string","oneOf":[{"const":"840539006"}]},"fr":{"description":"ISO 8601 complete date of first positive NAA test result","type":"string","format":"date"},"co":{"description":"Country of Test","type":"string","pattern":"[A-Z]{1,10}","oneOf":[{"const":"AD"},{"const":"AE"},{"const":"AF"},{"const":"AG"},{"const":"AI"},{"const":"AL"},{"const":"AM"},{"const":"AO"},{"const":"AQ"},{"const":"AR"},{"const":"AS"},{"const":"AT"},{"const":"AU"},{"const":"AW"},{"const":"AX"},{"const":"AZ"},{"const":"BA"},{"const":"BB"},{"const":"BD"},{"const":"BE"},{"const":"BF"},{"const":"BG"},{"const":"BH"},{"const":"BI"},{"const":"BJ"},{"const":"BL"},{"const":"BM"},{"const":"BN"},{"const":"BO"},{"const":"BQ"},{"const":"BR"},{"const":"BS"},{"const":"BT"},{"const":"BV"},{"const":"BW"},{"const":"BY"},{"const":"BZ"},{"const":"CA"},{"const":"CC"},{"const":"CD"},{"const":"CF"},{"const":"CG"},{"const":"CH"},{"const":"CI"},{"const":"CK"},{"const":"CL"},{"const":"CM"},{"const":"CN"},{"const":"CO"},{"const":"CR"},{"const":"CU"},{"const":"CV"},{"const":"CW"},{"const":"CX"},{"const":"CY"},{"const":"CZ"},{"const":"DE"},{"const":"DJ"},{"const":"DK"},{"const":"DM"},{"const":"DO"},{"const":"DZ"},{"const":"EC"},{"const":"EE"},{"const":"EG"},{"const":"EH"},{"const":"ER"},{"const":"ES"},{"const":"ET"},{"const":"FI"},{"const":"FJ"},{"const":"FK"},{"const":"FM"},{"const":"FO"},{"const":"FR"},{"const":"GA"},{"const":"GB"},{"const":"GD"},{"const":"GE"},{"const":"GF"},{"const":"GG"},{"const":"GH"},{"const":"GI"},{"const":"GL"},{"const":"GM"},{"const":"GN"},{"const":"GP"},{"const":"GQ"},{"const":"GR"},{"const":"GS"},{"const":"GT"},{"const":"GU"},{"const":"GW"},{"const":"GY"},{"const":"HK"},{"const":"HM"},{"const":"HN"},{"const":"HR"},{"const":"HT"},{"const":"HU"},{"const":"ID"},{"const":"IE"},{"const":"IL"},{"const":"IM"},{"const":"IN"},{"const":"IO"},{"const":"IQ"},{"const":"IR"},{"const":"IS"},{"const":"IT"},{"const":"JE"},{"const":"JM"},{"const":"JO"},{"const":"JP"},{"const":"KE"},{"const":"KG"},{"const":"KH"},{"const":"KI"},{"const":"KM"},{"const":"KN"},{"const":"KP"},{"const":"KR"},{"const":"KW"},{"const":"KY"},{"const":"KZ"},{"const":"LA"},{"const":"LB"},{"const":"LC"},{"const":"LI"},{"const":"LK"},{"const":"LR"},{"const":"LS"},{"const":"LT"},{"const":"LU"},{"const":"LV"},{"const":"LY"},{"const":"MA"},{"const":"MC"},{"const":"MD"},{"const":"ME"},{"const":"MF"},{"const":"MG"},{"const":"MH"},{"const":"MK"},{"const":"ML"},{"const":"MM"},{"const":"MN"},{"const":"MO"},{"const":"MP"},{"const":"MQ"},{"const":"MR"},{"const":"MS"},{"const":"MT"},{"const":"MU"},{"const":"MV"},{"const":"MW"},{"const":"MX"},{"const":"MY"},{"const":"MZ"},{"const":"NA"},{"const":"NC"},{"const":"NE"},{"const":"NF"},{"const":"NG"},{"const":"NI"},{"const":"NL"},{"const":"NO"},{"const":"NP"},{"const":"NR"},{"const":"NU"},{"const":"NZ"},{"const":"OM"},{"const":"PA"},{"const":"PE"},{"const":"PF"},{"const":"PG"},{"const":"PH"},{"const":"PK"},{"const":"PL"},{"const":"PM"},{"const":"PN"},{"const":"PR"},{"const":"PS"},{"const":"PT"},{"const":"PW"},{"const":"PY"},{"const":"QA"},{"const":"RE"},{"const":"RO"},{"const":"RS"},{"const":"RU"},{"const":"RW"},{"const":"SA"},{"const":"SB"},{"const":"SC"},{"const":"SD"},{"const":"SE"},{"const":"SG"},{"const":"SH"},{"const":"SI"},{"const":"SJ"},{"const":"SK"},{"const":"SL"},{"const":"SM"},{"const":"SN"},{"const":"SO"},{"const":"SR"},{"const":"SS"},{"const":"ST"},{"const":"SV"},{"const":"SX"},{"const":"SY"},{"const":"SZ"},{"const":"TC"},{"const":"TD"},{"const":"TF"},{"const":"TG"},{"const":"TH"},{"const":"TJ"},{"const":"TK"},{"const":"TL"},{"const":"TM"},{"const":"TN"},{"const":"TO"},{"const":"TR"},{"const":"TT"},{"const":"TV"},{"const":"TW"},{"const":"TZ"},{"const":"UA"},{"const":"UG"},{"const":"UM"},{"const":"US"},{"const":"UY"},{"const":"UZ"},{"const":"VA"},{"const":"VC"},{"const":"VE"},{"const":"VG"},{"const":"VI"},{"const":"VN"},{"const":"VU"},{"const":"WF"},{"const":"WS"},{"const":"YE"},{"const":"YT"},{"const":"ZA"},{"const":"ZM"},{"const":"ZW"}]},"is":{"description":"Certificate Issuer","type":"string","maxLength":80},"df":{"description":"ISO 8601 complete date: Certificate Valid From","type":"string","format":"date"},"du":{"description":"ISO 8601 complete date: Certificate Valid Until","type":"string","format":"date"},"ci":{"description":"Unique Certificate Identifier, UVCI","type":"string","maxLength":80}}},"minItems":1,"maxItems":1}}}]}]};
const pattern4 = new RegExp("^\\d+.\\d+.\\d+$", "u");
const pattern5 = new RegExp("^[A-Z<]*$", "u");
const pattern7 = new RegExp("^((19|20)\\d\\d(-\\d\\d){0,2}){0,1}$", "u");
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
if(!(data && typeof data == "object" && !Array.isArray(data))){
const err0 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object",schema:schema31.type,parentSchema:schema31,data};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.ver === undefined){
const err1 = {instancePath,schemaPath:"#/allOf/0/required",keyword:"required",params:{missingProperty: "ver"},message:"must have required property '"+"ver"+"'",schema:schema31.allOf[0].required,parentSchema:schema31.allOf[0],data};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.nam === undefined){
const err2 = {instancePath,schemaPath:"#/allOf/0/required",keyword:"required",params:{missingProperty: "nam"},message:"must have required property '"+"nam"+"'",schema:schema31.allOf[0].required,parentSchema:schema31.allOf[0],data};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
if(data.dob === undefined){
const err3 = {instancePath,schemaPath:"#/allOf/0/required",keyword:"required",params:{missingProperty: "dob"},message:"must have required property '"+"dob"+"'",schema:schema31.allOf[0].required,parentSchema:schema31.allOf[0],data};
if(vErrors === null){
vErrors = [err3];
}
else {
vErrors.push(err3);
}
errors++;
}
if(data.ver !== undefined){
let data0 = data.ver;
if(typeof data0 === "string"){
if(!pattern4.test(data0)){
const err4 = {instancePath:instancePath+"/ver",schemaPath:"#/allOf/0/properties/ver/pattern",keyword:"pattern",params:{pattern: "^\\d+.\\d+.\\d+$"},message:"must match pattern \""+"^\\d+.\\d+.\\d+$"+"\"",schema:"^\\d+.\\d+.\\d+$",parentSchema:schema31.allOf[0].properties.ver,data:data0};
if(vErrors === null){
vErrors = [err4];
}
else {
vErrors.push(err4);
}
errors++;
}
}
else {
const err5 = {instancePath:instancePath+"/ver",schemaPath:"#/allOf/0/properties/ver/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.allOf[0].properties.ver.type,parentSchema:schema31.allOf[0].properties.ver,data:data0};
if(vErrors === null){
vErrors = [err5];
}
else {
vErrors.push(err5);
}
errors++;
}
}
if(data.nam !== undefined){
let data1 = data.nam;
if(data1 && typeof data1 == "object" && !Array.isArray(data1)){
if(data1.fnt === undefined){
const err6 = {instancePath:instancePath+"/nam",schemaPath:"#/allOf/0/properties/nam/required",keyword:"required",params:{missingProperty: "fnt"},message:"must have required property '"+"fnt"+"'",schema:schema31.allOf[0].properties.nam.required,parentSchema:schema31.allOf[0].properties.nam,data:data1};
if(vErrors === null){
vErrors = [err6];
}
else {
vErrors.push(err6);
}
errors++;
}
if(data1.fn !== undefined){
let data2 = data1.fn;
if(typeof data2 === "string"){
if(func3(data2) > 80){
const err7 = {instancePath:instancePath+"/nam/fn",schemaPath:"#/allOf/0/properties/nam/properties/fn/maxLength",keyword:"maxLength",params:{limit: 80},message:"must NOT have more than 80 characters",schema:80,parentSchema:schema31.allOf[0].properties.nam.properties.fn,data:data2};
if(vErrors === null){
vErrors = [err7];
}
else {
vErrors.push(err7);
}
errors++;
}
}
else {
const err8 = {instancePath:instancePath+"/nam/fn",schemaPath:"#/allOf/0/properties/nam/properties/fn/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.allOf[0].properties.nam.properties.fn.type,parentSchema:schema31.allOf[0].properties.nam.properties.fn,data:data2};
if(vErrors === null){
vErrors = [err8];
}
else {
vErrors.push(err8);
}
errors++;
}
}
if(data1.fnt !== undefined){
let data3 = data1.fnt;
if(typeof data3 === "string"){
if(func3(data3) > 80){
const err9 = {instancePath:instancePath+"/nam/fnt",schemaPath:"#/allOf/0/properties/nam/properties/fnt/maxLength",keyword:"maxLength",params:{limit: 80},message:"must NOT have more than 80 characters",schema:80,parentSchema:schema31.allOf[0].properties.nam.properties.fnt,data:data3};
if(vErrors === null){
vErrors = [err9];
}
else {
vErrors.push(err9);
}
errors++;
}
if(!pattern5.test(data3)){
const err10 = {instancePath:instancePath+"/nam/fnt",schemaPath:"#/allOf/0/properties/nam/properties/fnt/pattern",keyword:"pattern",params:{pattern: "^[A-Z<]*$"},message:"must match pattern \""+"^[A-Z<]*$"+"\"",schema:"^[A-Z<]*$",parentSchema:schema31.allOf[0].properties.nam.properties.fnt,data:data3};
if(vErrors === null){
vErrors = [err10];
}
else {
vErrors.push(err10);
}
errors++;
}
}
else {
const err11 = {instancePath:instancePath+"/nam/fnt",schemaPath:"#/allOf/0/properties/nam/properties/fnt/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.allOf[0].properties.nam.properties.fnt.type,parentSchema:schema31.allOf[0].properties.nam.properties.fnt,data:data3};
if(vErrors === null){
vErrors = [err11];
}
else {
vErrors.push(err11);
}
errors++;
}
}
if(data1.gn !== undefined){
let data4 = data1.gn;
if(typeof data4 === "string"){
if(func3(data4) > 80){
const err12 = {instancePath:instancePath+"/nam/gn",schemaPath:"#/allOf/0/properties/nam/properties/gn/maxLength",keyword:"maxLength",params:{limit: 80},message:"must NOT have more than 80 characters",schema:80,parentSchema:schema31.allOf[0].properties.nam.properties.gn,data:data4};
if(vErrors === null){
vErrors = [err12];
}
else {
vErrors.push(err12);
}
errors++;
}
}
else {
const err13 = {instancePath:instancePath+"/nam/gn",schemaPath:"#/allOf/0/properties/nam/properties/gn/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.allOf[0].properties.nam.properties.gn.type,parentSchema:schema31.allOf[0].properties.nam.properties.gn,data:data4};
if(vErrors === null){
vErrors = [err13];
}
else {
vErrors.push(err13);
}
errors++;
}
}
if(data1.gnt !== undefined){
let data5 = data1.gnt;
if(typeof data5 === "string"){
if(func3(data5) > 80){
const err14 = {instancePath:instancePath+"/nam/gnt",schemaPath:"#/allOf/0/properties/nam/properties/gnt/maxLength",keyword:"maxLength",params:{limit: 80},message:"must NOT have more than 80 characters",schema:80,parentSchema:schema31.allOf[0].properties.nam.properties.gnt,data:data5};
if(vErrors === null){
vErrors = [err14];
}
else {
vErrors.push(err14);
}
errors++;
}
if(!pattern5.test(data5)){
const err15 = {instancePath:instancePath+"/nam/gnt",schemaPath:"#/allOf/0/properties/nam/properties/gnt/pattern",keyword:"pattern",params:{pattern: "^[A-Z<]*$"},message:"must match pattern \""+"^[A-Z<]*$"+"\"",schema:"^[A-Z<]*$",parentSchema:schema31.allOf[0].properties.nam.properties.gnt,data:data5};
if(vErrors === null){
vErrors = [err15];
}
else {
vErrors.push(err15);
}
errors++;
}
}
else {
const err16 = {instancePath:instancePath+"/nam/gnt",schemaPath:"#/allOf/0/properties/nam/properties/gnt/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.allOf[0].properties.nam.properties.gnt.type,parentSchema:schema31.allOf[0].properties.nam.properties.gnt,data:data5};
if(vErrors === null){
vErrors = [err16];
}
else {
vErrors.push(err16);
}
errors++;
}
}
}
else {
const err17 = {instancePath:instancePath+"/nam",schemaPath:"#/allOf/0/properties/nam/type",keyword:"type",params:{type: "object"},message:"must be object",schema:schema31.allOf[0].properties.nam.type,parentSchema:schema31.allOf[0].properties.nam,data:data1};
if(vErrors === null){
vErrors = [err17];
}
else {
vErrors.push(err17);
}
errors++;
}
}
if(data.dob !== undefined){
let data6 = data.dob;
if(typeof data6 === "string"){
if(!pattern7.test(data6)){
const err18 = {instancePath:instancePath+"/dob",schemaPath:"#/allOf/0/properties/dob/pattern",keyword:"pattern",params:{pattern: "^((19|20)\\d\\d(-\\d\\d){0,2}){0,1}$"},message:"must match pattern \""+"^((19|20)\\d\\d(-\\d\\d){0,2}){0,1}$"+"\"",schema:"^((19|20)\\d\\d(-\\d\\d){0,2}){0,1}$",parentSchema:schema31.allOf[0].properties.dob,data:data6};
if(vErrors === null){
vErrors = [err18];
}
else {
vErrors.push(err18);
}
errors++;
}
}
else {
const err19 = {instancePath:instancePath+"/dob",schemaPath:"#/allOf/0/properties/dob/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.allOf[0].properties.dob.type,parentSchema:schema31.allOf[0].properties.dob,data:data6};
if(vErrors === null){
vErrors = [err19];
}
else {
vErrors.push(err19);
}
errors++;
}
}
}
const _errs18 = errors;
let valid3 = false;
let passing0 = null;
const _errs19 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.v === undefined){
const err20 = {instancePath,schemaPath:"#/allOf/1/oneOf/0/required",keyword:"required",params:{missingProperty: "v"},message:"must have required property '"+"v"+"'",schema:schema31.allOf[1].oneOf[0].required,parentSchema:schema31.allOf[1].oneOf[0],data};
if(vErrors === null){
vErrors = [err20];
}
else {
vErrors.push(err20);
}
errors++;
}
if(data.v !== undefined){
let data7 = data.v;
if(Array.isArray(data7)){
if(data7.length > 1){
const err21 = {instancePath:instancePath+"/v",schemaPath:"#/allOf/1/oneOf/0/properties/v/maxItems",keyword:"maxItems",params:{limit: 1},message:"must NOT have more than 1 items",schema:1,parentSchema:schema31.allOf[1].oneOf[0].properties.v,data:data7};
if(vErrors === null){
vErrors = [err21];
}
else {
vErrors.push(err21);
}
errors++;
}
if(data7.length < 1){
const err22 = {instancePath:instancePath+"/v",schemaPath:"#/allOf/1/oneOf/0/properties/v/minItems",keyword:"minItems",params:{limit: 1},message:"must NOT have fewer than 1 items",schema:1,parentSchema:schema31.allOf[1].oneOf[0].properties.v,data:data7};
if(vErrors === null){
vErrors = [err22];
}
else {
vErrors.push(err22);
}
errors++;
}
const len0 = data7.length;
for(let i0=0; i0<len0; i0++){
let data8 = data7[i0];
if(data8 && typeof data8 == "object" && !Array.isArray(data8)){
if(data8.tg === undefined){
const err23 = {instancePath:instancePath+"/v/" + i0,schemaPath:"#/allOf/1/oneOf/0/properties/v/items/required",keyword:"required",params:{missingProperty: "tg"},message:"must have required property '"+"tg"+"'",schema:schema31.allOf[1].oneOf[0].properties.v.items.required,parentSchema:schema31.allOf[1].oneOf[0].properties.v.items,data:data8};
if(vErrors === null){
vErrors = [err23];
}
else {
vErrors.push(err23);
}
errors++;
}
if(data8.vp === undefined){
const err24 = {instancePath:instancePath+"/v/" + i0,schemaPath:"#/allOf/1/oneOf/0/properties/v/items/required",keyword:"required",params:{missingProperty: "vp"},message:"must have required property '"+"vp"+"'",schema:schema31.allOf[1].oneOf[0].properties.v.items.required,parentSchema:schema31.allOf[1].oneOf[0].properties.v.items,data:data8};
if(vErrors === null){
vErrors = [err24];
}
else {
vErrors.push(err24);
}
errors++;
}
if(data8.mp === undefined){
const err25 = {instancePath:instancePath+"/v/" + i0,schemaPath:"#/allOf/1/oneOf/0/properties/v/items/required",keyword:"required",params:{missingProperty: "mp"},message:"must have required property '"+"mp"+"'",schema:schema31.allOf[1].oneOf[0].properties.v.items.required,parentSchema:schema31.allOf[1].oneOf[0].properties.v.items,data:data8};
if(vErrors === null){
vErrors = [err25];
}
else {
vErrors.push(err25);
}
errors++;
}
if(data8.ma === undefined){
const err26 = {instancePath:instancePath+"/v/" + i0,schemaPath:"#/allOf/1/oneOf/0/properties/v/items/required",keyword:"required",params:{missingProperty: "ma"},message:"must have required property '"+"ma"+"'",schema:schema31.allOf[1].oneOf[0].properties.v.items.required,parentSchema:schema31.allOf[1].oneOf[0].properties.v.items,data:data8};
if(vErrors === null){
vErrors = [err26];
}
else {
vErrors.push(err26);
}
errors++;
}
if(data8.dn === undefined){
const err27 = {instancePath:instancePath+"/v/" + i0,schemaPath:"#/allOf/1/oneOf/0/properties/v/items/required",keyword:"required",params:{missingProperty: "dn"},message:"must have required property '"+"dn"+"'",schema:schema31.allOf[1].oneOf[0].properties.v.items.required,parentSchema:schema31.allOf[1].oneOf[0].properties.v.items,data:data8};
if(vErrors === null){
vErrors = [err27];
}
else {
vErrors.push(err27);
}
errors++;
}
if(data8.sd === undefined){
const err28 = {instancePath:instancePath+"/v/" + i0,schemaPath:"#/allOf/1/oneOf/0/properties/v/items/required",keyword:"required",params:{missingProperty: "sd"},message:"must have required property '"+"sd"+"'",schema:schema31.allOf[1].oneOf[0].properties.v.items.required,parentSchema:schema31.allOf[1].oneOf[0].properties.v.items,data:data8};
if(vErrors === null){
vErrors = [err28];
}
else {
vErrors.push(err28);
}
errors++;
}
if(data8.dt === undefined){
const err29 = {instancePath:instancePath+"/v/" + i0,schemaPath:"#/allOf/1/oneOf/0/properties/v/items/required",keyword:"required",params:{missingProperty: "dt"},message:"must have required property '"+"dt"+"'",schema:schema31.allOf[1].oneOf[0].properties.v.items.required,parentSchema:schema31.allOf[1].oneOf[0].properties.v.items,data:data8};
if(vErrors === null){
vErrors = [err29];
}
else {
vErrors.push(err29);
}
errors++;
}
if(data8.co === undefined){
const err30 = {instancePath:instancePath+"/v/" + i0,schemaPath:"#/allOf/1/oneOf/0/properties/v/items/required",keyword:"required",params:{missingProperty: "co"},message:"must have required property '"+"co"+"'",schema:schema31.allOf[1].oneOf[0].properties.v.items.required,parentSchema:schema31.allOf[1].oneOf[0].properties.v.items,data:data8};
if(vErrors === null){
vErrors = [err30];
}
else {
vErrors.push(err30);
}
errors++;
}
if(data8.is === undefined){
const err31 = {instancePath:instancePath+"/v/" + i0,schemaPath:"#/allOf/1/oneOf/0/properties/v/items/required",keyword:"required",params:{missingProperty: "is"},message:"must have required property '"+"is"+"'",schema:schema31.allOf[1].oneOf[0].properties.v.items.required,parentSchema:schema31.allOf[1].oneOf[0].properties.v.items,data:data8};
if(vErrors === null){
vErrors = [err31];
}
else {
vErrors.push(err31);
}
errors++;
}
if(data8.ci === undefined){
const err32 = {instancePath:instancePath+"/v/" + i0,schemaPath:"#/allOf/1/oneOf/0/properties/v/items/required",keyword:"required",params:{missingProperty: "ci"},message:"must have required property '"+"ci"+"'",schema:schema31.allOf[1].oneOf[0].properties.v.items.required,parentSchema:schema31.allOf[1].oneOf[0].properties.v.items,data:data8};
if(vErrors === null){
vErrors = [err32];
}
else {
vErrors.push(err32);
}
errors++;
}
if(data8.tg !== undefined){
let data9 = data8.tg;
if(typeof data9 !== "string"){
const err33 = {instancePath:instancePath+"/v/" + i0+"/tg",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/tg/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.allOf[1].oneOf[0].properties.v.items.properties.tg.type,parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.tg,data:data9};
if(vErrors === null){
vErrors = [err33];
}
else {
vErrors.push(err33);
}
errors++;
}
const _errs26 = errors;
let valid8 = false;
let passing1 = null;
const _errs27 = errors;
if("840539006" !== data9){
const err34 = {instancePath:instancePath+"/v/" + i0+"/tg",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/tg/oneOf/0/const",keyword:"const",params:{allowedValue: "840539006"},message:"must be equal to constant",schema:"840539006",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.tg.oneOf[0],data:data9};
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
valid8 = true;
passing1 = 0;
}
if(!valid8){
const err35 = {instancePath:instancePath+"/v/" + i0+"/tg",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/tg/oneOf",keyword:"oneOf",params:{passingSchemas: passing1},message:"must match exactly one schema in oneOf",schema:schema31.allOf[1].oneOf[0].properties.v.items.properties.tg.oneOf,parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.tg,data:data9};
if(vErrors === null){
vErrors = [err35];
}
else {
vErrors.push(err35);
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
if(data8.vp !== undefined){
let data10 = data8.vp;
if(typeof data10 !== "string"){
const err36 = {instancePath:instancePath+"/v/" + i0+"/vp",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/vp/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.allOf[1].oneOf[0].properties.v.items.properties.vp.type,parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.vp,data:data10};
if(vErrors === null){
vErrors = [err36];
}
else {
vErrors.push(err36);
}
errors++;
}
const _errs30 = errors;
let valid9 = false;
let passing2 = null;
const _errs31 = errors;
if("1119305005" !== data10){
const err37 = {instancePath:instancePath+"/v/" + i0+"/vp",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/vp/oneOf/0/const",keyword:"const",params:{allowedValue: "1119305005"},message:"must be equal to constant",schema:"1119305005",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.vp.oneOf[0],data:data10};
if(vErrors === null){
vErrors = [err37];
}
else {
vErrors.push(err37);
}
errors++;
}
var _valid2 = _errs31 === errors;
if(_valid2){
valid9 = true;
passing2 = 0;
}
const _errs32 = errors;
if("1119349007" !== data10){
const err38 = {instancePath:instancePath+"/v/" + i0+"/vp",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/vp/oneOf/1/const",keyword:"const",params:{allowedValue: "1119349007"},message:"must be equal to constant",schema:"1119349007",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.vp.oneOf[1],data:data10};
if(vErrors === null){
vErrors = [err38];
}
else {
vErrors.push(err38);
}
errors++;
}
var _valid2 = _errs32 === errors;
if(_valid2 && valid9){
valid9 = false;
passing2 = [passing2, 1];
}
else {
if(_valid2){
valid9 = true;
passing2 = 1;
}
const _errs33 = errors;
if("J07BX03" !== data10){
const err39 = {instancePath:instancePath+"/v/" + i0+"/vp",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/vp/oneOf/2/const",keyword:"const",params:{allowedValue: "J07BX03"},message:"must be equal to constant",schema:"J07BX03",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.vp.oneOf[2],data:data10};
if(vErrors === null){
vErrors = [err39];
}
else {
vErrors.push(err39);
}
errors++;
}
var _valid2 = _errs33 === errors;
if(_valid2 && valid9){
valid9 = false;
passing2 = [passing2, 2];
}
else {
if(_valid2){
valid9 = true;
passing2 = 2;
}
}
}
if(!valid9){
const err40 = {instancePath:instancePath+"/v/" + i0+"/vp",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/vp/oneOf",keyword:"oneOf",params:{passingSchemas: passing2},message:"must match exactly one schema in oneOf",schema:schema31.allOf[1].oneOf[0].properties.v.items.properties.vp.oneOf,parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.vp,data:data10};
if(vErrors === null){
vErrors = [err40];
}
else {
vErrors.push(err40);
}
errors++;
}
else {
errors = _errs30;
if(vErrors !== null){
if(_errs30){
vErrors.length = _errs30;
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
const err41 = {instancePath:instancePath+"/v/" + i0+"/mp",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/mp/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.allOf[1].oneOf[0].properties.v.items.properties.mp.type,parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.mp,data:data11};
if(vErrors === null){
vErrors = [err41];
}
else {
vErrors.push(err41);
}
errors++;
}
const _errs36 = errors;
let valid10 = false;
let passing3 = null;
const _errs37 = errors;
if("EU/1/20/1528" !== data11){
const err42 = {instancePath:instancePath+"/v/" + i0+"/mp",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/mp/oneOf/0/const",keyword:"const",params:{allowedValue: "EU/1/20/1528"},message:"must be equal to constant",schema:"EU/1/20/1528",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.mp.oneOf[0],data:data11};
if(vErrors === null){
vErrors = [err42];
}
else {
vErrors.push(err42);
}
errors++;
}
var _valid3 = _errs37 === errors;
if(_valid3){
valid10 = true;
passing3 = 0;
}
const _errs38 = errors;
if("EU/1/20/1507" !== data11){
const err43 = {instancePath:instancePath+"/v/" + i0+"/mp",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/mp/oneOf/1/const",keyword:"const",params:{allowedValue: "EU/1/20/1507"},message:"must be equal to constant",schema:"EU/1/20/1507",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.mp.oneOf[1],data:data11};
if(vErrors === null){
vErrors = [err43];
}
else {
vErrors.push(err43);
}
errors++;
}
var _valid3 = _errs38 === errors;
if(_valid3 && valid10){
valid10 = false;
passing3 = [passing3, 1];
}
else {
if(_valid3){
valid10 = true;
passing3 = 1;
}
const _errs39 = errors;
if("EU/1/21/1529" !== data11){
const err44 = {instancePath:instancePath+"/v/" + i0+"/mp",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/mp/oneOf/2/const",keyword:"const",params:{allowedValue: "EU/1/21/1529"},message:"must be equal to constant",schema:"EU/1/21/1529",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.mp.oneOf[2],data:data11};
if(vErrors === null){
vErrors = [err44];
}
else {
vErrors.push(err44);
}
errors++;
}
var _valid3 = _errs39 === errors;
if(_valid3 && valid10){
valid10 = false;
passing3 = [passing3, 2];
}
else {
if(_valid3){
valid10 = true;
passing3 = 2;
}
const _errs40 = errors;
if("EU/1/20/1525" !== data11){
const err45 = {instancePath:instancePath+"/v/" + i0+"/mp",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/mp/oneOf/3/const",keyword:"const",params:{allowedValue: "EU/1/20/1525"},message:"must be equal to constant",schema:"EU/1/20/1525",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.mp.oneOf[3],data:data11};
if(vErrors === null){
vErrors = [err45];
}
else {
vErrors.push(err45);
}
errors++;
}
var _valid3 = _errs40 === errors;
if(_valid3 && valid10){
valid10 = false;
passing3 = [passing3, 3];
}
else {
if(_valid3){
valid10 = true;
passing3 = 3;
}
const _errs41 = errors;
if("CVnCoV" !== data11){
const err46 = {instancePath:instancePath+"/v/" + i0+"/mp",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/mp/oneOf/4/const",keyword:"const",params:{allowedValue: "CVnCoV"},message:"must be equal to constant",schema:"CVnCoV",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.mp.oneOf[4],data:data11};
if(vErrors === null){
vErrors = [err46];
}
else {
vErrors.push(err46);
}
errors++;
}
var _valid3 = _errs41 === errors;
if(_valid3 && valid10){
valid10 = false;
passing3 = [passing3, 4];
}
else {
if(_valid3){
valid10 = true;
passing3 = 4;
}
const _errs42 = errors;
if("Sputnik-V" !== data11){
const err47 = {instancePath:instancePath+"/v/" + i0+"/mp",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/mp/oneOf/5/const",keyword:"const",params:{allowedValue: "Sputnik-V"},message:"must be equal to constant",schema:"Sputnik-V",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.mp.oneOf[5],data:data11};
if(vErrors === null){
vErrors = [err47];
}
else {
vErrors.push(err47);
}
errors++;
}
var _valid3 = _errs42 === errors;
if(_valid3 && valid10){
valid10 = false;
passing3 = [passing3, 5];
}
else {
if(_valid3){
valid10 = true;
passing3 = 5;
}
const _errs43 = errors;
if("Convidecia" !== data11){
const err48 = {instancePath:instancePath+"/v/" + i0+"/mp",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/mp/oneOf/6/const",keyword:"const",params:{allowedValue: "Convidecia"},message:"must be equal to constant",schema:"Convidecia",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.mp.oneOf[6],data:data11};
if(vErrors === null){
vErrors = [err48];
}
else {
vErrors.push(err48);
}
errors++;
}
var _valid3 = _errs43 === errors;
if(_valid3 && valid10){
valid10 = false;
passing3 = [passing3, 6];
}
else {
if(_valid3){
valid10 = true;
passing3 = 6;
}
const _errs44 = errors;
if("EpiVacCorona" !== data11){
const err49 = {instancePath:instancePath+"/v/" + i0+"/mp",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/mp/oneOf/7/const",keyword:"const",params:{allowedValue: "EpiVacCorona"},message:"must be equal to constant",schema:"EpiVacCorona",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.mp.oneOf[7],data:data11};
if(vErrors === null){
vErrors = [err49];
}
else {
vErrors.push(err49);
}
errors++;
}
var _valid3 = _errs44 === errors;
if(_valid3 && valid10){
valid10 = false;
passing3 = [passing3, 7];
}
else {
if(_valid3){
valid10 = true;
passing3 = 7;
}
const _errs45 = errors;
if("BBIBP-CorV" !== data11){
const err50 = {instancePath:instancePath+"/v/" + i0+"/mp",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/mp/oneOf/8/const",keyword:"const",params:{allowedValue: "BBIBP-CorV"},message:"must be equal to constant",schema:"BBIBP-CorV",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.mp.oneOf[8],data:data11};
if(vErrors === null){
vErrors = [err50];
}
else {
vErrors.push(err50);
}
errors++;
}
var _valid3 = _errs45 === errors;
if(_valid3 && valid10){
valid10 = false;
passing3 = [passing3, 8];
}
else {
if(_valid3){
valid10 = true;
passing3 = 8;
}
const _errs46 = errors;
if("Inactivated-SARS-CoV-2-Vero-Cell" !== data11){
const err51 = {instancePath:instancePath+"/v/" + i0+"/mp",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/mp/oneOf/9/const",keyword:"const",params:{allowedValue: "Inactivated-SARS-CoV-2-Vero-Cell"},message:"must be equal to constant",schema:"Inactivated-SARS-CoV-2-Vero-Cell",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.mp.oneOf[9],data:data11};
if(vErrors === null){
vErrors = [err51];
}
else {
vErrors.push(err51);
}
errors++;
}
var _valid3 = _errs46 === errors;
if(_valid3 && valid10){
valid10 = false;
passing3 = [passing3, 9];
}
else {
if(_valid3){
valid10 = true;
passing3 = 9;
}
const _errs47 = errors;
if("CoronaVac" !== data11){
const err52 = {instancePath:instancePath+"/v/" + i0+"/mp",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/mp/oneOf/10/const",keyword:"const",params:{allowedValue: "CoronaVac"},message:"must be equal to constant",schema:"CoronaVac",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.mp.oneOf[10],data:data11};
if(vErrors === null){
vErrors = [err52];
}
else {
vErrors.push(err52);
}
errors++;
}
var _valid3 = _errs47 === errors;
if(_valid3 && valid10){
valid10 = false;
passing3 = [passing3, 10];
}
else {
if(_valid3){
valid10 = true;
passing3 = 10;
}
const _errs48 = errors;
if("Covaxin" !== data11){
const err53 = {instancePath:instancePath+"/v/" + i0+"/mp",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/mp/oneOf/11/const",keyword:"const",params:{allowedValue: "Covaxin"},message:"must be equal to constant",schema:"Covaxin",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.mp.oneOf[11],data:data11};
if(vErrors === null){
vErrors = [err53];
}
else {
vErrors.push(err53);
}
errors++;
}
var _valid3 = _errs48 === errors;
if(_valid3 && valid10){
valid10 = false;
passing3 = [passing3, 11];
}
else {
if(_valid3){
valid10 = true;
passing3 = 11;
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
if(!valid10){
const err54 = {instancePath:instancePath+"/v/" + i0+"/mp",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/mp/oneOf",keyword:"oneOf",params:{passingSchemas: passing3},message:"must match exactly one schema in oneOf",schema:schema31.allOf[1].oneOf[0].properties.v.items.properties.mp.oneOf,parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.mp,data:data11};
if(vErrors === null){
vErrors = [err54];
}
else {
vErrors.push(err54);
}
errors++;
}
else {
errors = _errs36;
if(vErrors !== null){
if(_errs36){
vErrors.length = _errs36;
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
const err55 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/ma/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.allOf[1].oneOf[0].properties.v.items.properties.ma.type,parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.ma,data:data12};
if(vErrors === null){
vErrors = [err55];
}
else {
vErrors.push(err55);
}
errors++;
}
const _errs51 = errors;
let valid11 = false;
let passing4 = null;
const _errs52 = errors;
if("ORG-100001699" !== data12){
const err56 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/ma/oneOf/0/const",keyword:"const",params:{allowedValue: "ORG-100001699"},message:"must be equal to constant",schema:"ORG-100001699",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.ma.oneOf[0],data:data12};
if(vErrors === null){
vErrors = [err56];
}
else {
vErrors.push(err56);
}
errors++;
}
var _valid4 = _errs52 === errors;
if(_valid4){
valid11 = true;
passing4 = 0;
}
const _errs53 = errors;
if("ORG-100030215" !== data12){
const err57 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/ma/oneOf/1/const",keyword:"const",params:{allowedValue: "ORG-100030215"},message:"must be equal to constant",schema:"ORG-100030215",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.ma.oneOf[1],data:data12};
if(vErrors === null){
vErrors = [err57];
}
else {
vErrors.push(err57);
}
errors++;
}
var _valid4 = _errs53 === errors;
if(_valid4 && valid11){
valid11 = false;
passing4 = [passing4, 1];
}
else {
if(_valid4){
valid11 = true;
passing4 = 1;
}
const _errs54 = errors;
if("ORG-100001417" !== data12){
const err58 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/ma/oneOf/2/const",keyword:"const",params:{allowedValue: "ORG-100001417"},message:"must be equal to constant",schema:"ORG-100001417",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.ma.oneOf[2],data:data12};
if(vErrors === null){
vErrors = [err58];
}
else {
vErrors.push(err58);
}
errors++;
}
var _valid4 = _errs54 === errors;
if(_valid4 && valid11){
valid11 = false;
passing4 = [passing4, 2];
}
else {
if(_valid4){
valid11 = true;
passing4 = 2;
}
const _errs55 = errors;
if("ORG-100031184" !== data12){
const err59 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/ma/oneOf/3/const",keyword:"const",params:{allowedValue: "ORG-100031184"},message:"must be equal to constant",schema:"ORG-100031184",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.ma.oneOf[3],data:data12};
if(vErrors === null){
vErrors = [err59];
}
else {
vErrors.push(err59);
}
errors++;
}
var _valid4 = _errs55 === errors;
if(_valid4 && valid11){
valid11 = false;
passing4 = [passing4, 3];
}
else {
if(_valid4){
valid11 = true;
passing4 = 3;
}
const _errs56 = errors;
if("ORG-100006270" !== data12){
const err60 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/ma/oneOf/4/const",keyword:"const",params:{allowedValue: "ORG-100006270"},message:"must be equal to constant",schema:"ORG-100006270",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.ma.oneOf[4],data:data12};
if(vErrors === null){
vErrors = [err60];
}
else {
vErrors.push(err60);
}
errors++;
}
var _valid4 = _errs56 === errors;
if(_valid4 && valid11){
valid11 = false;
passing4 = [passing4, 4];
}
else {
if(_valid4){
valid11 = true;
passing4 = 4;
}
const _errs57 = errors;
if("ORG-100013793" !== data12){
const err61 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/ma/oneOf/5/const",keyword:"const",params:{allowedValue: "ORG-100013793"},message:"must be equal to constant",schema:"ORG-100013793",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.ma.oneOf[5],data:data12};
if(vErrors === null){
vErrors = [err61];
}
else {
vErrors.push(err61);
}
errors++;
}
var _valid4 = _errs57 === errors;
if(_valid4 && valid11){
valid11 = false;
passing4 = [passing4, 5];
}
else {
if(_valid4){
valid11 = true;
passing4 = 5;
}
const _errs58 = errors;
if("ORG-100020693" !== data12){
const err62 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/ma/oneOf/6/const",keyword:"const",params:{allowedValue: "ORG-100020693"},message:"must be equal to constant",schema:"ORG-100020693",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.ma.oneOf[6],data:data12};
if(vErrors === null){
vErrors = [err62];
}
else {
vErrors.push(err62);
}
errors++;
}
var _valid4 = _errs58 === errors;
if(_valid4 && valid11){
valid11 = false;
passing4 = [passing4, 6];
}
else {
if(_valid4){
valid11 = true;
passing4 = 6;
}
const _errs59 = errors;
if("ORG-100010771" !== data12){
const err63 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/ma/oneOf/7/const",keyword:"const",params:{allowedValue: "ORG-100010771"},message:"must be equal to constant",schema:"ORG-100010771",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.ma.oneOf[7],data:data12};
if(vErrors === null){
vErrors = [err63];
}
else {
vErrors.push(err63);
}
errors++;
}
var _valid4 = _errs59 === errors;
if(_valid4 && valid11){
valid11 = false;
passing4 = [passing4, 7];
}
else {
if(_valid4){
valid11 = true;
passing4 = 7;
}
const _errs60 = errors;
if("ORG-100024420" !== data12){
const err64 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/ma/oneOf/8/const",keyword:"const",params:{allowedValue: "ORG-100024420"},message:"must be equal to constant",schema:"ORG-100024420",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.ma.oneOf[8],data:data12};
if(vErrors === null){
vErrors = [err64];
}
else {
vErrors.push(err64);
}
errors++;
}
var _valid4 = _errs60 === errors;
if(_valid4 && valid11){
valid11 = false;
passing4 = [passing4, 8];
}
else {
if(_valid4){
valid11 = true;
passing4 = 8;
}
const _errs61 = errors;
if("ORG-100032020" !== data12){
const err65 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/ma/oneOf/9/const",keyword:"const",params:{allowedValue: "ORG-100032020"},message:"must be equal to constant",schema:"ORG-100032020",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.ma.oneOf[9],data:data12};
if(vErrors === null){
vErrors = [err65];
}
else {
vErrors.push(err65);
}
errors++;
}
var _valid4 = _errs61 === errors;
if(_valid4 && valid11){
valid11 = false;
passing4 = [passing4, 9];
}
else {
if(_valid4){
valid11 = true;
passing4 = 9;
}
const _errs62 = errors;
if("Gamaleya-Research-Institute" !== data12){
const err66 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/ma/oneOf/10/const",keyword:"const",params:{allowedValue: "Gamaleya-Research-Institute"},message:"must be equal to constant",schema:"Gamaleya-Research-Institute",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.ma.oneOf[10],data:data12};
if(vErrors === null){
vErrors = [err66];
}
else {
vErrors.push(err66);
}
errors++;
}
var _valid4 = _errs62 === errors;
if(_valid4 && valid11){
valid11 = false;
passing4 = [passing4, 10];
}
else {
if(_valid4){
valid11 = true;
passing4 = 10;
}
const _errs63 = errors;
if("Vector-Institute" !== data12){
const err67 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/ma/oneOf/11/const",keyword:"const",params:{allowedValue: "Vector-Institute"},message:"must be equal to constant",schema:"Vector-Institute",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.ma.oneOf[11],data:data12};
if(vErrors === null){
vErrors = [err67];
}
else {
vErrors.push(err67);
}
errors++;
}
var _valid4 = _errs63 === errors;
if(_valid4 && valid11){
valid11 = false;
passing4 = [passing4, 11];
}
else {
if(_valid4){
valid11 = true;
passing4 = 11;
}
const _errs64 = errors;
if("Sinovac-Biotech" !== data12){
const err68 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/ma/oneOf/12/const",keyword:"const",params:{allowedValue: "Sinovac-Biotech"},message:"must be equal to constant",schema:"Sinovac-Biotech",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.ma.oneOf[12],data:data12};
if(vErrors === null){
vErrors = [err68];
}
else {
vErrors.push(err68);
}
errors++;
}
var _valid4 = _errs64 === errors;
if(_valid4 && valid11){
valid11 = false;
passing4 = [passing4, 12];
}
else {
if(_valid4){
valid11 = true;
passing4 = 12;
}
const _errs65 = errors;
if("Bharat-Biotech" !== data12){
const err69 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/ma/oneOf/13/const",keyword:"const",params:{allowedValue: "Bharat-Biotech"},message:"must be equal to constant",schema:"Bharat-Biotech",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.ma.oneOf[13],data:data12};
if(vErrors === null){
vErrors = [err69];
}
else {
vErrors.push(err69);
}
errors++;
}
var _valid4 = _errs65 === errors;
if(_valid4 && valid11){
valid11 = false;
passing4 = [passing4, 13];
}
else {
if(_valid4){
valid11 = true;
passing4 = 13;
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
const err70 = {instancePath:instancePath+"/v/" + i0+"/ma",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/ma/oneOf",keyword:"oneOf",params:{passingSchemas: passing4},message:"must match exactly one schema in oneOf",schema:schema31.allOf[1].oneOf[0].properties.v.items.properties.ma.oneOf,parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.ma,data:data12};
if(vErrors === null){
vErrors = [err70];
}
else {
vErrors.push(err70);
}
errors++;
}
else {
errors = _errs51;
if(vErrors !== null){
if(_errs51){
vErrors.length = _errs51;
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
const err71 = {instancePath:instancePath+"/v/" + i0+"/dn",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/dn/type",keyword:"type",params:{type: "integer"},message:"must be integer",schema:schema31.allOf[1].oneOf[0].properties.v.items.properties.dn.type,parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.dn,data:data13};
if(vErrors === null){
vErrors = [err71];
}
else {
vErrors.push(err71);
}
errors++;
}
if((typeof data13 == "number") && (isFinite(data13))){
if(data13 < 1 || isNaN(data13)){
const err72 = {instancePath:instancePath+"/v/" + i0+"/dn",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/dn/minimum",keyword:"minimum",params:{comparison: ">=", limit: 1},message:"must be >= 1",schema:1,parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.dn,data:data13};
if(vErrors === null){
vErrors = [err72];
}
else {
vErrors.push(err72);
}
errors++;
}
}
}
if(data8.sd !== undefined){
let data14 = data8.sd;
if(!(((typeof data14 == "number") && (!(data14 % 1) && !isNaN(data14))) && (isFinite(data14)))){
const err73 = {instancePath:instancePath+"/v/" + i0+"/sd",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/sd/type",keyword:"type",params:{type: "integer"},message:"must be integer",schema:schema31.allOf[1].oneOf[0].properties.v.items.properties.sd.type,parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.sd,data:data14};
if(vErrors === null){
vErrors = [err73];
}
else {
vErrors.push(err73);
}
errors++;
}
if((typeof data14 == "number") && (isFinite(data14))){
if(data14 < 1 || isNaN(data14)){
const err74 = {instancePath:instancePath+"/v/" + i0+"/sd",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/sd/minimum",keyword:"minimum",params:{comparison: ">=", limit: 1},message:"must be >= 1",schema:1,parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.sd,data:data14};
if(vErrors === null){
vErrors = [err74];
}
else {
vErrors.push(err74);
}
errors++;
}
}
}
if(data8.dt !== undefined){
let data15 = data8.dt;
if(typeof data15 === "string"){
if(!(formats0.validate(data15))){
const err75 = {instancePath:instancePath+"/v/" + i0+"/dt",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/dt/format",keyword:"format",params:{format: "date"},message:"must match format \""+"date"+"\"",schema:"date",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.dt,data:data15};
if(vErrors === null){
vErrors = [err75];
}
else {
vErrors.push(err75);
}
errors++;
}
}
else {
const err76 = {instancePath:instancePath+"/v/" + i0+"/dt",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/dt/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.allOf[1].oneOf[0].properties.v.items.properties.dt.type,parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.dt,data:data15};
if(vErrors === null){
vErrors = [err76];
}
else {
vErrors.push(err76);
}
errors++;
}
}
if(data8.co !== undefined){
let data16 = data8.co;
const _errs75 = errors;
let valid12 = false;
let passing5 = null;
const _errs76 = errors;
if("AD" !== data16){
const err77 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/0/const",keyword:"const",params:{allowedValue: "AD"},message:"must be equal to constant",schema:"AD",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[0],data:data16};
if(vErrors === null){
vErrors = [err77];
}
else {
vErrors.push(err77);
}
errors++;
}
var _valid5 = _errs76 === errors;
if(_valid5){
valid12 = true;
passing5 = 0;
}
const _errs77 = errors;
if("AE" !== data16){
const err78 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/1/const",keyword:"const",params:{allowedValue: "AE"},message:"must be equal to constant",schema:"AE",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[1],data:data16};
if(vErrors === null){
vErrors = [err78];
}
else {
vErrors.push(err78);
}
errors++;
}
var _valid5 = _errs77 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 1];
}
else {
if(_valid5){
valid12 = true;
passing5 = 1;
}
const _errs78 = errors;
if("AF" !== data16){
const err79 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/2/const",keyword:"const",params:{allowedValue: "AF"},message:"must be equal to constant",schema:"AF",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[2],data:data16};
if(vErrors === null){
vErrors = [err79];
}
else {
vErrors.push(err79);
}
errors++;
}
var _valid5 = _errs78 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 2];
}
else {
if(_valid5){
valid12 = true;
passing5 = 2;
}
const _errs79 = errors;
if("AG" !== data16){
const err80 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/3/const",keyword:"const",params:{allowedValue: "AG"},message:"must be equal to constant",schema:"AG",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[3],data:data16};
if(vErrors === null){
vErrors = [err80];
}
else {
vErrors.push(err80);
}
errors++;
}
var _valid5 = _errs79 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 3];
}
else {
if(_valid5){
valid12 = true;
passing5 = 3;
}
const _errs80 = errors;
if("AI" !== data16){
const err81 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/4/const",keyword:"const",params:{allowedValue: "AI"},message:"must be equal to constant",schema:"AI",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[4],data:data16};
if(vErrors === null){
vErrors = [err81];
}
else {
vErrors.push(err81);
}
errors++;
}
var _valid5 = _errs80 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 4];
}
else {
if(_valid5){
valid12 = true;
passing5 = 4;
}
const _errs81 = errors;
if("AL" !== data16){
const err82 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/5/const",keyword:"const",params:{allowedValue: "AL"},message:"must be equal to constant",schema:"AL",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[5],data:data16};
if(vErrors === null){
vErrors = [err82];
}
else {
vErrors.push(err82);
}
errors++;
}
var _valid5 = _errs81 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 5];
}
else {
if(_valid5){
valid12 = true;
passing5 = 5;
}
const _errs82 = errors;
if("AM" !== data16){
const err83 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/6/const",keyword:"const",params:{allowedValue: "AM"},message:"must be equal to constant",schema:"AM",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[6],data:data16};
if(vErrors === null){
vErrors = [err83];
}
else {
vErrors.push(err83);
}
errors++;
}
var _valid5 = _errs82 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 6];
}
else {
if(_valid5){
valid12 = true;
passing5 = 6;
}
const _errs83 = errors;
if("AO" !== data16){
const err84 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/7/const",keyword:"const",params:{allowedValue: "AO"},message:"must be equal to constant",schema:"AO",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[7],data:data16};
if(vErrors === null){
vErrors = [err84];
}
else {
vErrors.push(err84);
}
errors++;
}
var _valid5 = _errs83 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 7];
}
else {
if(_valid5){
valid12 = true;
passing5 = 7;
}
const _errs84 = errors;
if("AQ" !== data16){
const err85 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/8/const",keyword:"const",params:{allowedValue: "AQ"},message:"must be equal to constant",schema:"AQ",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[8],data:data16};
if(vErrors === null){
vErrors = [err85];
}
else {
vErrors.push(err85);
}
errors++;
}
var _valid5 = _errs84 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 8];
}
else {
if(_valid5){
valid12 = true;
passing5 = 8;
}
const _errs85 = errors;
if("AR" !== data16){
const err86 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/9/const",keyword:"const",params:{allowedValue: "AR"},message:"must be equal to constant",schema:"AR",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[9],data:data16};
if(vErrors === null){
vErrors = [err86];
}
else {
vErrors.push(err86);
}
errors++;
}
var _valid5 = _errs85 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 9];
}
else {
if(_valid5){
valid12 = true;
passing5 = 9;
}
const _errs86 = errors;
if("AS" !== data16){
const err87 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/10/const",keyword:"const",params:{allowedValue: "AS"},message:"must be equal to constant",schema:"AS",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[10],data:data16};
if(vErrors === null){
vErrors = [err87];
}
else {
vErrors.push(err87);
}
errors++;
}
var _valid5 = _errs86 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 10];
}
else {
if(_valid5){
valid12 = true;
passing5 = 10;
}
const _errs87 = errors;
if("AT" !== data16){
const err88 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/11/const",keyword:"const",params:{allowedValue: "AT"},message:"must be equal to constant",schema:"AT",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[11],data:data16};
if(vErrors === null){
vErrors = [err88];
}
else {
vErrors.push(err88);
}
errors++;
}
var _valid5 = _errs87 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 11];
}
else {
if(_valid5){
valid12 = true;
passing5 = 11;
}
const _errs88 = errors;
if("AU" !== data16){
const err89 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/12/const",keyword:"const",params:{allowedValue: "AU"},message:"must be equal to constant",schema:"AU",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[12],data:data16};
if(vErrors === null){
vErrors = [err89];
}
else {
vErrors.push(err89);
}
errors++;
}
var _valid5 = _errs88 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 12];
}
else {
if(_valid5){
valid12 = true;
passing5 = 12;
}
const _errs89 = errors;
if("AW" !== data16){
const err90 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/13/const",keyword:"const",params:{allowedValue: "AW"},message:"must be equal to constant",schema:"AW",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[13],data:data16};
if(vErrors === null){
vErrors = [err90];
}
else {
vErrors.push(err90);
}
errors++;
}
var _valid5 = _errs89 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 13];
}
else {
if(_valid5){
valid12 = true;
passing5 = 13;
}
const _errs90 = errors;
if("AX" !== data16){
const err91 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/14/const",keyword:"const",params:{allowedValue: "AX"},message:"must be equal to constant",schema:"AX",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[14],data:data16};
if(vErrors === null){
vErrors = [err91];
}
else {
vErrors.push(err91);
}
errors++;
}
var _valid5 = _errs90 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 14];
}
else {
if(_valid5){
valid12 = true;
passing5 = 14;
}
const _errs91 = errors;
if("AZ" !== data16){
const err92 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/15/const",keyword:"const",params:{allowedValue: "AZ"},message:"must be equal to constant",schema:"AZ",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[15],data:data16};
if(vErrors === null){
vErrors = [err92];
}
else {
vErrors.push(err92);
}
errors++;
}
var _valid5 = _errs91 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 15];
}
else {
if(_valid5){
valid12 = true;
passing5 = 15;
}
const _errs92 = errors;
if("BA" !== data16){
const err93 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/16/const",keyword:"const",params:{allowedValue: "BA"},message:"must be equal to constant",schema:"BA",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[16],data:data16};
if(vErrors === null){
vErrors = [err93];
}
else {
vErrors.push(err93);
}
errors++;
}
var _valid5 = _errs92 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 16];
}
else {
if(_valid5){
valid12 = true;
passing5 = 16;
}
const _errs93 = errors;
if("BB" !== data16){
const err94 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/17/const",keyword:"const",params:{allowedValue: "BB"},message:"must be equal to constant",schema:"BB",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[17],data:data16};
if(vErrors === null){
vErrors = [err94];
}
else {
vErrors.push(err94);
}
errors++;
}
var _valid5 = _errs93 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 17];
}
else {
if(_valid5){
valid12 = true;
passing5 = 17;
}
const _errs94 = errors;
if("BD" !== data16){
const err95 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/18/const",keyword:"const",params:{allowedValue: "BD"},message:"must be equal to constant",schema:"BD",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[18],data:data16};
if(vErrors === null){
vErrors = [err95];
}
else {
vErrors.push(err95);
}
errors++;
}
var _valid5 = _errs94 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 18];
}
else {
if(_valid5){
valid12 = true;
passing5 = 18;
}
const _errs95 = errors;
if("BE" !== data16){
const err96 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/19/const",keyword:"const",params:{allowedValue: "BE"},message:"must be equal to constant",schema:"BE",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[19],data:data16};
if(vErrors === null){
vErrors = [err96];
}
else {
vErrors.push(err96);
}
errors++;
}
var _valid5 = _errs95 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 19];
}
else {
if(_valid5){
valid12 = true;
passing5 = 19;
}
const _errs96 = errors;
if("BF" !== data16){
const err97 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/20/const",keyword:"const",params:{allowedValue: "BF"},message:"must be equal to constant",schema:"BF",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[20],data:data16};
if(vErrors === null){
vErrors = [err97];
}
else {
vErrors.push(err97);
}
errors++;
}
var _valid5 = _errs96 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 20];
}
else {
if(_valid5){
valid12 = true;
passing5 = 20;
}
const _errs97 = errors;
if("BG" !== data16){
const err98 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/21/const",keyword:"const",params:{allowedValue: "BG"},message:"must be equal to constant",schema:"BG",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[21],data:data16};
if(vErrors === null){
vErrors = [err98];
}
else {
vErrors.push(err98);
}
errors++;
}
var _valid5 = _errs97 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 21];
}
else {
if(_valid5){
valid12 = true;
passing5 = 21;
}
const _errs98 = errors;
if("BH" !== data16){
const err99 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/22/const",keyword:"const",params:{allowedValue: "BH"},message:"must be equal to constant",schema:"BH",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[22],data:data16};
if(vErrors === null){
vErrors = [err99];
}
else {
vErrors.push(err99);
}
errors++;
}
var _valid5 = _errs98 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 22];
}
else {
if(_valid5){
valid12 = true;
passing5 = 22;
}
const _errs99 = errors;
if("BI" !== data16){
const err100 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/23/const",keyword:"const",params:{allowedValue: "BI"},message:"must be equal to constant",schema:"BI",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[23],data:data16};
if(vErrors === null){
vErrors = [err100];
}
else {
vErrors.push(err100);
}
errors++;
}
var _valid5 = _errs99 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 23];
}
else {
if(_valid5){
valid12 = true;
passing5 = 23;
}
const _errs100 = errors;
if("BJ" !== data16){
const err101 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/24/const",keyword:"const",params:{allowedValue: "BJ"},message:"must be equal to constant",schema:"BJ",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[24],data:data16};
if(vErrors === null){
vErrors = [err101];
}
else {
vErrors.push(err101);
}
errors++;
}
var _valid5 = _errs100 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 24];
}
else {
if(_valid5){
valid12 = true;
passing5 = 24;
}
const _errs101 = errors;
if("BL" !== data16){
const err102 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/25/const",keyword:"const",params:{allowedValue: "BL"},message:"must be equal to constant",schema:"BL",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[25],data:data16};
if(vErrors === null){
vErrors = [err102];
}
else {
vErrors.push(err102);
}
errors++;
}
var _valid5 = _errs101 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 25];
}
else {
if(_valid5){
valid12 = true;
passing5 = 25;
}
const _errs102 = errors;
if("BM" !== data16){
const err103 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/26/const",keyword:"const",params:{allowedValue: "BM"},message:"must be equal to constant",schema:"BM",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[26],data:data16};
if(vErrors === null){
vErrors = [err103];
}
else {
vErrors.push(err103);
}
errors++;
}
var _valid5 = _errs102 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 26];
}
else {
if(_valid5){
valid12 = true;
passing5 = 26;
}
const _errs103 = errors;
if("BN" !== data16){
const err104 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/27/const",keyword:"const",params:{allowedValue: "BN"},message:"must be equal to constant",schema:"BN",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[27],data:data16};
if(vErrors === null){
vErrors = [err104];
}
else {
vErrors.push(err104);
}
errors++;
}
var _valid5 = _errs103 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 27];
}
else {
if(_valid5){
valid12 = true;
passing5 = 27;
}
const _errs104 = errors;
if("BO" !== data16){
const err105 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/28/const",keyword:"const",params:{allowedValue: "BO"},message:"must be equal to constant",schema:"BO",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[28],data:data16};
if(vErrors === null){
vErrors = [err105];
}
else {
vErrors.push(err105);
}
errors++;
}
var _valid5 = _errs104 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 28];
}
else {
if(_valid5){
valid12 = true;
passing5 = 28;
}
const _errs105 = errors;
if("BQ" !== data16){
const err106 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/29/const",keyword:"const",params:{allowedValue: "BQ"},message:"must be equal to constant",schema:"BQ",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[29],data:data16};
if(vErrors === null){
vErrors = [err106];
}
else {
vErrors.push(err106);
}
errors++;
}
var _valid5 = _errs105 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 29];
}
else {
if(_valid5){
valid12 = true;
passing5 = 29;
}
const _errs106 = errors;
if("BR" !== data16){
const err107 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/30/const",keyword:"const",params:{allowedValue: "BR"},message:"must be equal to constant",schema:"BR",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[30],data:data16};
if(vErrors === null){
vErrors = [err107];
}
else {
vErrors.push(err107);
}
errors++;
}
var _valid5 = _errs106 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 30];
}
else {
if(_valid5){
valid12 = true;
passing5 = 30;
}
const _errs107 = errors;
if("BS" !== data16){
const err108 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/31/const",keyword:"const",params:{allowedValue: "BS"},message:"must be equal to constant",schema:"BS",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[31],data:data16};
if(vErrors === null){
vErrors = [err108];
}
else {
vErrors.push(err108);
}
errors++;
}
var _valid5 = _errs107 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 31];
}
else {
if(_valid5){
valid12 = true;
passing5 = 31;
}
const _errs108 = errors;
if("BT" !== data16){
const err109 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/32/const",keyword:"const",params:{allowedValue: "BT"},message:"must be equal to constant",schema:"BT",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[32],data:data16};
if(vErrors === null){
vErrors = [err109];
}
else {
vErrors.push(err109);
}
errors++;
}
var _valid5 = _errs108 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 32];
}
else {
if(_valid5){
valid12 = true;
passing5 = 32;
}
const _errs109 = errors;
if("BV" !== data16){
const err110 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/33/const",keyword:"const",params:{allowedValue: "BV"},message:"must be equal to constant",schema:"BV",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[33],data:data16};
if(vErrors === null){
vErrors = [err110];
}
else {
vErrors.push(err110);
}
errors++;
}
var _valid5 = _errs109 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 33];
}
else {
if(_valid5){
valid12 = true;
passing5 = 33;
}
const _errs110 = errors;
if("BW" !== data16){
const err111 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/34/const",keyword:"const",params:{allowedValue: "BW"},message:"must be equal to constant",schema:"BW",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[34],data:data16};
if(vErrors === null){
vErrors = [err111];
}
else {
vErrors.push(err111);
}
errors++;
}
var _valid5 = _errs110 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 34];
}
else {
if(_valid5){
valid12 = true;
passing5 = 34;
}
const _errs111 = errors;
if("BY" !== data16){
const err112 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/35/const",keyword:"const",params:{allowedValue: "BY"},message:"must be equal to constant",schema:"BY",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[35],data:data16};
if(vErrors === null){
vErrors = [err112];
}
else {
vErrors.push(err112);
}
errors++;
}
var _valid5 = _errs111 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 35];
}
else {
if(_valid5){
valid12 = true;
passing5 = 35;
}
const _errs112 = errors;
if("BZ" !== data16){
const err113 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/36/const",keyword:"const",params:{allowedValue: "BZ"},message:"must be equal to constant",schema:"BZ",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[36],data:data16};
if(vErrors === null){
vErrors = [err113];
}
else {
vErrors.push(err113);
}
errors++;
}
var _valid5 = _errs112 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 36];
}
else {
if(_valid5){
valid12 = true;
passing5 = 36;
}
const _errs113 = errors;
if("CA" !== data16){
const err114 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/37/const",keyword:"const",params:{allowedValue: "CA"},message:"must be equal to constant",schema:"CA",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[37],data:data16};
if(vErrors === null){
vErrors = [err114];
}
else {
vErrors.push(err114);
}
errors++;
}
var _valid5 = _errs113 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 37];
}
else {
if(_valid5){
valid12 = true;
passing5 = 37;
}
const _errs114 = errors;
if("CC" !== data16){
const err115 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/38/const",keyword:"const",params:{allowedValue: "CC"},message:"must be equal to constant",schema:"CC",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[38],data:data16};
if(vErrors === null){
vErrors = [err115];
}
else {
vErrors.push(err115);
}
errors++;
}
var _valid5 = _errs114 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 38];
}
else {
if(_valid5){
valid12 = true;
passing5 = 38;
}
const _errs115 = errors;
if("CD" !== data16){
const err116 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/39/const",keyword:"const",params:{allowedValue: "CD"},message:"must be equal to constant",schema:"CD",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[39],data:data16};
if(vErrors === null){
vErrors = [err116];
}
else {
vErrors.push(err116);
}
errors++;
}
var _valid5 = _errs115 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 39];
}
else {
if(_valid5){
valid12 = true;
passing5 = 39;
}
const _errs116 = errors;
if("CF" !== data16){
const err117 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/40/const",keyword:"const",params:{allowedValue: "CF"},message:"must be equal to constant",schema:"CF",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[40],data:data16};
if(vErrors === null){
vErrors = [err117];
}
else {
vErrors.push(err117);
}
errors++;
}
var _valid5 = _errs116 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 40];
}
else {
if(_valid5){
valid12 = true;
passing5 = 40;
}
const _errs117 = errors;
if("CG" !== data16){
const err118 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/41/const",keyword:"const",params:{allowedValue: "CG"},message:"must be equal to constant",schema:"CG",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[41],data:data16};
if(vErrors === null){
vErrors = [err118];
}
else {
vErrors.push(err118);
}
errors++;
}
var _valid5 = _errs117 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 41];
}
else {
if(_valid5){
valid12 = true;
passing5 = 41;
}
const _errs118 = errors;
if("CH" !== data16){
const err119 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/42/const",keyword:"const",params:{allowedValue: "CH"},message:"must be equal to constant",schema:"CH",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[42],data:data16};
if(vErrors === null){
vErrors = [err119];
}
else {
vErrors.push(err119);
}
errors++;
}
var _valid5 = _errs118 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 42];
}
else {
if(_valid5){
valid12 = true;
passing5 = 42;
}
const _errs119 = errors;
if("CI" !== data16){
const err120 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/43/const",keyword:"const",params:{allowedValue: "CI"},message:"must be equal to constant",schema:"CI",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[43],data:data16};
if(vErrors === null){
vErrors = [err120];
}
else {
vErrors.push(err120);
}
errors++;
}
var _valid5 = _errs119 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 43];
}
else {
if(_valid5){
valid12 = true;
passing5 = 43;
}
const _errs120 = errors;
if("CK" !== data16){
const err121 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/44/const",keyword:"const",params:{allowedValue: "CK"},message:"must be equal to constant",schema:"CK",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[44],data:data16};
if(vErrors === null){
vErrors = [err121];
}
else {
vErrors.push(err121);
}
errors++;
}
var _valid5 = _errs120 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 44];
}
else {
if(_valid5){
valid12 = true;
passing5 = 44;
}
const _errs121 = errors;
if("CL" !== data16){
const err122 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/45/const",keyword:"const",params:{allowedValue: "CL"},message:"must be equal to constant",schema:"CL",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[45],data:data16};
if(vErrors === null){
vErrors = [err122];
}
else {
vErrors.push(err122);
}
errors++;
}
var _valid5 = _errs121 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 45];
}
else {
if(_valid5){
valid12 = true;
passing5 = 45;
}
const _errs122 = errors;
if("CM" !== data16){
const err123 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/46/const",keyword:"const",params:{allowedValue: "CM"},message:"must be equal to constant",schema:"CM",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[46],data:data16};
if(vErrors === null){
vErrors = [err123];
}
else {
vErrors.push(err123);
}
errors++;
}
var _valid5 = _errs122 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 46];
}
else {
if(_valid5){
valid12 = true;
passing5 = 46;
}
const _errs123 = errors;
if("CN" !== data16){
const err124 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/47/const",keyword:"const",params:{allowedValue: "CN"},message:"must be equal to constant",schema:"CN",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[47],data:data16};
if(vErrors === null){
vErrors = [err124];
}
else {
vErrors.push(err124);
}
errors++;
}
var _valid5 = _errs123 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 47];
}
else {
if(_valid5){
valid12 = true;
passing5 = 47;
}
const _errs124 = errors;
if("CO" !== data16){
const err125 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/48/const",keyword:"const",params:{allowedValue: "CO"},message:"must be equal to constant",schema:"CO",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[48],data:data16};
if(vErrors === null){
vErrors = [err125];
}
else {
vErrors.push(err125);
}
errors++;
}
var _valid5 = _errs124 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 48];
}
else {
if(_valid5){
valid12 = true;
passing5 = 48;
}
const _errs125 = errors;
if("CR" !== data16){
const err126 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/49/const",keyword:"const",params:{allowedValue: "CR"},message:"must be equal to constant",schema:"CR",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[49],data:data16};
if(vErrors === null){
vErrors = [err126];
}
else {
vErrors.push(err126);
}
errors++;
}
var _valid5 = _errs125 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 49];
}
else {
if(_valid5){
valid12 = true;
passing5 = 49;
}
const _errs126 = errors;
if("CU" !== data16){
const err127 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/50/const",keyword:"const",params:{allowedValue: "CU"},message:"must be equal to constant",schema:"CU",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[50],data:data16};
if(vErrors === null){
vErrors = [err127];
}
else {
vErrors.push(err127);
}
errors++;
}
var _valid5 = _errs126 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 50];
}
else {
if(_valid5){
valid12 = true;
passing5 = 50;
}
const _errs127 = errors;
if("CV" !== data16){
const err128 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/51/const",keyword:"const",params:{allowedValue: "CV"},message:"must be equal to constant",schema:"CV",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[51],data:data16};
if(vErrors === null){
vErrors = [err128];
}
else {
vErrors.push(err128);
}
errors++;
}
var _valid5 = _errs127 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 51];
}
else {
if(_valid5){
valid12 = true;
passing5 = 51;
}
const _errs128 = errors;
if("CW" !== data16){
const err129 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/52/const",keyword:"const",params:{allowedValue: "CW"},message:"must be equal to constant",schema:"CW",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[52],data:data16};
if(vErrors === null){
vErrors = [err129];
}
else {
vErrors.push(err129);
}
errors++;
}
var _valid5 = _errs128 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 52];
}
else {
if(_valid5){
valid12 = true;
passing5 = 52;
}
const _errs129 = errors;
if("CX" !== data16){
const err130 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/53/const",keyword:"const",params:{allowedValue: "CX"},message:"must be equal to constant",schema:"CX",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[53],data:data16};
if(vErrors === null){
vErrors = [err130];
}
else {
vErrors.push(err130);
}
errors++;
}
var _valid5 = _errs129 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 53];
}
else {
if(_valid5){
valid12 = true;
passing5 = 53;
}
const _errs130 = errors;
if("CY" !== data16){
const err131 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/54/const",keyword:"const",params:{allowedValue: "CY"},message:"must be equal to constant",schema:"CY",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[54],data:data16};
if(vErrors === null){
vErrors = [err131];
}
else {
vErrors.push(err131);
}
errors++;
}
var _valid5 = _errs130 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 54];
}
else {
if(_valid5){
valid12 = true;
passing5 = 54;
}
const _errs131 = errors;
if("CZ" !== data16){
const err132 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/55/const",keyword:"const",params:{allowedValue: "CZ"},message:"must be equal to constant",schema:"CZ",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[55],data:data16};
if(vErrors === null){
vErrors = [err132];
}
else {
vErrors.push(err132);
}
errors++;
}
var _valid5 = _errs131 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 55];
}
else {
if(_valid5){
valid12 = true;
passing5 = 55;
}
const _errs132 = errors;
if("DE" !== data16){
const err133 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/56/const",keyword:"const",params:{allowedValue: "DE"},message:"must be equal to constant",schema:"DE",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[56],data:data16};
if(vErrors === null){
vErrors = [err133];
}
else {
vErrors.push(err133);
}
errors++;
}
var _valid5 = _errs132 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 56];
}
else {
if(_valid5){
valid12 = true;
passing5 = 56;
}
const _errs133 = errors;
if("DJ" !== data16){
const err134 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/57/const",keyword:"const",params:{allowedValue: "DJ"},message:"must be equal to constant",schema:"DJ",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[57],data:data16};
if(vErrors === null){
vErrors = [err134];
}
else {
vErrors.push(err134);
}
errors++;
}
var _valid5 = _errs133 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 57];
}
else {
if(_valid5){
valid12 = true;
passing5 = 57;
}
const _errs134 = errors;
if("DK" !== data16){
const err135 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/58/const",keyword:"const",params:{allowedValue: "DK"},message:"must be equal to constant",schema:"DK",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[58],data:data16};
if(vErrors === null){
vErrors = [err135];
}
else {
vErrors.push(err135);
}
errors++;
}
var _valid5 = _errs134 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 58];
}
else {
if(_valid5){
valid12 = true;
passing5 = 58;
}
const _errs135 = errors;
if("DM" !== data16){
const err136 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/59/const",keyword:"const",params:{allowedValue: "DM"},message:"must be equal to constant",schema:"DM",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[59],data:data16};
if(vErrors === null){
vErrors = [err136];
}
else {
vErrors.push(err136);
}
errors++;
}
var _valid5 = _errs135 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 59];
}
else {
if(_valid5){
valid12 = true;
passing5 = 59;
}
const _errs136 = errors;
if("DO" !== data16){
const err137 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/60/const",keyword:"const",params:{allowedValue: "DO"},message:"must be equal to constant",schema:"DO",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[60],data:data16};
if(vErrors === null){
vErrors = [err137];
}
else {
vErrors.push(err137);
}
errors++;
}
var _valid5 = _errs136 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 60];
}
else {
if(_valid5){
valid12 = true;
passing5 = 60;
}
const _errs137 = errors;
if("DZ" !== data16){
const err138 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/61/const",keyword:"const",params:{allowedValue: "DZ"},message:"must be equal to constant",schema:"DZ",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[61],data:data16};
if(vErrors === null){
vErrors = [err138];
}
else {
vErrors.push(err138);
}
errors++;
}
var _valid5 = _errs137 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 61];
}
else {
if(_valid5){
valid12 = true;
passing5 = 61;
}
const _errs138 = errors;
if("EC" !== data16){
const err139 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/62/const",keyword:"const",params:{allowedValue: "EC"},message:"must be equal to constant",schema:"EC",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[62],data:data16};
if(vErrors === null){
vErrors = [err139];
}
else {
vErrors.push(err139);
}
errors++;
}
var _valid5 = _errs138 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 62];
}
else {
if(_valid5){
valid12 = true;
passing5 = 62;
}
const _errs139 = errors;
if("EE" !== data16){
const err140 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/63/const",keyword:"const",params:{allowedValue: "EE"},message:"must be equal to constant",schema:"EE",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[63],data:data16};
if(vErrors === null){
vErrors = [err140];
}
else {
vErrors.push(err140);
}
errors++;
}
var _valid5 = _errs139 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 63];
}
else {
if(_valid5){
valid12 = true;
passing5 = 63;
}
const _errs140 = errors;
if("EG" !== data16){
const err141 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/64/const",keyword:"const",params:{allowedValue: "EG"},message:"must be equal to constant",schema:"EG",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[64],data:data16};
if(vErrors === null){
vErrors = [err141];
}
else {
vErrors.push(err141);
}
errors++;
}
var _valid5 = _errs140 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 64];
}
else {
if(_valid5){
valid12 = true;
passing5 = 64;
}
const _errs141 = errors;
if("EH" !== data16){
const err142 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/65/const",keyword:"const",params:{allowedValue: "EH"},message:"must be equal to constant",schema:"EH",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[65],data:data16};
if(vErrors === null){
vErrors = [err142];
}
else {
vErrors.push(err142);
}
errors++;
}
var _valid5 = _errs141 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 65];
}
else {
if(_valid5){
valid12 = true;
passing5 = 65;
}
const _errs142 = errors;
if("ER" !== data16){
const err143 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/66/const",keyword:"const",params:{allowedValue: "ER"},message:"must be equal to constant",schema:"ER",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[66],data:data16};
if(vErrors === null){
vErrors = [err143];
}
else {
vErrors.push(err143);
}
errors++;
}
var _valid5 = _errs142 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 66];
}
else {
if(_valid5){
valid12 = true;
passing5 = 66;
}
const _errs143 = errors;
if("ES" !== data16){
const err144 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/67/const",keyword:"const",params:{allowedValue: "ES"},message:"must be equal to constant",schema:"ES",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[67],data:data16};
if(vErrors === null){
vErrors = [err144];
}
else {
vErrors.push(err144);
}
errors++;
}
var _valid5 = _errs143 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 67];
}
else {
if(_valid5){
valid12 = true;
passing5 = 67;
}
const _errs144 = errors;
if("ET" !== data16){
const err145 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/68/const",keyword:"const",params:{allowedValue: "ET"},message:"must be equal to constant",schema:"ET",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[68],data:data16};
if(vErrors === null){
vErrors = [err145];
}
else {
vErrors.push(err145);
}
errors++;
}
var _valid5 = _errs144 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 68];
}
else {
if(_valid5){
valid12 = true;
passing5 = 68;
}
const _errs145 = errors;
if("FI" !== data16){
const err146 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/69/const",keyword:"const",params:{allowedValue: "FI"},message:"must be equal to constant",schema:"FI",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[69],data:data16};
if(vErrors === null){
vErrors = [err146];
}
else {
vErrors.push(err146);
}
errors++;
}
var _valid5 = _errs145 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 69];
}
else {
if(_valid5){
valid12 = true;
passing5 = 69;
}
const _errs146 = errors;
if("FJ" !== data16){
const err147 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/70/const",keyword:"const",params:{allowedValue: "FJ"},message:"must be equal to constant",schema:"FJ",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[70],data:data16};
if(vErrors === null){
vErrors = [err147];
}
else {
vErrors.push(err147);
}
errors++;
}
var _valid5 = _errs146 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 70];
}
else {
if(_valid5){
valid12 = true;
passing5 = 70;
}
const _errs147 = errors;
if("FK" !== data16){
const err148 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/71/const",keyword:"const",params:{allowedValue: "FK"},message:"must be equal to constant",schema:"FK",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[71],data:data16};
if(vErrors === null){
vErrors = [err148];
}
else {
vErrors.push(err148);
}
errors++;
}
var _valid5 = _errs147 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 71];
}
else {
if(_valid5){
valid12 = true;
passing5 = 71;
}
const _errs148 = errors;
if("FM" !== data16){
const err149 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/72/const",keyword:"const",params:{allowedValue: "FM"},message:"must be equal to constant",schema:"FM",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[72],data:data16};
if(vErrors === null){
vErrors = [err149];
}
else {
vErrors.push(err149);
}
errors++;
}
var _valid5 = _errs148 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 72];
}
else {
if(_valid5){
valid12 = true;
passing5 = 72;
}
const _errs149 = errors;
if("FO" !== data16){
const err150 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/73/const",keyword:"const",params:{allowedValue: "FO"},message:"must be equal to constant",schema:"FO",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[73],data:data16};
if(vErrors === null){
vErrors = [err150];
}
else {
vErrors.push(err150);
}
errors++;
}
var _valid5 = _errs149 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 73];
}
else {
if(_valid5){
valid12 = true;
passing5 = 73;
}
const _errs150 = errors;
if("FR" !== data16){
const err151 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/74/const",keyword:"const",params:{allowedValue: "FR"},message:"must be equal to constant",schema:"FR",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[74],data:data16};
if(vErrors === null){
vErrors = [err151];
}
else {
vErrors.push(err151);
}
errors++;
}
var _valid5 = _errs150 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 74];
}
else {
if(_valid5){
valid12 = true;
passing5 = 74;
}
const _errs151 = errors;
if("GA" !== data16){
const err152 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/75/const",keyword:"const",params:{allowedValue: "GA"},message:"must be equal to constant",schema:"GA",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[75],data:data16};
if(vErrors === null){
vErrors = [err152];
}
else {
vErrors.push(err152);
}
errors++;
}
var _valid5 = _errs151 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 75];
}
else {
if(_valid5){
valid12 = true;
passing5 = 75;
}
const _errs152 = errors;
if("GB" !== data16){
const err153 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/76/const",keyword:"const",params:{allowedValue: "GB"},message:"must be equal to constant",schema:"GB",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[76],data:data16};
if(vErrors === null){
vErrors = [err153];
}
else {
vErrors.push(err153);
}
errors++;
}
var _valid5 = _errs152 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 76];
}
else {
if(_valid5){
valid12 = true;
passing5 = 76;
}
const _errs153 = errors;
if("GD" !== data16){
const err154 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/77/const",keyword:"const",params:{allowedValue: "GD"},message:"must be equal to constant",schema:"GD",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[77],data:data16};
if(vErrors === null){
vErrors = [err154];
}
else {
vErrors.push(err154);
}
errors++;
}
var _valid5 = _errs153 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 77];
}
else {
if(_valid5){
valid12 = true;
passing5 = 77;
}
const _errs154 = errors;
if("GE" !== data16){
const err155 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/78/const",keyword:"const",params:{allowedValue: "GE"},message:"must be equal to constant",schema:"GE",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[78],data:data16};
if(vErrors === null){
vErrors = [err155];
}
else {
vErrors.push(err155);
}
errors++;
}
var _valid5 = _errs154 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 78];
}
else {
if(_valid5){
valid12 = true;
passing5 = 78;
}
const _errs155 = errors;
if("GF" !== data16){
const err156 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/79/const",keyword:"const",params:{allowedValue: "GF"},message:"must be equal to constant",schema:"GF",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[79],data:data16};
if(vErrors === null){
vErrors = [err156];
}
else {
vErrors.push(err156);
}
errors++;
}
var _valid5 = _errs155 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 79];
}
else {
if(_valid5){
valid12 = true;
passing5 = 79;
}
const _errs156 = errors;
if("GG" !== data16){
const err157 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/80/const",keyword:"const",params:{allowedValue: "GG"},message:"must be equal to constant",schema:"GG",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[80],data:data16};
if(vErrors === null){
vErrors = [err157];
}
else {
vErrors.push(err157);
}
errors++;
}
var _valid5 = _errs156 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 80];
}
else {
if(_valid5){
valid12 = true;
passing5 = 80;
}
const _errs157 = errors;
if("GH" !== data16){
const err158 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/81/const",keyword:"const",params:{allowedValue: "GH"},message:"must be equal to constant",schema:"GH",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[81],data:data16};
if(vErrors === null){
vErrors = [err158];
}
else {
vErrors.push(err158);
}
errors++;
}
var _valid5 = _errs157 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 81];
}
else {
if(_valid5){
valid12 = true;
passing5 = 81;
}
const _errs158 = errors;
if("GI" !== data16){
const err159 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/82/const",keyword:"const",params:{allowedValue: "GI"},message:"must be equal to constant",schema:"GI",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[82],data:data16};
if(vErrors === null){
vErrors = [err159];
}
else {
vErrors.push(err159);
}
errors++;
}
var _valid5 = _errs158 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 82];
}
else {
if(_valid5){
valid12 = true;
passing5 = 82;
}
const _errs159 = errors;
if("GL" !== data16){
const err160 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/83/const",keyword:"const",params:{allowedValue: "GL"},message:"must be equal to constant",schema:"GL",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[83],data:data16};
if(vErrors === null){
vErrors = [err160];
}
else {
vErrors.push(err160);
}
errors++;
}
var _valid5 = _errs159 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 83];
}
else {
if(_valid5){
valid12 = true;
passing5 = 83;
}
const _errs160 = errors;
if("GM" !== data16){
const err161 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/84/const",keyword:"const",params:{allowedValue: "GM"},message:"must be equal to constant",schema:"GM",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[84],data:data16};
if(vErrors === null){
vErrors = [err161];
}
else {
vErrors.push(err161);
}
errors++;
}
var _valid5 = _errs160 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 84];
}
else {
if(_valid5){
valid12 = true;
passing5 = 84;
}
const _errs161 = errors;
if("GN" !== data16){
const err162 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/85/const",keyword:"const",params:{allowedValue: "GN"},message:"must be equal to constant",schema:"GN",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[85],data:data16};
if(vErrors === null){
vErrors = [err162];
}
else {
vErrors.push(err162);
}
errors++;
}
var _valid5 = _errs161 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 85];
}
else {
if(_valid5){
valid12 = true;
passing5 = 85;
}
const _errs162 = errors;
if("GP" !== data16){
const err163 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/86/const",keyword:"const",params:{allowedValue: "GP"},message:"must be equal to constant",schema:"GP",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[86],data:data16};
if(vErrors === null){
vErrors = [err163];
}
else {
vErrors.push(err163);
}
errors++;
}
var _valid5 = _errs162 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 86];
}
else {
if(_valid5){
valid12 = true;
passing5 = 86;
}
const _errs163 = errors;
if("GQ" !== data16){
const err164 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/87/const",keyword:"const",params:{allowedValue: "GQ"},message:"must be equal to constant",schema:"GQ",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[87],data:data16};
if(vErrors === null){
vErrors = [err164];
}
else {
vErrors.push(err164);
}
errors++;
}
var _valid5 = _errs163 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 87];
}
else {
if(_valid5){
valid12 = true;
passing5 = 87;
}
const _errs164 = errors;
if("GR" !== data16){
const err165 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/88/const",keyword:"const",params:{allowedValue: "GR"},message:"must be equal to constant",schema:"GR",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[88],data:data16};
if(vErrors === null){
vErrors = [err165];
}
else {
vErrors.push(err165);
}
errors++;
}
var _valid5 = _errs164 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 88];
}
else {
if(_valid5){
valid12 = true;
passing5 = 88;
}
const _errs165 = errors;
if("GS" !== data16){
const err166 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/89/const",keyword:"const",params:{allowedValue: "GS"},message:"must be equal to constant",schema:"GS",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[89],data:data16};
if(vErrors === null){
vErrors = [err166];
}
else {
vErrors.push(err166);
}
errors++;
}
var _valid5 = _errs165 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 89];
}
else {
if(_valid5){
valid12 = true;
passing5 = 89;
}
const _errs166 = errors;
if("GT" !== data16){
const err167 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/90/const",keyword:"const",params:{allowedValue: "GT"},message:"must be equal to constant",schema:"GT",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[90],data:data16};
if(vErrors === null){
vErrors = [err167];
}
else {
vErrors.push(err167);
}
errors++;
}
var _valid5 = _errs166 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 90];
}
else {
if(_valid5){
valid12 = true;
passing5 = 90;
}
const _errs167 = errors;
if("GU" !== data16){
const err168 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/91/const",keyword:"const",params:{allowedValue: "GU"},message:"must be equal to constant",schema:"GU",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[91],data:data16};
if(vErrors === null){
vErrors = [err168];
}
else {
vErrors.push(err168);
}
errors++;
}
var _valid5 = _errs167 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 91];
}
else {
if(_valid5){
valid12 = true;
passing5 = 91;
}
const _errs168 = errors;
if("GW" !== data16){
const err169 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/92/const",keyword:"const",params:{allowedValue: "GW"},message:"must be equal to constant",schema:"GW",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[92],data:data16};
if(vErrors === null){
vErrors = [err169];
}
else {
vErrors.push(err169);
}
errors++;
}
var _valid5 = _errs168 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 92];
}
else {
if(_valid5){
valid12 = true;
passing5 = 92;
}
const _errs169 = errors;
if("GY" !== data16){
const err170 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/93/const",keyword:"const",params:{allowedValue: "GY"},message:"must be equal to constant",schema:"GY",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[93],data:data16};
if(vErrors === null){
vErrors = [err170];
}
else {
vErrors.push(err170);
}
errors++;
}
var _valid5 = _errs169 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 93];
}
else {
if(_valid5){
valid12 = true;
passing5 = 93;
}
const _errs170 = errors;
if("HK" !== data16){
const err171 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/94/const",keyword:"const",params:{allowedValue: "HK"},message:"must be equal to constant",schema:"HK",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[94],data:data16};
if(vErrors === null){
vErrors = [err171];
}
else {
vErrors.push(err171);
}
errors++;
}
var _valid5 = _errs170 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 94];
}
else {
if(_valid5){
valid12 = true;
passing5 = 94;
}
const _errs171 = errors;
if("HM" !== data16){
const err172 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/95/const",keyword:"const",params:{allowedValue: "HM"},message:"must be equal to constant",schema:"HM",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[95],data:data16};
if(vErrors === null){
vErrors = [err172];
}
else {
vErrors.push(err172);
}
errors++;
}
var _valid5 = _errs171 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 95];
}
else {
if(_valid5){
valid12 = true;
passing5 = 95;
}
const _errs172 = errors;
if("HN" !== data16){
const err173 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/96/const",keyword:"const",params:{allowedValue: "HN"},message:"must be equal to constant",schema:"HN",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[96],data:data16};
if(vErrors === null){
vErrors = [err173];
}
else {
vErrors.push(err173);
}
errors++;
}
var _valid5 = _errs172 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 96];
}
else {
if(_valid5){
valid12 = true;
passing5 = 96;
}
const _errs173 = errors;
if("HR" !== data16){
const err174 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/97/const",keyword:"const",params:{allowedValue: "HR"},message:"must be equal to constant",schema:"HR",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[97],data:data16};
if(vErrors === null){
vErrors = [err174];
}
else {
vErrors.push(err174);
}
errors++;
}
var _valid5 = _errs173 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 97];
}
else {
if(_valid5){
valid12 = true;
passing5 = 97;
}
const _errs174 = errors;
if("HT" !== data16){
const err175 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/98/const",keyword:"const",params:{allowedValue: "HT"},message:"must be equal to constant",schema:"HT",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[98],data:data16};
if(vErrors === null){
vErrors = [err175];
}
else {
vErrors.push(err175);
}
errors++;
}
var _valid5 = _errs174 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 98];
}
else {
if(_valid5){
valid12 = true;
passing5 = 98;
}
const _errs175 = errors;
if("HU" !== data16){
const err176 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/99/const",keyword:"const",params:{allowedValue: "HU"},message:"must be equal to constant",schema:"HU",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[99],data:data16};
if(vErrors === null){
vErrors = [err176];
}
else {
vErrors.push(err176);
}
errors++;
}
var _valid5 = _errs175 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 99];
}
else {
if(_valid5){
valid12 = true;
passing5 = 99;
}
const _errs176 = errors;
if("ID" !== data16){
const err177 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/100/const",keyword:"const",params:{allowedValue: "ID"},message:"must be equal to constant",schema:"ID",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[100],data:data16};
if(vErrors === null){
vErrors = [err177];
}
else {
vErrors.push(err177);
}
errors++;
}
var _valid5 = _errs176 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 100];
}
else {
if(_valid5){
valid12 = true;
passing5 = 100;
}
const _errs177 = errors;
if("IE" !== data16){
const err178 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/101/const",keyword:"const",params:{allowedValue: "IE"},message:"must be equal to constant",schema:"IE",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[101],data:data16};
if(vErrors === null){
vErrors = [err178];
}
else {
vErrors.push(err178);
}
errors++;
}
var _valid5 = _errs177 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 101];
}
else {
if(_valid5){
valid12 = true;
passing5 = 101;
}
const _errs178 = errors;
if("IL" !== data16){
const err179 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/102/const",keyword:"const",params:{allowedValue: "IL"},message:"must be equal to constant",schema:"IL",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[102],data:data16};
if(vErrors === null){
vErrors = [err179];
}
else {
vErrors.push(err179);
}
errors++;
}
var _valid5 = _errs178 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 102];
}
else {
if(_valid5){
valid12 = true;
passing5 = 102;
}
const _errs179 = errors;
if("IM" !== data16){
const err180 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/103/const",keyword:"const",params:{allowedValue: "IM"},message:"must be equal to constant",schema:"IM",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[103],data:data16};
if(vErrors === null){
vErrors = [err180];
}
else {
vErrors.push(err180);
}
errors++;
}
var _valid5 = _errs179 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 103];
}
else {
if(_valid5){
valid12 = true;
passing5 = 103;
}
const _errs180 = errors;
if("IN" !== data16){
const err181 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/104/const",keyword:"const",params:{allowedValue: "IN"},message:"must be equal to constant",schema:"IN",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[104],data:data16};
if(vErrors === null){
vErrors = [err181];
}
else {
vErrors.push(err181);
}
errors++;
}
var _valid5 = _errs180 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 104];
}
else {
if(_valid5){
valid12 = true;
passing5 = 104;
}
const _errs181 = errors;
if("IO" !== data16){
const err182 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/105/const",keyword:"const",params:{allowedValue: "IO"},message:"must be equal to constant",schema:"IO",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[105],data:data16};
if(vErrors === null){
vErrors = [err182];
}
else {
vErrors.push(err182);
}
errors++;
}
var _valid5 = _errs181 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 105];
}
else {
if(_valid5){
valid12 = true;
passing5 = 105;
}
const _errs182 = errors;
if("IQ" !== data16){
const err183 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/106/const",keyword:"const",params:{allowedValue: "IQ"},message:"must be equal to constant",schema:"IQ",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[106],data:data16};
if(vErrors === null){
vErrors = [err183];
}
else {
vErrors.push(err183);
}
errors++;
}
var _valid5 = _errs182 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 106];
}
else {
if(_valid5){
valid12 = true;
passing5 = 106;
}
const _errs183 = errors;
if("IR" !== data16){
const err184 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/107/const",keyword:"const",params:{allowedValue: "IR"},message:"must be equal to constant",schema:"IR",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[107],data:data16};
if(vErrors === null){
vErrors = [err184];
}
else {
vErrors.push(err184);
}
errors++;
}
var _valid5 = _errs183 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 107];
}
else {
if(_valid5){
valid12 = true;
passing5 = 107;
}
const _errs184 = errors;
if("IS" !== data16){
const err185 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/108/const",keyword:"const",params:{allowedValue: "IS"},message:"must be equal to constant",schema:"IS",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[108],data:data16};
if(vErrors === null){
vErrors = [err185];
}
else {
vErrors.push(err185);
}
errors++;
}
var _valid5 = _errs184 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 108];
}
else {
if(_valid5){
valid12 = true;
passing5 = 108;
}
const _errs185 = errors;
if("IT" !== data16){
const err186 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/109/const",keyword:"const",params:{allowedValue: "IT"},message:"must be equal to constant",schema:"IT",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[109],data:data16};
if(vErrors === null){
vErrors = [err186];
}
else {
vErrors.push(err186);
}
errors++;
}
var _valid5 = _errs185 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 109];
}
else {
if(_valid5){
valid12 = true;
passing5 = 109;
}
const _errs186 = errors;
if("JE" !== data16){
const err187 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/110/const",keyword:"const",params:{allowedValue: "JE"},message:"must be equal to constant",schema:"JE",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[110],data:data16};
if(vErrors === null){
vErrors = [err187];
}
else {
vErrors.push(err187);
}
errors++;
}
var _valid5 = _errs186 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 110];
}
else {
if(_valid5){
valid12 = true;
passing5 = 110;
}
const _errs187 = errors;
if("JM" !== data16){
const err188 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/111/const",keyword:"const",params:{allowedValue: "JM"},message:"must be equal to constant",schema:"JM",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[111],data:data16};
if(vErrors === null){
vErrors = [err188];
}
else {
vErrors.push(err188);
}
errors++;
}
var _valid5 = _errs187 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 111];
}
else {
if(_valid5){
valid12 = true;
passing5 = 111;
}
const _errs188 = errors;
if("JO" !== data16){
const err189 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/112/const",keyword:"const",params:{allowedValue: "JO"},message:"must be equal to constant",schema:"JO",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[112],data:data16};
if(vErrors === null){
vErrors = [err189];
}
else {
vErrors.push(err189);
}
errors++;
}
var _valid5 = _errs188 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 112];
}
else {
if(_valid5){
valid12 = true;
passing5 = 112;
}
const _errs189 = errors;
if("JP" !== data16){
const err190 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/113/const",keyword:"const",params:{allowedValue: "JP"},message:"must be equal to constant",schema:"JP",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[113],data:data16};
if(vErrors === null){
vErrors = [err190];
}
else {
vErrors.push(err190);
}
errors++;
}
var _valid5 = _errs189 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 113];
}
else {
if(_valid5){
valid12 = true;
passing5 = 113;
}
const _errs190 = errors;
if("KE" !== data16){
const err191 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/114/const",keyword:"const",params:{allowedValue: "KE"},message:"must be equal to constant",schema:"KE",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[114],data:data16};
if(vErrors === null){
vErrors = [err191];
}
else {
vErrors.push(err191);
}
errors++;
}
var _valid5 = _errs190 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 114];
}
else {
if(_valid5){
valid12 = true;
passing5 = 114;
}
const _errs191 = errors;
if("KG" !== data16){
const err192 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/115/const",keyword:"const",params:{allowedValue: "KG"},message:"must be equal to constant",schema:"KG",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[115],data:data16};
if(vErrors === null){
vErrors = [err192];
}
else {
vErrors.push(err192);
}
errors++;
}
var _valid5 = _errs191 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 115];
}
else {
if(_valid5){
valid12 = true;
passing5 = 115;
}
const _errs192 = errors;
if("KH" !== data16){
const err193 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/116/const",keyword:"const",params:{allowedValue: "KH"},message:"must be equal to constant",schema:"KH",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[116],data:data16};
if(vErrors === null){
vErrors = [err193];
}
else {
vErrors.push(err193);
}
errors++;
}
var _valid5 = _errs192 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 116];
}
else {
if(_valid5){
valid12 = true;
passing5 = 116;
}
const _errs193 = errors;
if("KI" !== data16){
const err194 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/117/const",keyword:"const",params:{allowedValue: "KI"},message:"must be equal to constant",schema:"KI",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[117],data:data16};
if(vErrors === null){
vErrors = [err194];
}
else {
vErrors.push(err194);
}
errors++;
}
var _valid5 = _errs193 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 117];
}
else {
if(_valid5){
valid12 = true;
passing5 = 117;
}
const _errs194 = errors;
if("KM" !== data16){
const err195 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/118/const",keyword:"const",params:{allowedValue: "KM"},message:"must be equal to constant",schema:"KM",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[118],data:data16};
if(vErrors === null){
vErrors = [err195];
}
else {
vErrors.push(err195);
}
errors++;
}
var _valid5 = _errs194 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 118];
}
else {
if(_valid5){
valid12 = true;
passing5 = 118;
}
const _errs195 = errors;
if("KN" !== data16){
const err196 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/119/const",keyword:"const",params:{allowedValue: "KN"},message:"must be equal to constant",schema:"KN",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[119],data:data16};
if(vErrors === null){
vErrors = [err196];
}
else {
vErrors.push(err196);
}
errors++;
}
var _valid5 = _errs195 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 119];
}
else {
if(_valid5){
valid12 = true;
passing5 = 119;
}
const _errs196 = errors;
if("KP" !== data16){
const err197 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/120/const",keyword:"const",params:{allowedValue: "KP"},message:"must be equal to constant",schema:"KP",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[120],data:data16};
if(vErrors === null){
vErrors = [err197];
}
else {
vErrors.push(err197);
}
errors++;
}
var _valid5 = _errs196 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 120];
}
else {
if(_valid5){
valid12 = true;
passing5 = 120;
}
const _errs197 = errors;
if("KR" !== data16){
const err198 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/121/const",keyword:"const",params:{allowedValue: "KR"},message:"must be equal to constant",schema:"KR",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[121],data:data16};
if(vErrors === null){
vErrors = [err198];
}
else {
vErrors.push(err198);
}
errors++;
}
var _valid5 = _errs197 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 121];
}
else {
if(_valid5){
valid12 = true;
passing5 = 121;
}
const _errs198 = errors;
if("KW" !== data16){
const err199 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/122/const",keyword:"const",params:{allowedValue: "KW"},message:"must be equal to constant",schema:"KW",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[122],data:data16};
if(vErrors === null){
vErrors = [err199];
}
else {
vErrors.push(err199);
}
errors++;
}
var _valid5 = _errs198 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 122];
}
else {
if(_valid5){
valid12 = true;
passing5 = 122;
}
const _errs199 = errors;
if("KY" !== data16){
const err200 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/123/const",keyword:"const",params:{allowedValue: "KY"},message:"must be equal to constant",schema:"KY",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[123],data:data16};
if(vErrors === null){
vErrors = [err200];
}
else {
vErrors.push(err200);
}
errors++;
}
var _valid5 = _errs199 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 123];
}
else {
if(_valid5){
valid12 = true;
passing5 = 123;
}
const _errs200 = errors;
if("KZ" !== data16){
const err201 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/124/const",keyword:"const",params:{allowedValue: "KZ"},message:"must be equal to constant",schema:"KZ",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[124],data:data16};
if(vErrors === null){
vErrors = [err201];
}
else {
vErrors.push(err201);
}
errors++;
}
var _valid5 = _errs200 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 124];
}
else {
if(_valid5){
valid12 = true;
passing5 = 124;
}
const _errs201 = errors;
if("LA" !== data16){
const err202 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/125/const",keyword:"const",params:{allowedValue: "LA"},message:"must be equal to constant",schema:"LA",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[125],data:data16};
if(vErrors === null){
vErrors = [err202];
}
else {
vErrors.push(err202);
}
errors++;
}
var _valid5 = _errs201 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 125];
}
else {
if(_valid5){
valid12 = true;
passing5 = 125;
}
const _errs202 = errors;
if("LB" !== data16){
const err203 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/126/const",keyword:"const",params:{allowedValue: "LB"},message:"must be equal to constant",schema:"LB",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[126],data:data16};
if(vErrors === null){
vErrors = [err203];
}
else {
vErrors.push(err203);
}
errors++;
}
var _valid5 = _errs202 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 126];
}
else {
if(_valid5){
valid12 = true;
passing5 = 126;
}
const _errs203 = errors;
if("LC" !== data16){
const err204 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/127/const",keyword:"const",params:{allowedValue: "LC"},message:"must be equal to constant",schema:"LC",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[127],data:data16};
if(vErrors === null){
vErrors = [err204];
}
else {
vErrors.push(err204);
}
errors++;
}
var _valid5 = _errs203 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 127];
}
else {
if(_valid5){
valid12 = true;
passing5 = 127;
}
const _errs204 = errors;
if("LI" !== data16){
const err205 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/128/const",keyword:"const",params:{allowedValue: "LI"},message:"must be equal to constant",schema:"LI",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[128],data:data16};
if(vErrors === null){
vErrors = [err205];
}
else {
vErrors.push(err205);
}
errors++;
}
var _valid5 = _errs204 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 128];
}
else {
if(_valid5){
valid12 = true;
passing5 = 128;
}
const _errs205 = errors;
if("LK" !== data16){
const err206 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/129/const",keyword:"const",params:{allowedValue: "LK"},message:"must be equal to constant",schema:"LK",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[129],data:data16};
if(vErrors === null){
vErrors = [err206];
}
else {
vErrors.push(err206);
}
errors++;
}
var _valid5 = _errs205 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 129];
}
else {
if(_valid5){
valid12 = true;
passing5 = 129;
}
const _errs206 = errors;
if("LR" !== data16){
const err207 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/130/const",keyword:"const",params:{allowedValue: "LR"},message:"must be equal to constant",schema:"LR",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[130],data:data16};
if(vErrors === null){
vErrors = [err207];
}
else {
vErrors.push(err207);
}
errors++;
}
var _valid5 = _errs206 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 130];
}
else {
if(_valid5){
valid12 = true;
passing5 = 130;
}
const _errs207 = errors;
if("LS" !== data16){
const err208 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/131/const",keyword:"const",params:{allowedValue: "LS"},message:"must be equal to constant",schema:"LS",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[131],data:data16};
if(vErrors === null){
vErrors = [err208];
}
else {
vErrors.push(err208);
}
errors++;
}
var _valid5 = _errs207 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 131];
}
else {
if(_valid5){
valid12 = true;
passing5 = 131;
}
const _errs208 = errors;
if("LT" !== data16){
const err209 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/132/const",keyword:"const",params:{allowedValue: "LT"},message:"must be equal to constant",schema:"LT",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[132],data:data16};
if(vErrors === null){
vErrors = [err209];
}
else {
vErrors.push(err209);
}
errors++;
}
var _valid5 = _errs208 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 132];
}
else {
if(_valid5){
valid12 = true;
passing5 = 132;
}
const _errs209 = errors;
if("LU" !== data16){
const err210 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/133/const",keyword:"const",params:{allowedValue: "LU"},message:"must be equal to constant",schema:"LU",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[133],data:data16};
if(vErrors === null){
vErrors = [err210];
}
else {
vErrors.push(err210);
}
errors++;
}
var _valid5 = _errs209 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 133];
}
else {
if(_valid5){
valid12 = true;
passing5 = 133;
}
const _errs210 = errors;
if("LV" !== data16){
const err211 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/134/const",keyword:"const",params:{allowedValue: "LV"},message:"must be equal to constant",schema:"LV",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[134],data:data16};
if(vErrors === null){
vErrors = [err211];
}
else {
vErrors.push(err211);
}
errors++;
}
var _valid5 = _errs210 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 134];
}
else {
if(_valid5){
valid12 = true;
passing5 = 134;
}
const _errs211 = errors;
if("LY" !== data16){
const err212 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/135/const",keyword:"const",params:{allowedValue: "LY"},message:"must be equal to constant",schema:"LY",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[135],data:data16};
if(vErrors === null){
vErrors = [err212];
}
else {
vErrors.push(err212);
}
errors++;
}
var _valid5 = _errs211 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 135];
}
else {
if(_valid5){
valid12 = true;
passing5 = 135;
}
const _errs212 = errors;
if("MA" !== data16){
const err213 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/136/const",keyword:"const",params:{allowedValue: "MA"},message:"must be equal to constant",schema:"MA",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[136],data:data16};
if(vErrors === null){
vErrors = [err213];
}
else {
vErrors.push(err213);
}
errors++;
}
var _valid5 = _errs212 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 136];
}
else {
if(_valid5){
valid12 = true;
passing5 = 136;
}
const _errs213 = errors;
if("MC" !== data16){
const err214 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/137/const",keyword:"const",params:{allowedValue: "MC"},message:"must be equal to constant",schema:"MC",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[137],data:data16};
if(vErrors === null){
vErrors = [err214];
}
else {
vErrors.push(err214);
}
errors++;
}
var _valid5 = _errs213 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 137];
}
else {
if(_valid5){
valid12 = true;
passing5 = 137;
}
const _errs214 = errors;
if("MD" !== data16){
const err215 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/138/const",keyword:"const",params:{allowedValue: "MD"},message:"must be equal to constant",schema:"MD",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[138],data:data16};
if(vErrors === null){
vErrors = [err215];
}
else {
vErrors.push(err215);
}
errors++;
}
var _valid5 = _errs214 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 138];
}
else {
if(_valid5){
valid12 = true;
passing5 = 138;
}
const _errs215 = errors;
if("ME" !== data16){
const err216 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/139/const",keyword:"const",params:{allowedValue: "ME"},message:"must be equal to constant",schema:"ME",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[139],data:data16};
if(vErrors === null){
vErrors = [err216];
}
else {
vErrors.push(err216);
}
errors++;
}
var _valid5 = _errs215 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 139];
}
else {
if(_valid5){
valid12 = true;
passing5 = 139;
}
const _errs216 = errors;
if("MF" !== data16){
const err217 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/140/const",keyword:"const",params:{allowedValue: "MF"},message:"must be equal to constant",schema:"MF",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[140],data:data16};
if(vErrors === null){
vErrors = [err217];
}
else {
vErrors.push(err217);
}
errors++;
}
var _valid5 = _errs216 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 140];
}
else {
if(_valid5){
valid12 = true;
passing5 = 140;
}
const _errs217 = errors;
if("MG" !== data16){
const err218 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/141/const",keyword:"const",params:{allowedValue: "MG"},message:"must be equal to constant",schema:"MG",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[141],data:data16};
if(vErrors === null){
vErrors = [err218];
}
else {
vErrors.push(err218);
}
errors++;
}
var _valid5 = _errs217 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 141];
}
else {
if(_valid5){
valid12 = true;
passing5 = 141;
}
const _errs218 = errors;
if("MH" !== data16){
const err219 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/142/const",keyword:"const",params:{allowedValue: "MH"},message:"must be equal to constant",schema:"MH",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[142],data:data16};
if(vErrors === null){
vErrors = [err219];
}
else {
vErrors.push(err219);
}
errors++;
}
var _valid5 = _errs218 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 142];
}
else {
if(_valid5){
valid12 = true;
passing5 = 142;
}
const _errs219 = errors;
if("MK" !== data16){
const err220 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/143/const",keyword:"const",params:{allowedValue: "MK"},message:"must be equal to constant",schema:"MK",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[143],data:data16};
if(vErrors === null){
vErrors = [err220];
}
else {
vErrors.push(err220);
}
errors++;
}
var _valid5 = _errs219 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 143];
}
else {
if(_valid5){
valid12 = true;
passing5 = 143;
}
const _errs220 = errors;
if("ML" !== data16){
const err221 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/144/const",keyword:"const",params:{allowedValue: "ML"},message:"must be equal to constant",schema:"ML",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[144],data:data16};
if(vErrors === null){
vErrors = [err221];
}
else {
vErrors.push(err221);
}
errors++;
}
var _valid5 = _errs220 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 144];
}
else {
if(_valid5){
valid12 = true;
passing5 = 144;
}
const _errs221 = errors;
if("MM" !== data16){
const err222 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/145/const",keyword:"const",params:{allowedValue: "MM"},message:"must be equal to constant",schema:"MM",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[145],data:data16};
if(vErrors === null){
vErrors = [err222];
}
else {
vErrors.push(err222);
}
errors++;
}
var _valid5 = _errs221 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 145];
}
else {
if(_valid5){
valid12 = true;
passing5 = 145;
}
const _errs222 = errors;
if("MN" !== data16){
const err223 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/146/const",keyword:"const",params:{allowedValue: "MN"},message:"must be equal to constant",schema:"MN",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[146],data:data16};
if(vErrors === null){
vErrors = [err223];
}
else {
vErrors.push(err223);
}
errors++;
}
var _valid5 = _errs222 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 146];
}
else {
if(_valid5){
valid12 = true;
passing5 = 146;
}
const _errs223 = errors;
if("MO" !== data16){
const err224 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/147/const",keyword:"const",params:{allowedValue: "MO"},message:"must be equal to constant",schema:"MO",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[147],data:data16};
if(vErrors === null){
vErrors = [err224];
}
else {
vErrors.push(err224);
}
errors++;
}
var _valid5 = _errs223 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 147];
}
else {
if(_valid5){
valid12 = true;
passing5 = 147;
}
const _errs224 = errors;
if("MP" !== data16){
const err225 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/148/const",keyword:"const",params:{allowedValue: "MP"},message:"must be equal to constant",schema:"MP",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[148],data:data16};
if(vErrors === null){
vErrors = [err225];
}
else {
vErrors.push(err225);
}
errors++;
}
var _valid5 = _errs224 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 148];
}
else {
if(_valid5){
valid12 = true;
passing5 = 148;
}
const _errs225 = errors;
if("MQ" !== data16){
const err226 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/149/const",keyword:"const",params:{allowedValue: "MQ"},message:"must be equal to constant",schema:"MQ",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[149],data:data16};
if(vErrors === null){
vErrors = [err226];
}
else {
vErrors.push(err226);
}
errors++;
}
var _valid5 = _errs225 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 149];
}
else {
if(_valid5){
valid12 = true;
passing5 = 149;
}
const _errs226 = errors;
if("MR" !== data16){
const err227 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/150/const",keyword:"const",params:{allowedValue: "MR"},message:"must be equal to constant",schema:"MR",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[150],data:data16};
if(vErrors === null){
vErrors = [err227];
}
else {
vErrors.push(err227);
}
errors++;
}
var _valid5 = _errs226 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 150];
}
else {
if(_valid5){
valid12 = true;
passing5 = 150;
}
const _errs227 = errors;
if("MS" !== data16){
const err228 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/151/const",keyword:"const",params:{allowedValue: "MS"},message:"must be equal to constant",schema:"MS",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[151],data:data16};
if(vErrors === null){
vErrors = [err228];
}
else {
vErrors.push(err228);
}
errors++;
}
var _valid5 = _errs227 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 151];
}
else {
if(_valid5){
valid12 = true;
passing5 = 151;
}
const _errs228 = errors;
if("MT" !== data16){
const err229 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/152/const",keyword:"const",params:{allowedValue: "MT"},message:"must be equal to constant",schema:"MT",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[152],data:data16};
if(vErrors === null){
vErrors = [err229];
}
else {
vErrors.push(err229);
}
errors++;
}
var _valid5 = _errs228 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 152];
}
else {
if(_valid5){
valid12 = true;
passing5 = 152;
}
const _errs229 = errors;
if("MU" !== data16){
const err230 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/153/const",keyword:"const",params:{allowedValue: "MU"},message:"must be equal to constant",schema:"MU",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[153],data:data16};
if(vErrors === null){
vErrors = [err230];
}
else {
vErrors.push(err230);
}
errors++;
}
var _valid5 = _errs229 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 153];
}
else {
if(_valid5){
valid12 = true;
passing5 = 153;
}
const _errs230 = errors;
if("MV" !== data16){
const err231 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/154/const",keyword:"const",params:{allowedValue: "MV"},message:"must be equal to constant",schema:"MV",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[154],data:data16};
if(vErrors === null){
vErrors = [err231];
}
else {
vErrors.push(err231);
}
errors++;
}
var _valid5 = _errs230 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 154];
}
else {
if(_valid5){
valid12 = true;
passing5 = 154;
}
const _errs231 = errors;
if("MW" !== data16){
const err232 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/155/const",keyword:"const",params:{allowedValue: "MW"},message:"must be equal to constant",schema:"MW",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[155],data:data16};
if(vErrors === null){
vErrors = [err232];
}
else {
vErrors.push(err232);
}
errors++;
}
var _valid5 = _errs231 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 155];
}
else {
if(_valid5){
valid12 = true;
passing5 = 155;
}
const _errs232 = errors;
if("MX" !== data16){
const err233 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/156/const",keyword:"const",params:{allowedValue: "MX"},message:"must be equal to constant",schema:"MX",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[156],data:data16};
if(vErrors === null){
vErrors = [err233];
}
else {
vErrors.push(err233);
}
errors++;
}
var _valid5 = _errs232 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 156];
}
else {
if(_valid5){
valid12 = true;
passing5 = 156;
}
const _errs233 = errors;
if("MY" !== data16){
const err234 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/157/const",keyword:"const",params:{allowedValue: "MY"},message:"must be equal to constant",schema:"MY",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[157],data:data16};
if(vErrors === null){
vErrors = [err234];
}
else {
vErrors.push(err234);
}
errors++;
}
var _valid5 = _errs233 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 157];
}
else {
if(_valid5){
valid12 = true;
passing5 = 157;
}
const _errs234 = errors;
if("MZ" !== data16){
const err235 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/158/const",keyword:"const",params:{allowedValue: "MZ"},message:"must be equal to constant",schema:"MZ",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[158],data:data16};
if(vErrors === null){
vErrors = [err235];
}
else {
vErrors.push(err235);
}
errors++;
}
var _valid5 = _errs234 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 158];
}
else {
if(_valid5){
valid12 = true;
passing5 = 158;
}
const _errs235 = errors;
if("NA" !== data16){
const err236 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/159/const",keyword:"const",params:{allowedValue: "NA"},message:"must be equal to constant",schema:"NA",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[159],data:data16};
if(vErrors === null){
vErrors = [err236];
}
else {
vErrors.push(err236);
}
errors++;
}
var _valid5 = _errs235 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 159];
}
else {
if(_valid5){
valid12 = true;
passing5 = 159;
}
const _errs236 = errors;
if("NC" !== data16){
const err237 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/160/const",keyword:"const",params:{allowedValue: "NC"},message:"must be equal to constant",schema:"NC",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[160],data:data16};
if(vErrors === null){
vErrors = [err237];
}
else {
vErrors.push(err237);
}
errors++;
}
var _valid5 = _errs236 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 160];
}
else {
if(_valid5){
valid12 = true;
passing5 = 160;
}
const _errs237 = errors;
if("NE" !== data16){
const err238 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/161/const",keyword:"const",params:{allowedValue: "NE"},message:"must be equal to constant",schema:"NE",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[161],data:data16};
if(vErrors === null){
vErrors = [err238];
}
else {
vErrors.push(err238);
}
errors++;
}
var _valid5 = _errs237 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 161];
}
else {
if(_valid5){
valid12 = true;
passing5 = 161;
}
const _errs238 = errors;
if("NF" !== data16){
const err239 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/162/const",keyword:"const",params:{allowedValue: "NF"},message:"must be equal to constant",schema:"NF",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[162],data:data16};
if(vErrors === null){
vErrors = [err239];
}
else {
vErrors.push(err239);
}
errors++;
}
var _valid5 = _errs238 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 162];
}
else {
if(_valid5){
valid12 = true;
passing5 = 162;
}
const _errs239 = errors;
if("NG" !== data16){
const err240 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/163/const",keyword:"const",params:{allowedValue: "NG"},message:"must be equal to constant",schema:"NG",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[163],data:data16};
if(vErrors === null){
vErrors = [err240];
}
else {
vErrors.push(err240);
}
errors++;
}
var _valid5 = _errs239 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 163];
}
else {
if(_valid5){
valid12 = true;
passing5 = 163;
}
const _errs240 = errors;
if("NI" !== data16){
const err241 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/164/const",keyword:"const",params:{allowedValue: "NI"},message:"must be equal to constant",schema:"NI",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[164],data:data16};
if(vErrors === null){
vErrors = [err241];
}
else {
vErrors.push(err241);
}
errors++;
}
var _valid5 = _errs240 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 164];
}
else {
if(_valid5){
valid12 = true;
passing5 = 164;
}
const _errs241 = errors;
if("NL" !== data16){
const err242 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/165/const",keyword:"const",params:{allowedValue: "NL"},message:"must be equal to constant",schema:"NL",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[165],data:data16};
if(vErrors === null){
vErrors = [err242];
}
else {
vErrors.push(err242);
}
errors++;
}
var _valid5 = _errs241 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 165];
}
else {
if(_valid5){
valid12 = true;
passing5 = 165;
}
const _errs242 = errors;
if("NO" !== data16){
const err243 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/166/const",keyword:"const",params:{allowedValue: "NO"},message:"must be equal to constant",schema:"NO",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[166],data:data16};
if(vErrors === null){
vErrors = [err243];
}
else {
vErrors.push(err243);
}
errors++;
}
var _valid5 = _errs242 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 166];
}
else {
if(_valid5){
valid12 = true;
passing5 = 166;
}
const _errs243 = errors;
if("NP" !== data16){
const err244 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/167/const",keyword:"const",params:{allowedValue: "NP"},message:"must be equal to constant",schema:"NP",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[167],data:data16};
if(vErrors === null){
vErrors = [err244];
}
else {
vErrors.push(err244);
}
errors++;
}
var _valid5 = _errs243 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 167];
}
else {
if(_valid5){
valid12 = true;
passing5 = 167;
}
const _errs244 = errors;
if("NR" !== data16){
const err245 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/168/const",keyword:"const",params:{allowedValue: "NR"},message:"must be equal to constant",schema:"NR",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[168],data:data16};
if(vErrors === null){
vErrors = [err245];
}
else {
vErrors.push(err245);
}
errors++;
}
var _valid5 = _errs244 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 168];
}
else {
if(_valid5){
valid12 = true;
passing5 = 168;
}
const _errs245 = errors;
if("NU" !== data16){
const err246 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/169/const",keyword:"const",params:{allowedValue: "NU"},message:"must be equal to constant",schema:"NU",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[169],data:data16};
if(vErrors === null){
vErrors = [err246];
}
else {
vErrors.push(err246);
}
errors++;
}
var _valid5 = _errs245 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 169];
}
else {
if(_valid5){
valid12 = true;
passing5 = 169;
}
const _errs246 = errors;
if("NZ" !== data16){
const err247 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/170/const",keyword:"const",params:{allowedValue: "NZ"},message:"must be equal to constant",schema:"NZ",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[170],data:data16};
if(vErrors === null){
vErrors = [err247];
}
else {
vErrors.push(err247);
}
errors++;
}
var _valid5 = _errs246 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 170];
}
else {
if(_valid5){
valid12 = true;
passing5 = 170;
}
const _errs247 = errors;
if("OM" !== data16){
const err248 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/171/const",keyword:"const",params:{allowedValue: "OM"},message:"must be equal to constant",schema:"OM",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[171],data:data16};
if(vErrors === null){
vErrors = [err248];
}
else {
vErrors.push(err248);
}
errors++;
}
var _valid5 = _errs247 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 171];
}
else {
if(_valid5){
valid12 = true;
passing5 = 171;
}
const _errs248 = errors;
if("PA" !== data16){
const err249 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/172/const",keyword:"const",params:{allowedValue: "PA"},message:"must be equal to constant",schema:"PA",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[172],data:data16};
if(vErrors === null){
vErrors = [err249];
}
else {
vErrors.push(err249);
}
errors++;
}
var _valid5 = _errs248 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 172];
}
else {
if(_valid5){
valid12 = true;
passing5 = 172;
}
const _errs249 = errors;
if("PE" !== data16){
const err250 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/173/const",keyword:"const",params:{allowedValue: "PE"},message:"must be equal to constant",schema:"PE",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[173],data:data16};
if(vErrors === null){
vErrors = [err250];
}
else {
vErrors.push(err250);
}
errors++;
}
var _valid5 = _errs249 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 173];
}
else {
if(_valid5){
valid12 = true;
passing5 = 173;
}
const _errs250 = errors;
if("PF" !== data16){
const err251 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/174/const",keyword:"const",params:{allowedValue: "PF"},message:"must be equal to constant",schema:"PF",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[174],data:data16};
if(vErrors === null){
vErrors = [err251];
}
else {
vErrors.push(err251);
}
errors++;
}
var _valid5 = _errs250 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 174];
}
else {
if(_valid5){
valid12 = true;
passing5 = 174;
}
const _errs251 = errors;
if("PG" !== data16){
const err252 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/175/const",keyword:"const",params:{allowedValue: "PG"},message:"must be equal to constant",schema:"PG",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[175],data:data16};
if(vErrors === null){
vErrors = [err252];
}
else {
vErrors.push(err252);
}
errors++;
}
var _valid5 = _errs251 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 175];
}
else {
if(_valid5){
valid12 = true;
passing5 = 175;
}
const _errs252 = errors;
if("PH" !== data16){
const err253 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/176/const",keyword:"const",params:{allowedValue: "PH"},message:"must be equal to constant",schema:"PH",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[176],data:data16};
if(vErrors === null){
vErrors = [err253];
}
else {
vErrors.push(err253);
}
errors++;
}
var _valid5 = _errs252 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 176];
}
else {
if(_valid5){
valid12 = true;
passing5 = 176;
}
const _errs253 = errors;
if("PK" !== data16){
const err254 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/177/const",keyword:"const",params:{allowedValue: "PK"},message:"must be equal to constant",schema:"PK",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[177],data:data16};
if(vErrors === null){
vErrors = [err254];
}
else {
vErrors.push(err254);
}
errors++;
}
var _valid5 = _errs253 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 177];
}
else {
if(_valid5){
valid12 = true;
passing5 = 177;
}
const _errs254 = errors;
if("PL" !== data16){
const err255 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/178/const",keyword:"const",params:{allowedValue: "PL"},message:"must be equal to constant",schema:"PL",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[178],data:data16};
if(vErrors === null){
vErrors = [err255];
}
else {
vErrors.push(err255);
}
errors++;
}
var _valid5 = _errs254 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 178];
}
else {
if(_valid5){
valid12 = true;
passing5 = 178;
}
const _errs255 = errors;
if("PM" !== data16){
const err256 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/179/const",keyword:"const",params:{allowedValue: "PM"},message:"must be equal to constant",schema:"PM",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[179],data:data16};
if(vErrors === null){
vErrors = [err256];
}
else {
vErrors.push(err256);
}
errors++;
}
var _valid5 = _errs255 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 179];
}
else {
if(_valid5){
valid12 = true;
passing5 = 179;
}
const _errs256 = errors;
if("PN" !== data16){
const err257 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/180/const",keyword:"const",params:{allowedValue: "PN"},message:"must be equal to constant",schema:"PN",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[180],data:data16};
if(vErrors === null){
vErrors = [err257];
}
else {
vErrors.push(err257);
}
errors++;
}
var _valid5 = _errs256 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 180];
}
else {
if(_valid5){
valid12 = true;
passing5 = 180;
}
const _errs257 = errors;
if("PR" !== data16){
const err258 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/181/const",keyword:"const",params:{allowedValue: "PR"},message:"must be equal to constant",schema:"PR",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[181],data:data16};
if(vErrors === null){
vErrors = [err258];
}
else {
vErrors.push(err258);
}
errors++;
}
var _valid5 = _errs257 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 181];
}
else {
if(_valid5){
valid12 = true;
passing5 = 181;
}
const _errs258 = errors;
if("PS" !== data16){
const err259 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/182/const",keyword:"const",params:{allowedValue: "PS"},message:"must be equal to constant",schema:"PS",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[182],data:data16};
if(vErrors === null){
vErrors = [err259];
}
else {
vErrors.push(err259);
}
errors++;
}
var _valid5 = _errs258 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 182];
}
else {
if(_valid5){
valid12 = true;
passing5 = 182;
}
const _errs259 = errors;
if("PT" !== data16){
const err260 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/183/const",keyword:"const",params:{allowedValue: "PT"},message:"must be equal to constant",schema:"PT",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[183],data:data16};
if(vErrors === null){
vErrors = [err260];
}
else {
vErrors.push(err260);
}
errors++;
}
var _valid5 = _errs259 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 183];
}
else {
if(_valid5){
valid12 = true;
passing5 = 183;
}
const _errs260 = errors;
if("PW" !== data16){
const err261 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/184/const",keyword:"const",params:{allowedValue: "PW"},message:"must be equal to constant",schema:"PW",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[184],data:data16};
if(vErrors === null){
vErrors = [err261];
}
else {
vErrors.push(err261);
}
errors++;
}
var _valid5 = _errs260 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 184];
}
else {
if(_valid5){
valid12 = true;
passing5 = 184;
}
const _errs261 = errors;
if("PY" !== data16){
const err262 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/185/const",keyword:"const",params:{allowedValue: "PY"},message:"must be equal to constant",schema:"PY",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[185],data:data16};
if(vErrors === null){
vErrors = [err262];
}
else {
vErrors.push(err262);
}
errors++;
}
var _valid5 = _errs261 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 185];
}
else {
if(_valid5){
valid12 = true;
passing5 = 185;
}
const _errs262 = errors;
if("QA" !== data16){
const err263 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/186/const",keyword:"const",params:{allowedValue: "QA"},message:"must be equal to constant",schema:"QA",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[186],data:data16};
if(vErrors === null){
vErrors = [err263];
}
else {
vErrors.push(err263);
}
errors++;
}
var _valid5 = _errs262 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 186];
}
else {
if(_valid5){
valid12 = true;
passing5 = 186;
}
const _errs263 = errors;
if("RE" !== data16){
const err264 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/187/const",keyword:"const",params:{allowedValue: "RE"},message:"must be equal to constant",schema:"RE",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[187],data:data16};
if(vErrors === null){
vErrors = [err264];
}
else {
vErrors.push(err264);
}
errors++;
}
var _valid5 = _errs263 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 187];
}
else {
if(_valid5){
valid12 = true;
passing5 = 187;
}
const _errs264 = errors;
if("RO" !== data16){
const err265 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/188/const",keyword:"const",params:{allowedValue: "RO"},message:"must be equal to constant",schema:"RO",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[188],data:data16};
if(vErrors === null){
vErrors = [err265];
}
else {
vErrors.push(err265);
}
errors++;
}
var _valid5 = _errs264 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 188];
}
else {
if(_valid5){
valid12 = true;
passing5 = 188;
}
const _errs265 = errors;
if("RS" !== data16){
const err266 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/189/const",keyword:"const",params:{allowedValue: "RS"},message:"must be equal to constant",schema:"RS",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[189],data:data16};
if(vErrors === null){
vErrors = [err266];
}
else {
vErrors.push(err266);
}
errors++;
}
var _valid5 = _errs265 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 189];
}
else {
if(_valid5){
valid12 = true;
passing5 = 189;
}
const _errs266 = errors;
if("RU" !== data16){
const err267 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/190/const",keyword:"const",params:{allowedValue: "RU"},message:"must be equal to constant",schema:"RU",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[190],data:data16};
if(vErrors === null){
vErrors = [err267];
}
else {
vErrors.push(err267);
}
errors++;
}
var _valid5 = _errs266 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 190];
}
else {
if(_valid5){
valid12 = true;
passing5 = 190;
}
const _errs267 = errors;
if("RW" !== data16){
const err268 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/191/const",keyword:"const",params:{allowedValue: "RW"},message:"must be equal to constant",schema:"RW",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[191],data:data16};
if(vErrors === null){
vErrors = [err268];
}
else {
vErrors.push(err268);
}
errors++;
}
var _valid5 = _errs267 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 191];
}
else {
if(_valid5){
valid12 = true;
passing5 = 191;
}
const _errs268 = errors;
if("SA" !== data16){
const err269 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/192/const",keyword:"const",params:{allowedValue: "SA"},message:"must be equal to constant",schema:"SA",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[192],data:data16};
if(vErrors === null){
vErrors = [err269];
}
else {
vErrors.push(err269);
}
errors++;
}
var _valid5 = _errs268 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 192];
}
else {
if(_valid5){
valid12 = true;
passing5 = 192;
}
const _errs269 = errors;
if("SB" !== data16){
const err270 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/193/const",keyword:"const",params:{allowedValue: "SB"},message:"must be equal to constant",schema:"SB",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[193],data:data16};
if(vErrors === null){
vErrors = [err270];
}
else {
vErrors.push(err270);
}
errors++;
}
var _valid5 = _errs269 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 193];
}
else {
if(_valid5){
valid12 = true;
passing5 = 193;
}
const _errs270 = errors;
if("SC" !== data16){
const err271 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/194/const",keyword:"const",params:{allowedValue: "SC"},message:"must be equal to constant",schema:"SC",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[194],data:data16};
if(vErrors === null){
vErrors = [err271];
}
else {
vErrors.push(err271);
}
errors++;
}
var _valid5 = _errs270 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 194];
}
else {
if(_valid5){
valid12 = true;
passing5 = 194;
}
const _errs271 = errors;
if("SD" !== data16){
const err272 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/195/const",keyword:"const",params:{allowedValue: "SD"},message:"must be equal to constant",schema:"SD",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[195],data:data16};
if(vErrors === null){
vErrors = [err272];
}
else {
vErrors.push(err272);
}
errors++;
}
var _valid5 = _errs271 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 195];
}
else {
if(_valid5){
valid12 = true;
passing5 = 195;
}
const _errs272 = errors;
if("SE" !== data16){
const err273 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/196/const",keyword:"const",params:{allowedValue: "SE"},message:"must be equal to constant",schema:"SE",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[196],data:data16};
if(vErrors === null){
vErrors = [err273];
}
else {
vErrors.push(err273);
}
errors++;
}
var _valid5 = _errs272 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 196];
}
else {
if(_valid5){
valid12 = true;
passing5 = 196;
}
const _errs273 = errors;
if("SG" !== data16){
const err274 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/197/const",keyword:"const",params:{allowedValue: "SG"},message:"must be equal to constant",schema:"SG",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[197],data:data16};
if(vErrors === null){
vErrors = [err274];
}
else {
vErrors.push(err274);
}
errors++;
}
var _valid5 = _errs273 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 197];
}
else {
if(_valid5){
valid12 = true;
passing5 = 197;
}
const _errs274 = errors;
if("SH" !== data16){
const err275 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/198/const",keyword:"const",params:{allowedValue: "SH"},message:"must be equal to constant",schema:"SH",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[198],data:data16};
if(vErrors === null){
vErrors = [err275];
}
else {
vErrors.push(err275);
}
errors++;
}
var _valid5 = _errs274 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 198];
}
else {
if(_valid5){
valid12 = true;
passing5 = 198;
}
const _errs275 = errors;
if("SI" !== data16){
const err276 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/199/const",keyword:"const",params:{allowedValue: "SI"},message:"must be equal to constant",schema:"SI",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[199],data:data16};
if(vErrors === null){
vErrors = [err276];
}
else {
vErrors.push(err276);
}
errors++;
}
var _valid5 = _errs275 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 199];
}
else {
if(_valid5){
valid12 = true;
passing5 = 199;
}
const _errs276 = errors;
if("SJ" !== data16){
const err277 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/200/const",keyword:"const",params:{allowedValue: "SJ"},message:"must be equal to constant",schema:"SJ",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[200],data:data16};
if(vErrors === null){
vErrors = [err277];
}
else {
vErrors.push(err277);
}
errors++;
}
var _valid5 = _errs276 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 200];
}
else {
if(_valid5){
valid12 = true;
passing5 = 200;
}
const _errs277 = errors;
if("SK" !== data16){
const err278 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/201/const",keyword:"const",params:{allowedValue: "SK"},message:"must be equal to constant",schema:"SK",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[201],data:data16};
if(vErrors === null){
vErrors = [err278];
}
else {
vErrors.push(err278);
}
errors++;
}
var _valid5 = _errs277 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 201];
}
else {
if(_valid5){
valid12 = true;
passing5 = 201;
}
const _errs278 = errors;
if("SL" !== data16){
const err279 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/202/const",keyword:"const",params:{allowedValue: "SL"},message:"must be equal to constant",schema:"SL",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[202],data:data16};
if(vErrors === null){
vErrors = [err279];
}
else {
vErrors.push(err279);
}
errors++;
}
var _valid5 = _errs278 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 202];
}
else {
if(_valid5){
valid12 = true;
passing5 = 202;
}
const _errs279 = errors;
if("SM" !== data16){
const err280 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/203/const",keyword:"const",params:{allowedValue: "SM"},message:"must be equal to constant",schema:"SM",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[203],data:data16};
if(vErrors === null){
vErrors = [err280];
}
else {
vErrors.push(err280);
}
errors++;
}
var _valid5 = _errs279 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 203];
}
else {
if(_valid5){
valid12 = true;
passing5 = 203;
}
const _errs280 = errors;
if("SN" !== data16){
const err281 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/204/const",keyword:"const",params:{allowedValue: "SN"},message:"must be equal to constant",schema:"SN",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[204],data:data16};
if(vErrors === null){
vErrors = [err281];
}
else {
vErrors.push(err281);
}
errors++;
}
var _valid5 = _errs280 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 204];
}
else {
if(_valid5){
valid12 = true;
passing5 = 204;
}
const _errs281 = errors;
if("SO" !== data16){
const err282 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/205/const",keyword:"const",params:{allowedValue: "SO"},message:"must be equal to constant",schema:"SO",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[205],data:data16};
if(vErrors === null){
vErrors = [err282];
}
else {
vErrors.push(err282);
}
errors++;
}
var _valid5 = _errs281 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 205];
}
else {
if(_valid5){
valid12 = true;
passing5 = 205;
}
const _errs282 = errors;
if("SR" !== data16){
const err283 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/206/const",keyword:"const",params:{allowedValue: "SR"},message:"must be equal to constant",schema:"SR",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[206],data:data16};
if(vErrors === null){
vErrors = [err283];
}
else {
vErrors.push(err283);
}
errors++;
}
var _valid5 = _errs282 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 206];
}
else {
if(_valid5){
valid12 = true;
passing5 = 206;
}
const _errs283 = errors;
if("SS" !== data16){
const err284 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/207/const",keyword:"const",params:{allowedValue: "SS"},message:"must be equal to constant",schema:"SS",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[207],data:data16};
if(vErrors === null){
vErrors = [err284];
}
else {
vErrors.push(err284);
}
errors++;
}
var _valid5 = _errs283 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 207];
}
else {
if(_valid5){
valid12 = true;
passing5 = 207;
}
const _errs284 = errors;
if("ST" !== data16){
const err285 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/208/const",keyword:"const",params:{allowedValue: "ST"},message:"must be equal to constant",schema:"ST",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[208],data:data16};
if(vErrors === null){
vErrors = [err285];
}
else {
vErrors.push(err285);
}
errors++;
}
var _valid5 = _errs284 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 208];
}
else {
if(_valid5){
valid12 = true;
passing5 = 208;
}
const _errs285 = errors;
if("SV" !== data16){
const err286 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/209/const",keyword:"const",params:{allowedValue: "SV"},message:"must be equal to constant",schema:"SV",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[209],data:data16};
if(vErrors === null){
vErrors = [err286];
}
else {
vErrors.push(err286);
}
errors++;
}
var _valid5 = _errs285 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 209];
}
else {
if(_valid5){
valid12 = true;
passing5 = 209;
}
const _errs286 = errors;
if("SX" !== data16){
const err287 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/210/const",keyword:"const",params:{allowedValue: "SX"},message:"must be equal to constant",schema:"SX",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[210],data:data16};
if(vErrors === null){
vErrors = [err287];
}
else {
vErrors.push(err287);
}
errors++;
}
var _valid5 = _errs286 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 210];
}
else {
if(_valid5){
valid12 = true;
passing5 = 210;
}
const _errs287 = errors;
if("SY" !== data16){
const err288 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/211/const",keyword:"const",params:{allowedValue: "SY"},message:"must be equal to constant",schema:"SY",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[211],data:data16};
if(vErrors === null){
vErrors = [err288];
}
else {
vErrors.push(err288);
}
errors++;
}
var _valid5 = _errs287 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 211];
}
else {
if(_valid5){
valid12 = true;
passing5 = 211;
}
const _errs288 = errors;
if("SZ" !== data16){
const err289 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/212/const",keyword:"const",params:{allowedValue: "SZ"},message:"must be equal to constant",schema:"SZ",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[212],data:data16};
if(vErrors === null){
vErrors = [err289];
}
else {
vErrors.push(err289);
}
errors++;
}
var _valid5 = _errs288 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 212];
}
else {
if(_valid5){
valid12 = true;
passing5 = 212;
}
const _errs289 = errors;
if("TC" !== data16){
const err290 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/213/const",keyword:"const",params:{allowedValue: "TC"},message:"must be equal to constant",schema:"TC",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[213],data:data16};
if(vErrors === null){
vErrors = [err290];
}
else {
vErrors.push(err290);
}
errors++;
}
var _valid5 = _errs289 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 213];
}
else {
if(_valid5){
valid12 = true;
passing5 = 213;
}
const _errs290 = errors;
if("TD" !== data16){
const err291 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/214/const",keyword:"const",params:{allowedValue: "TD"},message:"must be equal to constant",schema:"TD",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[214],data:data16};
if(vErrors === null){
vErrors = [err291];
}
else {
vErrors.push(err291);
}
errors++;
}
var _valid5 = _errs290 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 214];
}
else {
if(_valid5){
valid12 = true;
passing5 = 214;
}
const _errs291 = errors;
if("TF" !== data16){
const err292 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/215/const",keyword:"const",params:{allowedValue: "TF"},message:"must be equal to constant",schema:"TF",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[215],data:data16};
if(vErrors === null){
vErrors = [err292];
}
else {
vErrors.push(err292);
}
errors++;
}
var _valid5 = _errs291 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 215];
}
else {
if(_valid5){
valid12 = true;
passing5 = 215;
}
const _errs292 = errors;
if("TG" !== data16){
const err293 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/216/const",keyword:"const",params:{allowedValue: "TG"},message:"must be equal to constant",schema:"TG",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[216],data:data16};
if(vErrors === null){
vErrors = [err293];
}
else {
vErrors.push(err293);
}
errors++;
}
var _valid5 = _errs292 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 216];
}
else {
if(_valid5){
valid12 = true;
passing5 = 216;
}
const _errs293 = errors;
if("TH" !== data16){
const err294 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/217/const",keyword:"const",params:{allowedValue: "TH"},message:"must be equal to constant",schema:"TH",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[217],data:data16};
if(vErrors === null){
vErrors = [err294];
}
else {
vErrors.push(err294);
}
errors++;
}
var _valid5 = _errs293 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 217];
}
else {
if(_valid5){
valid12 = true;
passing5 = 217;
}
const _errs294 = errors;
if("TJ" !== data16){
const err295 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/218/const",keyword:"const",params:{allowedValue: "TJ"},message:"must be equal to constant",schema:"TJ",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[218],data:data16};
if(vErrors === null){
vErrors = [err295];
}
else {
vErrors.push(err295);
}
errors++;
}
var _valid5 = _errs294 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 218];
}
else {
if(_valid5){
valid12 = true;
passing5 = 218;
}
const _errs295 = errors;
if("TK" !== data16){
const err296 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/219/const",keyword:"const",params:{allowedValue: "TK"},message:"must be equal to constant",schema:"TK",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[219],data:data16};
if(vErrors === null){
vErrors = [err296];
}
else {
vErrors.push(err296);
}
errors++;
}
var _valid5 = _errs295 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 219];
}
else {
if(_valid5){
valid12 = true;
passing5 = 219;
}
const _errs296 = errors;
if("TL" !== data16){
const err297 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/220/const",keyword:"const",params:{allowedValue: "TL"},message:"must be equal to constant",schema:"TL",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[220],data:data16};
if(vErrors === null){
vErrors = [err297];
}
else {
vErrors.push(err297);
}
errors++;
}
var _valid5 = _errs296 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 220];
}
else {
if(_valid5){
valid12 = true;
passing5 = 220;
}
const _errs297 = errors;
if("TM" !== data16){
const err298 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/221/const",keyword:"const",params:{allowedValue: "TM"},message:"must be equal to constant",schema:"TM",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[221],data:data16};
if(vErrors === null){
vErrors = [err298];
}
else {
vErrors.push(err298);
}
errors++;
}
var _valid5 = _errs297 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 221];
}
else {
if(_valid5){
valid12 = true;
passing5 = 221;
}
const _errs298 = errors;
if("TN" !== data16){
const err299 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/222/const",keyword:"const",params:{allowedValue: "TN"},message:"must be equal to constant",schema:"TN",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[222],data:data16};
if(vErrors === null){
vErrors = [err299];
}
else {
vErrors.push(err299);
}
errors++;
}
var _valid5 = _errs298 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 222];
}
else {
if(_valid5){
valid12 = true;
passing5 = 222;
}
const _errs299 = errors;
if("TO" !== data16){
const err300 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/223/const",keyword:"const",params:{allowedValue: "TO"},message:"must be equal to constant",schema:"TO",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[223],data:data16};
if(vErrors === null){
vErrors = [err300];
}
else {
vErrors.push(err300);
}
errors++;
}
var _valid5 = _errs299 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 223];
}
else {
if(_valid5){
valid12 = true;
passing5 = 223;
}
const _errs300 = errors;
if("TR" !== data16){
const err301 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/224/const",keyword:"const",params:{allowedValue: "TR"},message:"must be equal to constant",schema:"TR",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[224],data:data16};
if(vErrors === null){
vErrors = [err301];
}
else {
vErrors.push(err301);
}
errors++;
}
var _valid5 = _errs300 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 224];
}
else {
if(_valid5){
valid12 = true;
passing5 = 224;
}
const _errs301 = errors;
if("TT" !== data16){
const err302 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/225/const",keyword:"const",params:{allowedValue: "TT"},message:"must be equal to constant",schema:"TT",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[225],data:data16};
if(vErrors === null){
vErrors = [err302];
}
else {
vErrors.push(err302);
}
errors++;
}
var _valid5 = _errs301 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 225];
}
else {
if(_valid5){
valid12 = true;
passing5 = 225;
}
const _errs302 = errors;
if("TV" !== data16){
const err303 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/226/const",keyword:"const",params:{allowedValue: "TV"},message:"must be equal to constant",schema:"TV",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[226],data:data16};
if(vErrors === null){
vErrors = [err303];
}
else {
vErrors.push(err303);
}
errors++;
}
var _valid5 = _errs302 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 226];
}
else {
if(_valid5){
valid12 = true;
passing5 = 226;
}
const _errs303 = errors;
if("TW" !== data16){
const err304 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/227/const",keyword:"const",params:{allowedValue: "TW"},message:"must be equal to constant",schema:"TW",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[227],data:data16};
if(vErrors === null){
vErrors = [err304];
}
else {
vErrors.push(err304);
}
errors++;
}
var _valid5 = _errs303 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 227];
}
else {
if(_valid5){
valid12 = true;
passing5 = 227;
}
const _errs304 = errors;
if("TZ" !== data16){
const err305 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/228/const",keyword:"const",params:{allowedValue: "TZ"},message:"must be equal to constant",schema:"TZ",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[228],data:data16};
if(vErrors === null){
vErrors = [err305];
}
else {
vErrors.push(err305);
}
errors++;
}
var _valid5 = _errs304 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 228];
}
else {
if(_valid5){
valid12 = true;
passing5 = 228;
}
const _errs305 = errors;
if("UA" !== data16){
const err306 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/229/const",keyword:"const",params:{allowedValue: "UA"},message:"must be equal to constant",schema:"UA",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[229],data:data16};
if(vErrors === null){
vErrors = [err306];
}
else {
vErrors.push(err306);
}
errors++;
}
var _valid5 = _errs305 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 229];
}
else {
if(_valid5){
valid12 = true;
passing5 = 229;
}
const _errs306 = errors;
if("UG" !== data16){
const err307 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/230/const",keyword:"const",params:{allowedValue: "UG"},message:"must be equal to constant",schema:"UG",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[230],data:data16};
if(vErrors === null){
vErrors = [err307];
}
else {
vErrors.push(err307);
}
errors++;
}
var _valid5 = _errs306 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 230];
}
else {
if(_valid5){
valid12 = true;
passing5 = 230;
}
const _errs307 = errors;
if("UM" !== data16){
const err308 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/231/const",keyword:"const",params:{allowedValue: "UM"},message:"must be equal to constant",schema:"UM",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[231],data:data16};
if(vErrors === null){
vErrors = [err308];
}
else {
vErrors.push(err308);
}
errors++;
}
var _valid5 = _errs307 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 231];
}
else {
if(_valid5){
valid12 = true;
passing5 = 231;
}
const _errs308 = errors;
if("US" !== data16){
const err309 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/232/const",keyword:"const",params:{allowedValue: "US"},message:"must be equal to constant",schema:"US",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[232],data:data16};
if(vErrors === null){
vErrors = [err309];
}
else {
vErrors.push(err309);
}
errors++;
}
var _valid5 = _errs308 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 232];
}
else {
if(_valid5){
valid12 = true;
passing5 = 232;
}
const _errs309 = errors;
if("UY" !== data16){
const err310 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/233/const",keyword:"const",params:{allowedValue: "UY"},message:"must be equal to constant",schema:"UY",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[233],data:data16};
if(vErrors === null){
vErrors = [err310];
}
else {
vErrors.push(err310);
}
errors++;
}
var _valid5 = _errs309 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 233];
}
else {
if(_valid5){
valid12 = true;
passing5 = 233;
}
const _errs310 = errors;
if("UZ" !== data16){
const err311 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/234/const",keyword:"const",params:{allowedValue: "UZ"},message:"must be equal to constant",schema:"UZ",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[234],data:data16};
if(vErrors === null){
vErrors = [err311];
}
else {
vErrors.push(err311);
}
errors++;
}
var _valid5 = _errs310 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 234];
}
else {
if(_valid5){
valid12 = true;
passing5 = 234;
}
const _errs311 = errors;
if("VA" !== data16){
const err312 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/235/const",keyword:"const",params:{allowedValue: "VA"},message:"must be equal to constant",schema:"VA",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[235],data:data16};
if(vErrors === null){
vErrors = [err312];
}
else {
vErrors.push(err312);
}
errors++;
}
var _valid5 = _errs311 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 235];
}
else {
if(_valid5){
valid12 = true;
passing5 = 235;
}
const _errs312 = errors;
if("VC" !== data16){
const err313 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/236/const",keyword:"const",params:{allowedValue: "VC"},message:"must be equal to constant",schema:"VC",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[236],data:data16};
if(vErrors === null){
vErrors = [err313];
}
else {
vErrors.push(err313);
}
errors++;
}
var _valid5 = _errs312 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 236];
}
else {
if(_valid5){
valid12 = true;
passing5 = 236;
}
const _errs313 = errors;
if("VE" !== data16){
const err314 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/237/const",keyword:"const",params:{allowedValue: "VE"},message:"must be equal to constant",schema:"VE",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[237],data:data16};
if(vErrors === null){
vErrors = [err314];
}
else {
vErrors.push(err314);
}
errors++;
}
var _valid5 = _errs313 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 237];
}
else {
if(_valid5){
valid12 = true;
passing5 = 237;
}
const _errs314 = errors;
if("VG" !== data16){
const err315 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/238/const",keyword:"const",params:{allowedValue: "VG"},message:"must be equal to constant",schema:"VG",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[238],data:data16};
if(vErrors === null){
vErrors = [err315];
}
else {
vErrors.push(err315);
}
errors++;
}
var _valid5 = _errs314 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 238];
}
else {
if(_valid5){
valid12 = true;
passing5 = 238;
}
const _errs315 = errors;
if("VI" !== data16){
const err316 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/239/const",keyword:"const",params:{allowedValue: "VI"},message:"must be equal to constant",schema:"VI",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[239],data:data16};
if(vErrors === null){
vErrors = [err316];
}
else {
vErrors.push(err316);
}
errors++;
}
var _valid5 = _errs315 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 239];
}
else {
if(_valid5){
valid12 = true;
passing5 = 239;
}
const _errs316 = errors;
if("VN" !== data16){
const err317 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/240/const",keyword:"const",params:{allowedValue: "VN"},message:"must be equal to constant",schema:"VN",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[240],data:data16};
if(vErrors === null){
vErrors = [err317];
}
else {
vErrors.push(err317);
}
errors++;
}
var _valid5 = _errs316 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 240];
}
else {
if(_valid5){
valid12 = true;
passing5 = 240;
}
const _errs317 = errors;
if("VU" !== data16){
const err318 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/241/const",keyword:"const",params:{allowedValue: "VU"},message:"must be equal to constant",schema:"VU",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[241],data:data16};
if(vErrors === null){
vErrors = [err318];
}
else {
vErrors.push(err318);
}
errors++;
}
var _valid5 = _errs317 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 241];
}
else {
if(_valid5){
valid12 = true;
passing5 = 241;
}
const _errs318 = errors;
if("WF" !== data16){
const err319 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/242/const",keyword:"const",params:{allowedValue: "WF"},message:"must be equal to constant",schema:"WF",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[242],data:data16};
if(vErrors === null){
vErrors = [err319];
}
else {
vErrors.push(err319);
}
errors++;
}
var _valid5 = _errs318 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 242];
}
else {
if(_valid5){
valid12 = true;
passing5 = 242;
}
const _errs319 = errors;
if("WS" !== data16){
const err320 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/243/const",keyword:"const",params:{allowedValue: "WS"},message:"must be equal to constant",schema:"WS",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[243],data:data16};
if(vErrors === null){
vErrors = [err320];
}
else {
vErrors.push(err320);
}
errors++;
}
var _valid5 = _errs319 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 243];
}
else {
if(_valid5){
valid12 = true;
passing5 = 243;
}
const _errs320 = errors;
if("YE" !== data16){
const err321 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/244/const",keyword:"const",params:{allowedValue: "YE"},message:"must be equal to constant",schema:"YE",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[244],data:data16};
if(vErrors === null){
vErrors = [err321];
}
else {
vErrors.push(err321);
}
errors++;
}
var _valid5 = _errs320 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 244];
}
else {
if(_valid5){
valid12 = true;
passing5 = 244;
}
const _errs321 = errors;
if("YT" !== data16){
const err322 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/245/const",keyword:"const",params:{allowedValue: "YT"},message:"must be equal to constant",schema:"YT",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[245],data:data16};
if(vErrors === null){
vErrors = [err322];
}
else {
vErrors.push(err322);
}
errors++;
}
var _valid5 = _errs321 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 245];
}
else {
if(_valid5){
valid12 = true;
passing5 = 245;
}
const _errs322 = errors;
if("ZA" !== data16){
const err323 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/246/const",keyword:"const",params:{allowedValue: "ZA"},message:"must be equal to constant",schema:"ZA",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[246],data:data16};
if(vErrors === null){
vErrors = [err323];
}
else {
vErrors.push(err323);
}
errors++;
}
var _valid5 = _errs322 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 246];
}
else {
if(_valid5){
valid12 = true;
passing5 = 246;
}
const _errs323 = errors;
if("ZM" !== data16){
const err324 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/247/const",keyword:"const",params:{allowedValue: "ZM"},message:"must be equal to constant",schema:"ZM",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[247],data:data16};
if(vErrors === null){
vErrors = [err324];
}
else {
vErrors.push(err324);
}
errors++;
}
var _valid5 = _errs323 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 247];
}
else {
if(_valid5){
valid12 = true;
passing5 = 247;
}
const _errs324 = errors;
if("ZW" !== data16){
const err325 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf/248/const",keyword:"const",params:{allowedValue: "ZW"},message:"must be equal to constant",schema:"ZW",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf[248],data:data16};
if(vErrors === null){
vErrors = [err325];
}
else {
vErrors.push(err325);
}
errors++;
}
var _valid5 = _errs324 === errors;
if(_valid5 && valid12){
valid12 = false;
passing5 = [passing5, 248];
}
else {
if(_valid5){
valid12 = true;
passing5 = 248;
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
if(!valid12){
const err326 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/oneOf",keyword:"oneOf",params:{passingSchemas: passing5},message:"must match exactly one schema in oneOf",schema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.oneOf,parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co,data:data16};
if(vErrors === null){
vErrors = [err326];
}
else {
vErrors.push(err326);
}
errors++;
}
else {
errors = _errs75;
if(vErrors !== null){
if(_errs75){
vErrors.length = _errs75;
}
else {
vErrors = null;
}
}
}
if(typeof data16 === "string"){
if(!pattern8.test(data16)){
const err327 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/pattern",keyword:"pattern",params:{pattern: "[A-Z]{1,10}"},message:"must match pattern \""+"[A-Z]{1,10}"+"\"",schema:"[A-Z]{1,10}",parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co,data:data16};
if(vErrors === null){
vErrors = [err327];
}
else {
vErrors.push(err327);
}
errors++;
}
}
else {
const err328 = {instancePath:instancePath+"/v/" + i0+"/co",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/co/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co.type,parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.co,data:data16};
if(vErrors === null){
vErrors = [err328];
}
else {
vErrors.push(err328);
}
errors++;
}
}
if(data8.is !== undefined){
let data17 = data8.is;
if(typeof data17 === "string"){
if(func3(data17) > 80){
const err329 = {instancePath:instancePath+"/v/" + i0+"/is",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/is/maxLength",keyword:"maxLength",params:{limit: 80},message:"must NOT have more than 80 characters",schema:80,parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.is,data:data17};
if(vErrors === null){
vErrors = [err329];
}
else {
vErrors.push(err329);
}
errors++;
}
}
else {
const err330 = {instancePath:instancePath+"/v/" + i0+"/is",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/is/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.allOf[1].oneOf[0].properties.v.items.properties.is.type,parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.is,data:data17};
if(vErrors === null){
vErrors = [err330];
}
else {
vErrors.push(err330);
}
errors++;
}
}
if(data8.ci !== undefined){
let data18 = data8.ci;
if(typeof data18 === "string"){
if(func3(data18) > 80){
const err331 = {instancePath:instancePath+"/v/" + i0+"/ci",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/ci/maxLength",keyword:"maxLength",params:{limit: 80},message:"must NOT have more than 80 characters",schema:80,parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.ci,data:data18};
if(vErrors === null){
vErrors = [err331];
}
else {
vErrors.push(err331);
}
errors++;
}
}
else {
const err332 = {instancePath:instancePath+"/v/" + i0+"/ci",schemaPath:"#/allOf/1/oneOf/0/properties/v/items/properties/ci/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.allOf[1].oneOf[0].properties.v.items.properties.ci.type,parentSchema:schema31.allOf[1].oneOf[0].properties.v.items.properties.ci,data:data18};
if(vErrors === null){
vErrors = [err332];
}
else {
vErrors.push(err332);
}
errors++;
}
}
}
else {
const err333 = {instancePath:instancePath+"/v/" + i0,schemaPath:"#/allOf/1/oneOf/0/properties/v/items/type",keyword:"type",params:{type: "object"},message:"must be object",schema:schema31.allOf[1].oneOf[0].properties.v.items.type,parentSchema:schema31.allOf[1].oneOf[0].properties.v.items,data:data8};
if(vErrors === null){
vErrors = [err333];
}
else {
vErrors.push(err333);
}
errors++;
}
}
}
else {
const err334 = {instancePath:instancePath+"/v",schemaPath:"#/allOf/1/oneOf/0/properties/v/type",keyword:"type",params:{type: "array"},message:"must be array",schema:schema31.allOf[1].oneOf[0].properties.v.type,parentSchema:schema31.allOf[1].oneOf[0].properties.v,data:data7};
if(vErrors === null){
vErrors = [err334];
}
else {
vErrors.push(err334);
}
errors++;
}
}
}
var _valid0 = _errs19 === errors;
if(_valid0){
valid3 = true;
passing0 = 0;
var props0 = {};
props0.v = true;
}
const _errs329 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.t === undefined){
const err335 = {instancePath,schemaPath:"#/allOf/1/oneOf/1/required",keyword:"required",params:{missingProperty: "t"},message:"must have required property '"+"t"+"'",schema:schema31.allOf[1].oneOf[1].required,parentSchema:schema31.allOf[1].oneOf[1],data};
if(vErrors === null){
vErrors = [err335];
}
else {
vErrors.push(err335);
}
errors++;
}
if(data.t !== undefined){
let data19 = data.t;
if(Array.isArray(data19)){
if(data19.length > 1){
const err336 = {instancePath:instancePath+"/t",schemaPath:"#/allOf/1/oneOf/1/properties/t/maxItems",keyword:"maxItems",params:{limit: 1},message:"must NOT have more than 1 items",schema:1,parentSchema:schema31.allOf[1].oneOf[1].properties.t,data:data19};
if(vErrors === null){
vErrors = [err336];
}
else {
vErrors.push(err336);
}
errors++;
}
if(data19.length < 1){
const err337 = {instancePath:instancePath+"/t",schemaPath:"#/allOf/1/oneOf/1/properties/t/minItems",keyword:"minItems",params:{limit: 1},message:"must NOT have fewer than 1 items",schema:1,parentSchema:schema31.allOf[1].oneOf[1].properties.t,data:data19};
if(vErrors === null){
vErrors = [err337];
}
else {
vErrors.push(err337);
}
errors++;
}
const len1 = data19.length;
for(let i1=0; i1<len1; i1++){
let data20 = data19[i1];
if(data20 && typeof data20 == "object" && !Array.isArray(data20)){
if(data20.tg === undefined){
const err338 = {instancePath:instancePath+"/t/" + i1,schemaPath:"#/allOf/1/oneOf/1/properties/t/items/required",keyword:"required",params:{missingProperty: "tg"},message:"must have required property '"+"tg"+"'",schema:schema31.allOf[1].oneOf[1].properties.t.items.required,parentSchema:schema31.allOf[1].oneOf[1].properties.t.items,data:data20};
if(vErrors === null){
vErrors = [err338];
}
else {
vErrors.push(err338);
}
errors++;
}
if(data20.tt === undefined){
const err339 = {instancePath:instancePath+"/t/" + i1,schemaPath:"#/allOf/1/oneOf/1/properties/t/items/required",keyword:"required",params:{missingProperty: "tt"},message:"must have required property '"+"tt"+"'",schema:schema31.allOf[1].oneOf[1].properties.t.items.required,parentSchema:schema31.allOf[1].oneOf[1].properties.t.items,data:data20};
if(vErrors === null){
vErrors = [err339];
}
else {
vErrors.push(err339);
}
errors++;
}
if(data20.sc === undefined){
const err340 = {instancePath:instancePath+"/t/" + i1,schemaPath:"#/allOf/1/oneOf/1/properties/t/items/required",keyword:"required",params:{missingProperty: "sc"},message:"must have required property '"+"sc"+"'",schema:schema31.allOf[1].oneOf[1].properties.t.items.required,parentSchema:schema31.allOf[1].oneOf[1].properties.t.items,data:data20};
if(vErrors === null){
vErrors = [err340];
}
else {
vErrors.push(err340);
}
errors++;
}
if(data20.tr === undefined){
const err341 = {instancePath:instancePath+"/t/" + i1,schemaPath:"#/allOf/1/oneOf/1/properties/t/items/required",keyword:"required",params:{missingProperty: "tr"},message:"must have required property '"+"tr"+"'",schema:schema31.allOf[1].oneOf[1].properties.t.items.required,parentSchema:schema31.allOf[1].oneOf[1].properties.t.items,data:data20};
if(vErrors === null){
vErrors = [err341];
}
else {
vErrors.push(err341);
}
errors++;
}
if(data20.tc === undefined){
const err342 = {instancePath:instancePath+"/t/" + i1,schemaPath:"#/allOf/1/oneOf/1/properties/t/items/required",keyword:"required",params:{missingProperty: "tc"},message:"must have required property '"+"tc"+"'",schema:schema31.allOf[1].oneOf[1].properties.t.items.required,parentSchema:schema31.allOf[1].oneOf[1].properties.t.items,data:data20};
if(vErrors === null){
vErrors = [err342];
}
else {
vErrors.push(err342);
}
errors++;
}
if(data20.co === undefined){
const err343 = {instancePath:instancePath+"/t/" + i1,schemaPath:"#/allOf/1/oneOf/1/properties/t/items/required",keyword:"required",params:{missingProperty: "co"},message:"must have required property '"+"co"+"'",schema:schema31.allOf[1].oneOf[1].properties.t.items.required,parentSchema:schema31.allOf[1].oneOf[1].properties.t.items,data:data20};
if(vErrors === null){
vErrors = [err343];
}
else {
vErrors.push(err343);
}
errors++;
}
if(data20.is === undefined){
const err344 = {instancePath:instancePath+"/t/" + i1,schemaPath:"#/allOf/1/oneOf/1/properties/t/items/required",keyword:"required",params:{missingProperty: "is"},message:"must have required property '"+"is"+"'",schema:schema31.allOf[1].oneOf[1].properties.t.items.required,parentSchema:schema31.allOf[1].oneOf[1].properties.t.items,data:data20};
if(vErrors === null){
vErrors = [err344];
}
else {
vErrors.push(err344);
}
errors++;
}
if(data20.ci === undefined){
const err345 = {instancePath:instancePath+"/t/" + i1,schemaPath:"#/allOf/1/oneOf/1/properties/t/items/required",keyword:"required",params:{missingProperty: "ci"},message:"must have required property '"+"ci"+"'",schema:schema31.allOf[1].oneOf[1].properties.t.items.required,parentSchema:schema31.allOf[1].oneOf[1].properties.t.items,data:data20};
if(vErrors === null){
vErrors = [err345];
}
else {
vErrors.push(err345);
}
errors++;
}
if(data20.tg !== undefined){
let data21 = data20.tg;
if(typeof data21 !== "string"){
const err346 = {instancePath:instancePath+"/t/" + i1+"/tg",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/tg/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.allOf[1].oneOf[1].properties.t.items.properties.tg.type,parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.tg,data:data21};
if(vErrors === null){
vErrors = [err346];
}
else {
vErrors.push(err346);
}
errors++;
}
const _errs336 = errors;
let valid17 = false;
let passing6 = null;
const _errs337 = errors;
if("840539006" !== data21){
const err347 = {instancePath:instancePath+"/t/" + i1+"/tg",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/tg/oneOf/0/const",keyword:"const",params:{allowedValue: "840539006"},message:"must be equal to constant",schema:"840539006",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.tg.oneOf[0],data:data21};
if(vErrors === null){
vErrors = [err347];
}
else {
vErrors.push(err347);
}
errors++;
}
var _valid6 = _errs337 === errors;
if(_valid6){
valid17 = true;
passing6 = 0;
}
if(!valid17){
const err348 = {instancePath:instancePath+"/t/" + i1+"/tg",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/tg/oneOf",keyword:"oneOf",params:{passingSchemas: passing6},message:"must match exactly one schema in oneOf",schema:schema31.allOf[1].oneOf[1].properties.t.items.properties.tg.oneOf,parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.tg,data:data21};
if(vErrors === null){
vErrors = [err348];
}
else {
vErrors.push(err348);
}
errors++;
}
else {
errors = _errs336;
if(vErrors !== null){
if(_errs336){
vErrors.length = _errs336;
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
const err349 = {instancePath:instancePath+"/t/" + i1+"/tt",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/tt/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.allOf[1].oneOf[1].properties.t.items.properties.tt.type,parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.tt,data:data22};
if(vErrors === null){
vErrors = [err349];
}
else {
vErrors.push(err349);
}
errors++;
}
const _errs340 = errors;
let valid18 = false;
let passing7 = null;
const _errs341 = errors;
if("LP6464-4" !== data22){
const err350 = {instancePath:instancePath+"/t/" + i1+"/tt",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/tt/oneOf/0/const",keyword:"const",params:{allowedValue: "LP6464-4"},message:"must be equal to constant",schema:"LP6464-4",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.tt.oneOf[0],data:data22};
if(vErrors === null){
vErrors = [err350];
}
else {
vErrors.push(err350);
}
errors++;
}
var _valid7 = _errs341 === errors;
if(_valid7){
valid18 = true;
passing7 = 0;
}
const _errs342 = errors;
if("LP217198-3" !== data22){
const err351 = {instancePath:instancePath+"/t/" + i1+"/tt",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/tt/oneOf/1/const",keyword:"const",params:{allowedValue: "LP217198-3"},message:"must be equal to constant",schema:"LP217198-3",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.tt.oneOf[1],data:data22};
if(vErrors === null){
vErrors = [err351];
}
else {
vErrors.push(err351);
}
errors++;
}
var _valid7 = _errs342 === errors;
if(_valid7 && valid18){
valid18 = false;
passing7 = [passing7, 1];
}
else {
if(_valid7){
valid18 = true;
passing7 = 1;
}
}
if(!valid18){
const err352 = {instancePath:instancePath+"/t/" + i1+"/tt",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/tt/oneOf",keyword:"oneOf",params:{passingSchemas: passing7},message:"must match exactly one schema in oneOf",schema:schema31.allOf[1].oneOf[1].properties.t.items.properties.tt.oneOf,parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.tt,data:data22};
if(vErrors === null){
vErrors = [err352];
}
else {
vErrors.push(err352);
}
errors++;
}
else {
errors = _errs340;
if(vErrors !== null){
if(_errs340){
vErrors.length = _errs340;
}
else {
vErrors = null;
}
}
}
}
if(data20.nm !== undefined){
let data23 = data20.nm;
if(typeof data23 === "string"){
if(func3(data23) > 80){
const err353 = {instancePath:instancePath+"/t/" + i1+"/nm",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/nm/maxLength",keyword:"maxLength",params:{limit: 80},message:"must NOT have more than 80 characters",schema:80,parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.nm,data:data23};
if(vErrors === null){
vErrors = [err353];
}
else {
vErrors.push(err353);
}
errors++;
}
}
else {
const err354 = {instancePath:instancePath+"/t/" + i1+"/nm",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/nm/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.allOf[1].oneOf[1].properties.t.items.properties.nm.type,parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.nm,data:data23};
if(vErrors === null){
vErrors = [err354];
}
else {
vErrors.push(err354);
}
errors++;
}
}
if(data20.ma !== undefined){
let data24 = data20.ma;
if(typeof data24 !== "string"){
const err355 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.type,parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma,data:data24};
if(vErrors === null){
vErrors = [err355];
}
else {
vErrors.push(err355);
}
errors++;
}
const _errs347 = errors;
let valid19 = false;
let passing8 = null;
const _errs348 = errors;
if("308" !== data24){
const err356 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/0/const",keyword:"const",params:{allowedValue: "308"},message:"must be equal to constant",schema:"308",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[0],data:data24};
if(vErrors === null){
vErrors = [err356];
}
else {
vErrors.push(err356);
}
errors++;
}
var _valid8 = _errs348 === errors;
if(_valid8){
valid19 = true;
passing8 = 0;
}
const _errs349 = errors;
if("344" !== data24){
const err357 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/1/const",keyword:"const",params:{allowedValue: "344"},message:"must be equal to constant",schema:"344",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[1],data:data24};
if(vErrors === null){
vErrors = [err357];
}
else {
vErrors.push(err357);
}
errors++;
}
var _valid8 = _errs349 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 1];
}
else {
if(_valid8){
valid19 = true;
passing8 = 1;
}
const _errs350 = errors;
if("345" !== data24){
const err358 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/2/const",keyword:"const",params:{allowedValue: "345"},message:"must be equal to constant",schema:"345",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[2],data:data24};
if(vErrors === null){
vErrors = [err358];
}
else {
vErrors.push(err358);
}
errors++;
}
var _valid8 = _errs350 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 2];
}
else {
if(_valid8){
valid19 = true;
passing8 = 2;
}
const _errs351 = errors;
if("768" !== data24){
const err359 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/3/const",keyword:"const",params:{allowedValue: "768"},message:"must be equal to constant",schema:"768",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[3],data:data24};
if(vErrors === null){
vErrors = [err359];
}
else {
vErrors.push(err359);
}
errors++;
}
var _valid8 = _errs351 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 3];
}
else {
if(_valid8){
valid19 = true;
passing8 = 3;
}
const _errs352 = errors;
if("1065" !== data24){
const err360 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/4/const",keyword:"const",params:{allowedValue: "1065"},message:"must be equal to constant",schema:"1065",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[4],data:data24};
if(vErrors === null){
vErrors = [err360];
}
else {
vErrors.push(err360);
}
errors++;
}
var _valid8 = _errs352 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 4];
}
else {
if(_valid8){
valid19 = true;
passing8 = 4;
}
const _errs353 = errors;
if("1097" !== data24){
const err361 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/5/const",keyword:"const",params:{allowedValue: "1097"},message:"must be equal to constant",schema:"1097",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[5],data:data24};
if(vErrors === null){
vErrors = [err361];
}
else {
vErrors.push(err361);
}
errors++;
}
var _valid8 = _errs353 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 5];
}
else {
if(_valid8){
valid19 = true;
passing8 = 5;
}
const _errs354 = errors;
if("1114" !== data24){
const err362 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/6/const",keyword:"const",params:{allowedValue: "1114"},message:"must be equal to constant",schema:"1114",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[6],data:data24};
if(vErrors === null){
vErrors = [err362];
}
else {
vErrors.push(err362);
}
errors++;
}
var _valid8 = _errs354 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 6];
}
else {
if(_valid8){
valid19 = true;
passing8 = 6;
}
const _errs355 = errors;
if("1144" !== data24){
const err363 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/7/const",keyword:"const",params:{allowedValue: "1144"},message:"must be equal to constant",schema:"1144",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[7],data:data24};
if(vErrors === null){
vErrors = [err363];
}
else {
vErrors.push(err363);
}
errors++;
}
var _valid8 = _errs355 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 7];
}
else {
if(_valid8){
valid19 = true;
passing8 = 7;
}
const _errs356 = errors;
if("1162" !== data24){
const err364 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/8/const",keyword:"const",params:{allowedValue: "1162"},message:"must be equal to constant",schema:"1162",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[8],data:data24};
if(vErrors === null){
vErrors = [err364];
}
else {
vErrors.push(err364);
}
errors++;
}
var _valid8 = _errs356 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 8];
}
else {
if(_valid8){
valid19 = true;
passing8 = 8;
}
const _errs357 = errors;
if("1173" !== data24){
const err365 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/9/const",keyword:"const",params:{allowedValue: "1173"},message:"must be equal to constant",schema:"1173",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[9],data:data24};
if(vErrors === null){
vErrors = [err365];
}
else {
vErrors.push(err365);
}
errors++;
}
var _valid8 = _errs357 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 9];
}
else {
if(_valid8){
valid19 = true;
passing8 = 9;
}
const _errs358 = errors;
if("1180" !== data24){
const err366 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/10/const",keyword:"const",params:{allowedValue: "1180"},message:"must be equal to constant",schema:"1180",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[10],data:data24};
if(vErrors === null){
vErrors = [err366];
}
else {
vErrors.push(err366);
}
errors++;
}
var _valid8 = _errs358 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 10];
}
else {
if(_valid8){
valid19 = true;
passing8 = 10;
}
const _errs359 = errors;
if("1190" !== data24){
const err367 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/11/const",keyword:"const",params:{allowedValue: "1190"},message:"must be equal to constant",schema:"1190",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[11],data:data24};
if(vErrors === null){
vErrors = [err367];
}
else {
vErrors.push(err367);
}
errors++;
}
var _valid8 = _errs359 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 11];
}
else {
if(_valid8){
valid19 = true;
passing8 = 11;
}
const _errs360 = errors;
if("1199" !== data24){
const err368 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/12/const",keyword:"const",params:{allowedValue: "1199"},message:"must be equal to constant",schema:"1199",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[12],data:data24};
if(vErrors === null){
vErrors = [err368];
}
else {
vErrors.push(err368);
}
errors++;
}
var _valid8 = _errs360 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 12];
}
else {
if(_valid8){
valid19 = true;
passing8 = 12;
}
const _errs361 = errors;
if("1215" !== data24){
const err369 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/13/const",keyword:"const",params:{allowedValue: "1215"},message:"must be equal to constant",schema:"1215",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[13],data:data24};
if(vErrors === null){
vErrors = [err369];
}
else {
vErrors.push(err369);
}
errors++;
}
var _valid8 = _errs361 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 13];
}
else {
if(_valid8){
valid19 = true;
passing8 = 13;
}
const _errs362 = errors;
if("1218" !== data24){
const err370 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/14/const",keyword:"const",params:{allowedValue: "1218"},message:"must be equal to constant",schema:"1218",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[14],data:data24};
if(vErrors === null){
vErrors = [err370];
}
else {
vErrors.push(err370);
}
errors++;
}
var _valid8 = _errs362 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 14];
}
else {
if(_valid8){
valid19 = true;
passing8 = 14;
}
const _errs363 = errors;
if("1223" !== data24){
const err371 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/15/const",keyword:"const",params:{allowedValue: "1223"},message:"must be equal to constant",schema:"1223",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[15],data:data24};
if(vErrors === null){
vErrors = [err371];
}
else {
vErrors.push(err371);
}
errors++;
}
var _valid8 = _errs363 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 15];
}
else {
if(_valid8){
valid19 = true;
passing8 = 15;
}
const _errs364 = errors;
if("1225" !== data24){
const err372 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/16/const",keyword:"const",params:{allowedValue: "1225"},message:"must be equal to constant",schema:"1225",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[16],data:data24};
if(vErrors === null){
vErrors = [err372];
}
else {
vErrors.push(err372);
}
errors++;
}
var _valid8 = _errs364 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 16];
}
else {
if(_valid8){
valid19 = true;
passing8 = 16;
}
const _errs365 = errors;
if("1232" !== data24){
const err373 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/17/const",keyword:"const",params:{allowedValue: "1232"},message:"must be equal to constant",schema:"1232",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[17],data:data24};
if(vErrors === null){
vErrors = [err373];
}
else {
vErrors.push(err373);
}
errors++;
}
var _valid8 = _errs365 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 17];
}
else {
if(_valid8){
valid19 = true;
passing8 = 17;
}
const _errs366 = errors;
if("1236" !== data24){
const err374 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/18/const",keyword:"const",params:{allowedValue: "1236"},message:"must be equal to constant",schema:"1236",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[18],data:data24};
if(vErrors === null){
vErrors = [err374];
}
else {
vErrors.push(err374);
}
errors++;
}
var _valid8 = _errs366 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 18];
}
else {
if(_valid8){
valid19 = true;
passing8 = 18;
}
const _errs367 = errors;
if("1242" !== data24){
const err375 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/19/const",keyword:"const",params:{allowedValue: "1242"},message:"must be equal to constant",schema:"1242",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[19],data:data24};
if(vErrors === null){
vErrors = [err375];
}
else {
vErrors.push(err375);
}
errors++;
}
var _valid8 = _errs367 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 19];
}
else {
if(_valid8){
valid19 = true;
passing8 = 19;
}
const _errs368 = errors;
if("1244" !== data24){
const err376 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/20/const",keyword:"const",params:{allowedValue: "1244"},message:"must be equal to constant",schema:"1244",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[20],data:data24};
if(vErrors === null){
vErrors = [err376];
}
else {
vErrors.push(err376);
}
errors++;
}
var _valid8 = _errs368 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 20];
}
else {
if(_valid8){
valid19 = true;
passing8 = 20;
}
const _errs369 = errors;
if("1246" !== data24){
const err377 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/21/const",keyword:"const",params:{allowedValue: "1246"},message:"must be equal to constant",schema:"1246",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[21],data:data24};
if(vErrors === null){
vErrors = [err377];
}
else {
vErrors.push(err377);
}
errors++;
}
var _valid8 = _errs369 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 21];
}
else {
if(_valid8){
valid19 = true;
passing8 = 21;
}
const _errs370 = errors;
if("1253" !== data24){
const err378 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/22/const",keyword:"const",params:{allowedValue: "1253"},message:"must be equal to constant",schema:"1253",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[22],data:data24};
if(vErrors === null){
vErrors = [err378];
}
else {
vErrors.push(err378);
}
errors++;
}
var _valid8 = _errs370 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 22];
}
else {
if(_valid8){
valid19 = true;
passing8 = 22;
}
const _errs371 = errors;
if("1256" !== data24){
const err379 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/23/const",keyword:"const",params:{allowedValue: "1256"},message:"must be equal to constant",schema:"1256",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[23],data:data24};
if(vErrors === null){
vErrors = [err379];
}
else {
vErrors.push(err379);
}
errors++;
}
var _valid8 = _errs371 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 23];
}
else {
if(_valid8){
valid19 = true;
passing8 = 23;
}
const _errs372 = errors;
if("1263" !== data24){
const err380 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/24/const",keyword:"const",params:{allowedValue: "1263"},message:"must be equal to constant",schema:"1263",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[24],data:data24};
if(vErrors === null){
vErrors = [err380];
}
else {
vErrors.push(err380);
}
errors++;
}
var _valid8 = _errs372 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 24];
}
else {
if(_valid8){
valid19 = true;
passing8 = 24;
}
const _errs373 = errors;
if("1266" !== data24){
const err381 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/25/const",keyword:"const",params:{allowedValue: "1266"},message:"must be equal to constant",schema:"1266",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[25],data:data24};
if(vErrors === null){
vErrors = [err381];
}
else {
vErrors.push(err381);
}
errors++;
}
var _valid8 = _errs373 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 25];
}
else {
if(_valid8){
valid19 = true;
passing8 = 25;
}
const _errs374 = errors;
if("1267" !== data24){
const err382 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/26/const",keyword:"const",params:{allowedValue: "1267"},message:"must be equal to constant",schema:"1267",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[26],data:data24};
if(vErrors === null){
vErrors = [err382];
}
else {
vErrors.push(err382);
}
errors++;
}
var _valid8 = _errs374 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 26];
}
else {
if(_valid8){
valid19 = true;
passing8 = 26;
}
const _errs375 = errors;
if("1268" !== data24){
const err383 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/27/const",keyword:"const",params:{allowedValue: "1268"},message:"must be equal to constant",schema:"1268",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[27],data:data24};
if(vErrors === null){
vErrors = [err383];
}
else {
vErrors.push(err383);
}
errors++;
}
var _valid8 = _errs375 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 27];
}
else {
if(_valid8){
valid19 = true;
passing8 = 27;
}
const _errs376 = errors;
if("1271" !== data24){
const err384 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/28/const",keyword:"const",params:{allowedValue: "1271"},message:"must be equal to constant",schema:"1271",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[28],data:data24};
if(vErrors === null){
vErrors = [err384];
}
else {
vErrors.push(err384);
}
errors++;
}
var _valid8 = _errs376 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 28];
}
else {
if(_valid8){
valid19 = true;
passing8 = 28;
}
const _errs377 = errors;
if("1278" !== data24){
const err385 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/29/const",keyword:"const",params:{allowedValue: "1278"},message:"must be equal to constant",schema:"1278",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[29],data:data24};
if(vErrors === null){
vErrors = [err385];
}
else {
vErrors.push(err385);
}
errors++;
}
var _valid8 = _errs377 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 29];
}
else {
if(_valid8){
valid19 = true;
passing8 = 29;
}
const _errs378 = errors;
if("1295" !== data24){
const err386 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/30/const",keyword:"const",params:{allowedValue: "1295"},message:"must be equal to constant",schema:"1295",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[30],data:data24};
if(vErrors === null){
vErrors = [err386];
}
else {
vErrors.push(err386);
}
errors++;
}
var _valid8 = _errs378 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 30];
}
else {
if(_valid8){
valid19 = true;
passing8 = 30;
}
const _errs379 = errors;
if("1296" !== data24){
const err387 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/31/const",keyword:"const",params:{allowedValue: "1296"},message:"must be equal to constant",schema:"1296",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[31],data:data24};
if(vErrors === null){
vErrors = [err387];
}
else {
vErrors.push(err387);
}
errors++;
}
var _valid8 = _errs379 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 31];
}
else {
if(_valid8){
valid19 = true;
passing8 = 31;
}
const _errs380 = errors;
if("1304" !== data24){
const err388 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/32/const",keyword:"const",params:{allowedValue: "1304"},message:"must be equal to constant",schema:"1304",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[32],data:data24};
if(vErrors === null){
vErrors = [err388];
}
else {
vErrors.push(err388);
}
errors++;
}
var _valid8 = _errs380 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 32];
}
else {
if(_valid8){
valid19 = true;
passing8 = 32;
}
const _errs381 = errors;
if("1319" !== data24){
const err389 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/33/const",keyword:"const",params:{allowedValue: "1319"},message:"must be equal to constant",schema:"1319",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[33],data:data24};
if(vErrors === null){
vErrors = [err389];
}
else {
vErrors.push(err389);
}
errors++;
}
var _valid8 = _errs381 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 33];
}
else {
if(_valid8){
valid19 = true;
passing8 = 33;
}
const _errs382 = errors;
if("1331" !== data24){
const err390 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/34/const",keyword:"const",params:{allowedValue: "1331"},message:"must be equal to constant",schema:"1331",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[34],data:data24};
if(vErrors === null){
vErrors = [err390];
}
else {
vErrors.push(err390);
}
errors++;
}
var _valid8 = _errs382 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 34];
}
else {
if(_valid8){
valid19 = true;
passing8 = 34;
}
const _errs383 = errors;
if("1333" !== data24){
const err391 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/35/const",keyword:"const",params:{allowedValue: "1333"},message:"must be equal to constant",schema:"1333",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[35],data:data24};
if(vErrors === null){
vErrors = [err391];
}
else {
vErrors.push(err391);
}
errors++;
}
var _valid8 = _errs383 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 35];
}
else {
if(_valid8){
valid19 = true;
passing8 = 35;
}
const _errs384 = errors;
if("1341" !== data24){
const err392 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/36/const",keyword:"const",params:{allowedValue: "1341"},message:"must be equal to constant",schema:"1341",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[36],data:data24};
if(vErrors === null){
vErrors = [err392];
}
else {
vErrors.push(err392);
}
errors++;
}
var _valid8 = _errs384 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 36];
}
else {
if(_valid8){
valid19 = true;
passing8 = 36;
}
const _errs385 = errors;
if("1343" !== data24){
const err393 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/37/const",keyword:"const",params:{allowedValue: "1343"},message:"must be equal to constant",schema:"1343",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[37],data:data24};
if(vErrors === null){
vErrors = [err393];
}
else {
vErrors.push(err393);
}
errors++;
}
var _valid8 = _errs385 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 37];
}
else {
if(_valid8){
valid19 = true;
passing8 = 37;
}
const _errs386 = errors;
if("1360" !== data24){
const err394 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/38/const",keyword:"const",params:{allowedValue: "1360"},message:"must be equal to constant",schema:"1360",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[38],data:data24};
if(vErrors === null){
vErrors = [err394];
}
else {
vErrors.push(err394);
}
errors++;
}
var _valid8 = _errs386 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 38];
}
else {
if(_valid8){
valid19 = true;
passing8 = 38;
}
const _errs387 = errors;
if("1363" !== data24){
const err395 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/39/const",keyword:"const",params:{allowedValue: "1363"},message:"must be equal to constant",schema:"1363",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[39],data:data24};
if(vErrors === null){
vErrors = [err395];
}
else {
vErrors.push(err395);
}
errors++;
}
var _valid8 = _errs387 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 39];
}
else {
if(_valid8){
valid19 = true;
passing8 = 39;
}
const _errs388 = errors;
if("1365" !== data24){
const err396 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/40/const",keyword:"const",params:{allowedValue: "1365"},message:"must be equal to constant",schema:"1365",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[40],data:data24};
if(vErrors === null){
vErrors = [err396];
}
else {
vErrors.push(err396);
}
errors++;
}
var _valid8 = _errs388 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 40];
}
else {
if(_valid8){
valid19 = true;
passing8 = 40;
}
const _errs389 = errors;
if("1375" !== data24){
const err397 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/41/const",keyword:"const",params:{allowedValue: "1375"},message:"must be equal to constant",schema:"1375",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[41],data:data24};
if(vErrors === null){
vErrors = [err397];
}
else {
vErrors.push(err397);
}
errors++;
}
var _valid8 = _errs389 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 41];
}
else {
if(_valid8){
valid19 = true;
passing8 = 41;
}
const _errs390 = errors;
if("1392" !== data24){
const err398 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/42/const",keyword:"const",params:{allowedValue: "1392"},message:"must be equal to constant",schema:"1392",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[42],data:data24};
if(vErrors === null){
vErrors = [err398];
}
else {
vErrors.push(err398);
}
errors++;
}
var _valid8 = _errs390 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 42];
}
else {
if(_valid8){
valid19 = true;
passing8 = 42;
}
const _errs391 = errors;
if("1420" !== data24){
const err399 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/43/const",keyword:"const",params:{allowedValue: "1420"},message:"must be equal to constant",schema:"1420",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[43],data:data24};
if(vErrors === null){
vErrors = [err399];
}
else {
vErrors.push(err399);
}
errors++;
}
var _valid8 = _errs391 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 43];
}
else {
if(_valid8){
valid19 = true;
passing8 = 43;
}
const _errs392 = errors;
if("1437" !== data24){
const err400 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/44/const",keyword:"const",params:{allowedValue: "1437"},message:"must be equal to constant",schema:"1437",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[44],data:data24};
if(vErrors === null){
vErrors = [err400];
}
else {
vErrors.push(err400);
}
errors++;
}
var _valid8 = _errs392 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 44];
}
else {
if(_valid8){
valid19 = true;
passing8 = 44;
}
const _errs393 = errors;
if("1443" !== data24){
const err401 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/45/const",keyword:"const",params:{allowedValue: "1443"},message:"must be equal to constant",schema:"1443",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[45],data:data24};
if(vErrors === null){
vErrors = [err401];
}
else {
vErrors.push(err401);
}
errors++;
}
var _valid8 = _errs393 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 45];
}
else {
if(_valid8){
valid19 = true;
passing8 = 45;
}
const _errs394 = errors;
if("1456" !== data24){
const err402 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/46/const",keyword:"const",params:{allowedValue: "1456"},message:"must be equal to constant",schema:"1456",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[46],data:data24};
if(vErrors === null){
vErrors = [err402];
}
else {
vErrors.push(err402);
}
errors++;
}
var _valid8 = _errs394 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 46];
}
else {
if(_valid8){
valid19 = true;
passing8 = 46;
}
const _errs395 = errors;
if("1466" !== data24){
const err403 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/47/const",keyword:"const",params:{allowedValue: "1466"},message:"must be equal to constant",schema:"1466",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[47],data:data24};
if(vErrors === null){
vErrors = [err403];
}
else {
vErrors.push(err403);
}
errors++;
}
var _valid8 = _errs395 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 47];
}
else {
if(_valid8){
valid19 = true;
passing8 = 47;
}
const _errs396 = errors;
if("1468" !== data24){
const err404 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/48/const",keyword:"const",params:{allowedValue: "1468"},message:"must be equal to constant",schema:"1468",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[48],data:data24};
if(vErrors === null){
vErrors = [err404];
}
else {
vErrors.push(err404);
}
errors++;
}
var _valid8 = _errs396 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 48];
}
else {
if(_valid8){
valid19 = true;
passing8 = 48;
}
const _errs397 = errors;
if("1481" !== data24){
const err405 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/49/const",keyword:"const",params:{allowedValue: "1481"},message:"must be equal to constant",schema:"1481",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[49],data:data24};
if(vErrors === null){
vErrors = [err405];
}
else {
vErrors.push(err405);
}
errors++;
}
var _valid8 = _errs397 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 49];
}
else {
if(_valid8){
valid19 = true;
passing8 = 49;
}
const _errs398 = errors;
if("1484" !== data24){
const err406 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/50/const",keyword:"const",params:{allowedValue: "1484"},message:"must be equal to constant",schema:"1484",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[50],data:data24};
if(vErrors === null){
vErrors = [err406];
}
else {
vErrors.push(err406);
}
errors++;
}
var _valid8 = _errs398 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 50];
}
else {
if(_valid8){
valid19 = true;
passing8 = 50;
}
const _errs399 = errors;
if("1489" !== data24){
const err407 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/51/const",keyword:"const",params:{allowedValue: "1489"},message:"must be equal to constant",schema:"1489",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[51],data:data24};
if(vErrors === null){
vErrors = [err407];
}
else {
vErrors.push(err407);
}
errors++;
}
var _valid8 = _errs399 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 51];
}
else {
if(_valid8){
valid19 = true;
passing8 = 51;
}
const _errs400 = errors;
if("1490" !== data24){
const err408 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/52/const",keyword:"const",params:{allowedValue: "1490"},message:"must be equal to constant",schema:"1490",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[52],data:data24};
if(vErrors === null){
vErrors = [err408];
}
else {
vErrors.push(err408);
}
errors++;
}
var _valid8 = _errs400 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 52];
}
else {
if(_valid8){
valid19 = true;
passing8 = 52;
}
const _errs401 = errors;
if("1574" !== data24){
const err409 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/53/const",keyword:"const",params:{allowedValue: "1574"},message:"must be equal to constant",schema:"1574",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[53],data:data24};
if(vErrors === null){
vErrors = [err409];
}
else {
vErrors.push(err409);
}
errors++;
}
var _valid8 = _errs401 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 53];
}
else {
if(_valid8){
valid19 = true;
passing8 = 53;
}
const _errs402 = errors;
if("1604" !== data24){
const err410 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/54/const",keyword:"const",params:{allowedValue: "1604"},message:"must be equal to constant",schema:"1604",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[54],data:data24};
if(vErrors === null){
vErrors = [err410];
}
else {
vErrors.push(err410);
}
errors++;
}
var _valid8 = _errs402 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 54];
}
else {
if(_valid8){
valid19 = true;
passing8 = 54;
}
const _errs403 = errors;
if("1606" !== data24){
const err411 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/55/const",keyword:"const",params:{allowedValue: "1606"},message:"must be equal to constant",schema:"1606",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[55],data:data24};
if(vErrors === null){
vErrors = [err411];
}
else {
vErrors.push(err411);
}
errors++;
}
var _valid8 = _errs403 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 55];
}
else {
if(_valid8){
valid19 = true;
passing8 = 55;
}
const _errs404 = errors;
if("1654" !== data24){
const err412 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/56/const",keyword:"const",params:{allowedValue: "1654"},message:"must be equal to constant",schema:"1654",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[56],data:data24};
if(vErrors === null){
vErrors = [err412];
}
else {
vErrors.push(err412);
}
errors++;
}
var _valid8 = _errs404 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 56];
}
else {
if(_valid8){
valid19 = true;
passing8 = 56;
}
const _errs405 = errors;
if("1736" !== data24){
const err413 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/57/const",keyword:"const",params:{allowedValue: "1736"},message:"must be equal to constant",schema:"1736",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[57],data:data24};
if(vErrors === null){
vErrors = [err413];
}
else {
vErrors.push(err413);
}
errors++;
}
var _valid8 = _errs405 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 57];
}
else {
if(_valid8){
valid19 = true;
passing8 = 57;
}
const _errs406 = errors;
if("1747" !== data24){
const err414 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/58/const",keyword:"const",params:{allowedValue: "1747"},message:"must be equal to constant",schema:"1747",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[58],data:data24};
if(vErrors === null){
vErrors = [err414];
}
else {
vErrors.push(err414);
}
errors++;
}
var _valid8 = _errs406 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 58];
}
else {
if(_valid8){
valid19 = true;
passing8 = 58;
}
const _errs407 = errors;
if("1763" !== data24){
const err415 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/59/const",keyword:"const",params:{allowedValue: "1763"},message:"must be equal to constant",schema:"1763",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[59],data:data24};
if(vErrors === null){
vErrors = [err415];
}
else {
vErrors.push(err415);
}
errors++;
}
var _valid8 = _errs407 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 59];
}
else {
if(_valid8){
valid19 = true;
passing8 = 59;
}
const _errs408 = errors;
if("1764" !== data24){
const err416 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/60/const",keyword:"const",params:{allowedValue: "1764"},message:"must be equal to constant",schema:"1764",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[60],data:data24};
if(vErrors === null){
vErrors = [err416];
}
else {
vErrors.push(err416);
}
errors++;
}
var _valid8 = _errs408 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 60];
}
else {
if(_valid8){
valid19 = true;
passing8 = 60;
}
const _errs409 = errors;
if("1767" !== data24){
const err417 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/61/const",keyword:"const",params:{allowedValue: "1767"},message:"must be equal to constant",schema:"1767",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[61],data:data24};
if(vErrors === null){
vErrors = [err417];
}
else {
vErrors.push(err417);
}
errors++;
}
var _valid8 = _errs409 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 61];
}
else {
if(_valid8){
valid19 = true;
passing8 = 61;
}
const _errs410 = errors;
if("1769" !== data24){
const err418 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/62/const",keyword:"const",params:{allowedValue: "1769"},message:"must be equal to constant",schema:"1769",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[62],data:data24};
if(vErrors === null){
vErrors = [err418];
}
else {
vErrors.push(err418);
}
errors++;
}
var _valid8 = _errs410 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 62];
}
else {
if(_valid8){
valid19 = true;
passing8 = 62;
}
const _errs411 = errors;
if("1815" !== data24){
const err419 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/63/const",keyword:"const",params:{allowedValue: "1815"},message:"must be equal to constant",schema:"1815",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[63],data:data24};
if(vErrors === null){
vErrors = [err419];
}
else {
vErrors.push(err419);
}
errors++;
}
var _valid8 = _errs411 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 63];
}
else {
if(_valid8){
valid19 = true;
passing8 = 63;
}
const _errs412 = errors;
if("1822" !== data24){
const err420 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/64/const",keyword:"const",params:{allowedValue: "1822"},message:"must be equal to constant",schema:"1822",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[64],data:data24};
if(vErrors === null){
vErrors = [err420];
}
else {
vErrors.push(err420);
}
errors++;
}
var _valid8 = _errs412 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 64];
}
else {
if(_valid8){
valid19 = true;
passing8 = 64;
}
const _errs413 = errors;
if("1833" !== data24){
const err421 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/65/const",keyword:"const",params:{allowedValue: "1833"},message:"must be equal to constant",schema:"1833",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[65],data:data24};
if(vErrors === null){
vErrors = [err421];
}
else {
vErrors.push(err421);
}
errors++;
}
var _valid8 = _errs413 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 65];
}
else {
if(_valid8){
valid19 = true;
passing8 = 65;
}
const _errs414 = errors;
if("1844" !== data24){
const err422 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/66/const",keyword:"const",params:{allowedValue: "1844"},message:"must be equal to constant",schema:"1844",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[66],data:data24};
if(vErrors === null){
vErrors = [err422];
}
else {
vErrors.push(err422);
}
errors++;
}
var _valid8 = _errs414 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 66];
}
else {
if(_valid8){
valid19 = true;
passing8 = 66;
}
const _errs415 = errors;
if("1870" !== data24){
const err423 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/67/const",keyword:"const",params:{allowedValue: "1870"},message:"must be equal to constant",schema:"1870",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[67],data:data24};
if(vErrors === null){
vErrors = [err423];
}
else {
vErrors.push(err423);
}
errors++;
}
var _valid8 = _errs415 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 67];
}
else {
if(_valid8){
valid19 = true;
passing8 = 67;
}
const _errs416 = errors;
if("1884" !== data24){
const err424 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/68/const",keyword:"const",params:{allowedValue: "1884"},message:"must be equal to constant",schema:"1884",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[68],data:data24};
if(vErrors === null){
vErrors = [err424];
}
else {
vErrors.push(err424);
}
errors++;
}
var _valid8 = _errs416 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 68];
}
else {
if(_valid8){
valid19 = true;
passing8 = 68;
}
const _errs417 = errors;
if("1906" !== data24){
const err425 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/69/const",keyword:"const",params:{allowedValue: "1906"},message:"must be equal to constant",schema:"1906",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[69],data:data24};
if(vErrors === null){
vErrors = [err425];
}
else {
vErrors.push(err425);
}
errors++;
}
var _valid8 = _errs417 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 69];
}
else {
if(_valid8){
valid19 = true;
passing8 = 69;
}
const _errs418 = errors;
if("1919" !== data24){
const err426 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/70/const",keyword:"const",params:{allowedValue: "1919"},message:"must be equal to constant",schema:"1919",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[70],data:data24};
if(vErrors === null){
vErrors = [err426];
}
else {
vErrors.push(err426);
}
errors++;
}
var _valid8 = _errs418 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 70];
}
else {
if(_valid8){
valid19 = true;
passing8 = 70;
}
const _errs419 = errors;
if("1934" !== data24){
const err427 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/71/const",keyword:"const",params:{allowedValue: "1934"},message:"must be equal to constant",schema:"1934",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[71],data:data24};
if(vErrors === null){
vErrors = [err427];
}
else {
vErrors.push(err427);
}
errors++;
}
var _valid8 = _errs419 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 71];
}
else {
if(_valid8){
valid19 = true;
passing8 = 71;
}
const _errs420 = errors;
if("2010" !== data24){
const err428 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/72/const",keyword:"const",params:{allowedValue: "2010"},message:"must be equal to constant",schema:"2010",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[72],data:data24};
if(vErrors === null){
vErrors = [err428];
}
else {
vErrors.push(err428);
}
errors++;
}
var _valid8 = _errs420 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 72];
}
else {
if(_valid8){
valid19 = true;
passing8 = 72;
}
const _errs421 = errors;
if("2017" !== data24){
const err429 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf/73/const",keyword:"const",params:{allowedValue: "2017"},message:"must be equal to constant",schema:"2017",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf[73],data:data24};
if(vErrors === null){
vErrors = [err429];
}
else {
vErrors.push(err429);
}
errors++;
}
var _valid8 = _errs421 === errors;
if(_valid8 && valid19){
valid19 = false;
passing8 = [passing8, 73];
}
else {
if(_valid8){
valid19 = true;
passing8 = 73;
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
if(!valid19){
const err430 = {instancePath:instancePath+"/t/" + i1+"/ma",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ma/oneOf",keyword:"oneOf",params:{passingSchemas: passing8},message:"must match exactly one schema in oneOf",schema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma.oneOf,parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ma,data:data24};
if(vErrors === null){
vErrors = [err430];
}
else {
vErrors.push(err430);
}
errors++;
}
else {
errors = _errs347;
if(vErrors !== null){
if(_errs347){
vErrors.length = _errs347;
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
const err431 = {instancePath:instancePath+"/t/" + i1+"/sc",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/sc/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\"",schema:"date-time",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.sc,data:data25};
if(vErrors === null){
vErrors = [err431];
}
else {
vErrors.push(err431);
}
errors++;
}
}
else {
const err432 = {instancePath:instancePath+"/t/" + i1+"/sc",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/sc/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.allOf[1].oneOf[1].properties.t.items.properties.sc.type,parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.sc,data:data25};
if(vErrors === null){
vErrors = [err432];
}
else {
vErrors.push(err432);
}
errors++;
}
}
if(data20.tr !== undefined){
let data26 = data20.tr;
if(typeof data26 !== "string"){
const err433 = {instancePath:instancePath+"/t/" + i1+"/tr",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/tr/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.allOf[1].oneOf[1].properties.t.items.properties.tr.type,parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.tr,data:data26};
if(vErrors === null){
vErrors = [err433];
}
else {
vErrors.push(err433);
}
errors++;
}
const _errs426 = errors;
let valid20 = false;
let passing9 = null;
const _errs427 = errors;
if("260373001" !== data26){
const err434 = {instancePath:instancePath+"/t/" + i1+"/tr",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/tr/oneOf/0/const",keyword:"const",params:{allowedValue: "260373001"},message:"must be equal to constant",schema:"260373001",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.tr.oneOf[0],data:data26};
if(vErrors === null){
vErrors = [err434];
}
else {
vErrors.push(err434);
}
errors++;
}
var _valid9 = _errs427 === errors;
if(_valid9){
valid20 = true;
passing9 = 0;
}
const _errs428 = errors;
if("260415000" !== data26){
const err435 = {instancePath:instancePath+"/t/" + i1+"/tr",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/tr/oneOf/1/const",keyword:"const",params:{allowedValue: "260415000"},message:"must be equal to constant",schema:"260415000",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.tr.oneOf[1],data:data26};
if(vErrors === null){
vErrors = [err435];
}
else {
vErrors.push(err435);
}
errors++;
}
var _valid9 = _errs428 === errors;
if(_valid9 && valid20){
valid20 = false;
passing9 = [passing9, 1];
}
else {
if(_valid9){
valid20 = true;
passing9 = 1;
}
}
if(!valid20){
const err436 = {instancePath:instancePath+"/t/" + i1+"/tr",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/tr/oneOf",keyword:"oneOf",params:{passingSchemas: passing9},message:"must match exactly one schema in oneOf",schema:schema31.allOf[1].oneOf[1].properties.t.items.properties.tr.oneOf,parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.tr,data:data26};
if(vErrors === null){
vErrors = [err436];
}
else {
vErrors.push(err436);
}
errors++;
}
else {
errors = _errs426;
if(vErrors !== null){
if(_errs426){
vErrors.length = _errs426;
}
else {
vErrors = null;
}
}
}
}
if(data20.tc !== undefined){
let data27 = data20.tc;
if(typeof data27 === "string"){
if(func3(data27) > 80){
const err437 = {instancePath:instancePath+"/t/" + i1+"/tc",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/tc/maxLength",keyword:"maxLength",params:{limit: 80},message:"must NOT have more than 80 characters",schema:80,parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.tc,data:data27};
if(vErrors === null){
vErrors = [err437];
}
else {
vErrors.push(err437);
}
errors++;
}
}
else {
const err438 = {instancePath:instancePath+"/t/" + i1+"/tc",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/tc/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.allOf[1].oneOf[1].properties.t.items.properties.tc.type,parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.tc,data:data27};
if(vErrors === null){
vErrors = [err438];
}
else {
vErrors.push(err438);
}
errors++;
}
}
if(data20.co !== undefined){
let data28 = data20.co;
const _errs433 = errors;
let valid21 = false;
let passing10 = null;
const _errs434 = errors;
if("AD" !== data28){
const err439 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/0/const",keyword:"const",params:{allowedValue: "AD"},message:"must be equal to constant",schema:"AD",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[0],data:data28};
if(vErrors === null){
vErrors = [err439];
}
else {
vErrors.push(err439);
}
errors++;
}
var _valid10 = _errs434 === errors;
if(_valid10){
valid21 = true;
passing10 = 0;
}
const _errs435 = errors;
if("AE" !== data28){
const err440 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/1/const",keyword:"const",params:{allowedValue: "AE"},message:"must be equal to constant",schema:"AE",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[1],data:data28};
if(vErrors === null){
vErrors = [err440];
}
else {
vErrors.push(err440);
}
errors++;
}
var _valid10 = _errs435 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 1];
}
else {
if(_valid10){
valid21 = true;
passing10 = 1;
}
const _errs436 = errors;
if("AF" !== data28){
const err441 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/2/const",keyword:"const",params:{allowedValue: "AF"},message:"must be equal to constant",schema:"AF",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[2],data:data28};
if(vErrors === null){
vErrors = [err441];
}
else {
vErrors.push(err441);
}
errors++;
}
var _valid10 = _errs436 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 2];
}
else {
if(_valid10){
valid21 = true;
passing10 = 2;
}
const _errs437 = errors;
if("AG" !== data28){
const err442 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/3/const",keyword:"const",params:{allowedValue: "AG"},message:"must be equal to constant",schema:"AG",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[3],data:data28};
if(vErrors === null){
vErrors = [err442];
}
else {
vErrors.push(err442);
}
errors++;
}
var _valid10 = _errs437 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 3];
}
else {
if(_valid10){
valid21 = true;
passing10 = 3;
}
const _errs438 = errors;
if("AI" !== data28){
const err443 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/4/const",keyword:"const",params:{allowedValue: "AI"},message:"must be equal to constant",schema:"AI",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[4],data:data28};
if(vErrors === null){
vErrors = [err443];
}
else {
vErrors.push(err443);
}
errors++;
}
var _valid10 = _errs438 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 4];
}
else {
if(_valid10){
valid21 = true;
passing10 = 4;
}
const _errs439 = errors;
if("AL" !== data28){
const err444 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/5/const",keyword:"const",params:{allowedValue: "AL"},message:"must be equal to constant",schema:"AL",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[5],data:data28};
if(vErrors === null){
vErrors = [err444];
}
else {
vErrors.push(err444);
}
errors++;
}
var _valid10 = _errs439 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 5];
}
else {
if(_valid10){
valid21 = true;
passing10 = 5;
}
const _errs440 = errors;
if("AM" !== data28){
const err445 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/6/const",keyword:"const",params:{allowedValue: "AM"},message:"must be equal to constant",schema:"AM",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[6],data:data28};
if(vErrors === null){
vErrors = [err445];
}
else {
vErrors.push(err445);
}
errors++;
}
var _valid10 = _errs440 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 6];
}
else {
if(_valid10){
valid21 = true;
passing10 = 6;
}
const _errs441 = errors;
if("AO" !== data28){
const err446 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/7/const",keyword:"const",params:{allowedValue: "AO"},message:"must be equal to constant",schema:"AO",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[7],data:data28};
if(vErrors === null){
vErrors = [err446];
}
else {
vErrors.push(err446);
}
errors++;
}
var _valid10 = _errs441 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 7];
}
else {
if(_valid10){
valid21 = true;
passing10 = 7;
}
const _errs442 = errors;
if("AQ" !== data28){
const err447 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/8/const",keyword:"const",params:{allowedValue: "AQ"},message:"must be equal to constant",schema:"AQ",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[8],data:data28};
if(vErrors === null){
vErrors = [err447];
}
else {
vErrors.push(err447);
}
errors++;
}
var _valid10 = _errs442 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 8];
}
else {
if(_valid10){
valid21 = true;
passing10 = 8;
}
const _errs443 = errors;
if("AR" !== data28){
const err448 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/9/const",keyword:"const",params:{allowedValue: "AR"},message:"must be equal to constant",schema:"AR",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[9],data:data28};
if(vErrors === null){
vErrors = [err448];
}
else {
vErrors.push(err448);
}
errors++;
}
var _valid10 = _errs443 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 9];
}
else {
if(_valid10){
valid21 = true;
passing10 = 9;
}
const _errs444 = errors;
if("AS" !== data28){
const err449 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/10/const",keyword:"const",params:{allowedValue: "AS"},message:"must be equal to constant",schema:"AS",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[10],data:data28};
if(vErrors === null){
vErrors = [err449];
}
else {
vErrors.push(err449);
}
errors++;
}
var _valid10 = _errs444 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 10];
}
else {
if(_valid10){
valid21 = true;
passing10 = 10;
}
const _errs445 = errors;
if("AT" !== data28){
const err450 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/11/const",keyword:"const",params:{allowedValue: "AT"},message:"must be equal to constant",schema:"AT",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[11],data:data28};
if(vErrors === null){
vErrors = [err450];
}
else {
vErrors.push(err450);
}
errors++;
}
var _valid10 = _errs445 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 11];
}
else {
if(_valid10){
valid21 = true;
passing10 = 11;
}
const _errs446 = errors;
if("AU" !== data28){
const err451 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/12/const",keyword:"const",params:{allowedValue: "AU"},message:"must be equal to constant",schema:"AU",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[12],data:data28};
if(vErrors === null){
vErrors = [err451];
}
else {
vErrors.push(err451);
}
errors++;
}
var _valid10 = _errs446 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 12];
}
else {
if(_valid10){
valid21 = true;
passing10 = 12;
}
const _errs447 = errors;
if("AW" !== data28){
const err452 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/13/const",keyword:"const",params:{allowedValue: "AW"},message:"must be equal to constant",schema:"AW",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[13],data:data28};
if(vErrors === null){
vErrors = [err452];
}
else {
vErrors.push(err452);
}
errors++;
}
var _valid10 = _errs447 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 13];
}
else {
if(_valid10){
valid21 = true;
passing10 = 13;
}
const _errs448 = errors;
if("AX" !== data28){
const err453 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/14/const",keyword:"const",params:{allowedValue: "AX"},message:"must be equal to constant",schema:"AX",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[14],data:data28};
if(vErrors === null){
vErrors = [err453];
}
else {
vErrors.push(err453);
}
errors++;
}
var _valid10 = _errs448 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 14];
}
else {
if(_valid10){
valid21 = true;
passing10 = 14;
}
const _errs449 = errors;
if("AZ" !== data28){
const err454 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/15/const",keyword:"const",params:{allowedValue: "AZ"},message:"must be equal to constant",schema:"AZ",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[15],data:data28};
if(vErrors === null){
vErrors = [err454];
}
else {
vErrors.push(err454);
}
errors++;
}
var _valid10 = _errs449 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 15];
}
else {
if(_valid10){
valid21 = true;
passing10 = 15;
}
const _errs450 = errors;
if("BA" !== data28){
const err455 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/16/const",keyword:"const",params:{allowedValue: "BA"},message:"must be equal to constant",schema:"BA",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[16],data:data28};
if(vErrors === null){
vErrors = [err455];
}
else {
vErrors.push(err455);
}
errors++;
}
var _valid10 = _errs450 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 16];
}
else {
if(_valid10){
valid21 = true;
passing10 = 16;
}
const _errs451 = errors;
if("BB" !== data28){
const err456 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/17/const",keyword:"const",params:{allowedValue: "BB"},message:"must be equal to constant",schema:"BB",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[17],data:data28};
if(vErrors === null){
vErrors = [err456];
}
else {
vErrors.push(err456);
}
errors++;
}
var _valid10 = _errs451 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 17];
}
else {
if(_valid10){
valid21 = true;
passing10 = 17;
}
const _errs452 = errors;
if("BD" !== data28){
const err457 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/18/const",keyword:"const",params:{allowedValue: "BD"},message:"must be equal to constant",schema:"BD",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[18],data:data28};
if(vErrors === null){
vErrors = [err457];
}
else {
vErrors.push(err457);
}
errors++;
}
var _valid10 = _errs452 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 18];
}
else {
if(_valid10){
valid21 = true;
passing10 = 18;
}
const _errs453 = errors;
if("BE" !== data28){
const err458 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/19/const",keyword:"const",params:{allowedValue: "BE"},message:"must be equal to constant",schema:"BE",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[19],data:data28};
if(vErrors === null){
vErrors = [err458];
}
else {
vErrors.push(err458);
}
errors++;
}
var _valid10 = _errs453 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 19];
}
else {
if(_valid10){
valid21 = true;
passing10 = 19;
}
const _errs454 = errors;
if("BF" !== data28){
const err459 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/20/const",keyword:"const",params:{allowedValue: "BF"},message:"must be equal to constant",schema:"BF",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[20],data:data28};
if(vErrors === null){
vErrors = [err459];
}
else {
vErrors.push(err459);
}
errors++;
}
var _valid10 = _errs454 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 20];
}
else {
if(_valid10){
valid21 = true;
passing10 = 20;
}
const _errs455 = errors;
if("BG" !== data28){
const err460 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/21/const",keyword:"const",params:{allowedValue: "BG"},message:"must be equal to constant",schema:"BG",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[21],data:data28};
if(vErrors === null){
vErrors = [err460];
}
else {
vErrors.push(err460);
}
errors++;
}
var _valid10 = _errs455 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 21];
}
else {
if(_valid10){
valid21 = true;
passing10 = 21;
}
const _errs456 = errors;
if("BH" !== data28){
const err461 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/22/const",keyword:"const",params:{allowedValue: "BH"},message:"must be equal to constant",schema:"BH",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[22],data:data28};
if(vErrors === null){
vErrors = [err461];
}
else {
vErrors.push(err461);
}
errors++;
}
var _valid10 = _errs456 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 22];
}
else {
if(_valid10){
valid21 = true;
passing10 = 22;
}
const _errs457 = errors;
if("BI" !== data28){
const err462 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/23/const",keyword:"const",params:{allowedValue: "BI"},message:"must be equal to constant",schema:"BI",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[23],data:data28};
if(vErrors === null){
vErrors = [err462];
}
else {
vErrors.push(err462);
}
errors++;
}
var _valid10 = _errs457 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 23];
}
else {
if(_valid10){
valid21 = true;
passing10 = 23;
}
const _errs458 = errors;
if("BJ" !== data28){
const err463 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/24/const",keyword:"const",params:{allowedValue: "BJ"},message:"must be equal to constant",schema:"BJ",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[24],data:data28};
if(vErrors === null){
vErrors = [err463];
}
else {
vErrors.push(err463);
}
errors++;
}
var _valid10 = _errs458 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 24];
}
else {
if(_valid10){
valid21 = true;
passing10 = 24;
}
const _errs459 = errors;
if("BL" !== data28){
const err464 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/25/const",keyword:"const",params:{allowedValue: "BL"},message:"must be equal to constant",schema:"BL",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[25],data:data28};
if(vErrors === null){
vErrors = [err464];
}
else {
vErrors.push(err464);
}
errors++;
}
var _valid10 = _errs459 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 25];
}
else {
if(_valid10){
valid21 = true;
passing10 = 25;
}
const _errs460 = errors;
if("BM" !== data28){
const err465 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/26/const",keyword:"const",params:{allowedValue: "BM"},message:"must be equal to constant",schema:"BM",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[26],data:data28};
if(vErrors === null){
vErrors = [err465];
}
else {
vErrors.push(err465);
}
errors++;
}
var _valid10 = _errs460 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 26];
}
else {
if(_valid10){
valid21 = true;
passing10 = 26;
}
const _errs461 = errors;
if("BN" !== data28){
const err466 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/27/const",keyword:"const",params:{allowedValue: "BN"},message:"must be equal to constant",schema:"BN",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[27],data:data28};
if(vErrors === null){
vErrors = [err466];
}
else {
vErrors.push(err466);
}
errors++;
}
var _valid10 = _errs461 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 27];
}
else {
if(_valid10){
valid21 = true;
passing10 = 27;
}
const _errs462 = errors;
if("BO" !== data28){
const err467 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/28/const",keyword:"const",params:{allowedValue: "BO"},message:"must be equal to constant",schema:"BO",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[28],data:data28};
if(vErrors === null){
vErrors = [err467];
}
else {
vErrors.push(err467);
}
errors++;
}
var _valid10 = _errs462 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 28];
}
else {
if(_valid10){
valid21 = true;
passing10 = 28;
}
const _errs463 = errors;
if("BQ" !== data28){
const err468 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/29/const",keyword:"const",params:{allowedValue: "BQ"},message:"must be equal to constant",schema:"BQ",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[29],data:data28};
if(vErrors === null){
vErrors = [err468];
}
else {
vErrors.push(err468);
}
errors++;
}
var _valid10 = _errs463 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 29];
}
else {
if(_valid10){
valid21 = true;
passing10 = 29;
}
const _errs464 = errors;
if("BR" !== data28){
const err469 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/30/const",keyword:"const",params:{allowedValue: "BR"},message:"must be equal to constant",schema:"BR",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[30],data:data28};
if(vErrors === null){
vErrors = [err469];
}
else {
vErrors.push(err469);
}
errors++;
}
var _valid10 = _errs464 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 30];
}
else {
if(_valid10){
valid21 = true;
passing10 = 30;
}
const _errs465 = errors;
if("BS" !== data28){
const err470 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/31/const",keyword:"const",params:{allowedValue: "BS"},message:"must be equal to constant",schema:"BS",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[31],data:data28};
if(vErrors === null){
vErrors = [err470];
}
else {
vErrors.push(err470);
}
errors++;
}
var _valid10 = _errs465 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 31];
}
else {
if(_valid10){
valid21 = true;
passing10 = 31;
}
const _errs466 = errors;
if("BT" !== data28){
const err471 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/32/const",keyword:"const",params:{allowedValue: "BT"},message:"must be equal to constant",schema:"BT",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[32],data:data28};
if(vErrors === null){
vErrors = [err471];
}
else {
vErrors.push(err471);
}
errors++;
}
var _valid10 = _errs466 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 32];
}
else {
if(_valid10){
valid21 = true;
passing10 = 32;
}
const _errs467 = errors;
if("BV" !== data28){
const err472 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/33/const",keyword:"const",params:{allowedValue: "BV"},message:"must be equal to constant",schema:"BV",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[33],data:data28};
if(vErrors === null){
vErrors = [err472];
}
else {
vErrors.push(err472);
}
errors++;
}
var _valid10 = _errs467 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 33];
}
else {
if(_valid10){
valid21 = true;
passing10 = 33;
}
const _errs468 = errors;
if("BW" !== data28){
const err473 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/34/const",keyword:"const",params:{allowedValue: "BW"},message:"must be equal to constant",schema:"BW",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[34],data:data28};
if(vErrors === null){
vErrors = [err473];
}
else {
vErrors.push(err473);
}
errors++;
}
var _valid10 = _errs468 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 34];
}
else {
if(_valid10){
valid21 = true;
passing10 = 34;
}
const _errs469 = errors;
if("BY" !== data28){
const err474 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/35/const",keyword:"const",params:{allowedValue: "BY"},message:"must be equal to constant",schema:"BY",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[35],data:data28};
if(vErrors === null){
vErrors = [err474];
}
else {
vErrors.push(err474);
}
errors++;
}
var _valid10 = _errs469 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 35];
}
else {
if(_valid10){
valid21 = true;
passing10 = 35;
}
const _errs470 = errors;
if("BZ" !== data28){
const err475 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/36/const",keyword:"const",params:{allowedValue: "BZ"},message:"must be equal to constant",schema:"BZ",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[36],data:data28};
if(vErrors === null){
vErrors = [err475];
}
else {
vErrors.push(err475);
}
errors++;
}
var _valid10 = _errs470 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 36];
}
else {
if(_valid10){
valid21 = true;
passing10 = 36;
}
const _errs471 = errors;
if("CA" !== data28){
const err476 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/37/const",keyword:"const",params:{allowedValue: "CA"},message:"must be equal to constant",schema:"CA",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[37],data:data28};
if(vErrors === null){
vErrors = [err476];
}
else {
vErrors.push(err476);
}
errors++;
}
var _valid10 = _errs471 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 37];
}
else {
if(_valid10){
valid21 = true;
passing10 = 37;
}
const _errs472 = errors;
if("CC" !== data28){
const err477 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/38/const",keyword:"const",params:{allowedValue: "CC"},message:"must be equal to constant",schema:"CC",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[38],data:data28};
if(vErrors === null){
vErrors = [err477];
}
else {
vErrors.push(err477);
}
errors++;
}
var _valid10 = _errs472 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 38];
}
else {
if(_valid10){
valid21 = true;
passing10 = 38;
}
const _errs473 = errors;
if("CD" !== data28){
const err478 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/39/const",keyword:"const",params:{allowedValue: "CD"},message:"must be equal to constant",schema:"CD",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[39],data:data28};
if(vErrors === null){
vErrors = [err478];
}
else {
vErrors.push(err478);
}
errors++;
}
var _valid10 = _errs473 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 39];
}
else {
if(_valid10){
valid21 = true;
passing10 = 39;
}
const _errs474 = errors;
if("CF" !== data28){
const err479 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/40/const",keyword:"const",params:{allowedValue: "CF"},message:"must be equal to constant",schema:"CF",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[40],data:data28};
if(vErrors === null){
vErrors = [err479];
}
else {
vErrors.push(err479);
}
errors++;
}
var _valid10 = _errs474 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 40];
}
else {
if(_valid10){
valid21 = true;
passing10 = 40;
}
const _errs475 = errors;
if("CG" !== data28){
const err480 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/41/const",keyword:"const",params:{allowedValue: "CG"},message:"must be equal to constant",schema:"CG",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[41],data:data28};
if(vErrors === null){
vErrors = [err480];
}
else {
vErrors.push(err480);
}
errors++;
}
var _valid10 = _errs475 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 41];
}
else {
if(_valid10){
valid21 = true;
passing10 = 41;
}
const _errs476 = errors;
if("CH" !== data28){
const err481 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/42/const",keyword:"const",params:{allowedValue: "CH"},message:"must be equal to constant",schema:"CH",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[42],data:data28};
if(vErrors === null){
vErrors = [err481];
}
else {
vErrors.push(err481);
}
errors++;
}
var _valid10 = _errs476 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 42];
}
else {
if(_valid10){
valid21 = true;
passing10 = 42;
}
const _errs477 = errors;
if("CI" !== data28){
const err482 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/43/const",keyword:"const",params:{allowedValue: "CI"},message:"must be equal to constant",schema:"CI",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[43],data:data28};
if(vErrors === null){
vErrors = [err482];
}
else {
vErrors.push(err482);
}
errors++;
}
var _valid10 = _errs477 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 43];
}
else {
if(_valid10){
valid21 = true;
passing10 = 43;
}
const _errs478 = errors;
if("CK" !== data28){
const err483 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/44/const",keyword:"const",params:{allowedValue: "CK"},message:"must be equal to constant",schema:"CK",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[44],data:data28};
if(vErrors === null){
vErrors = [err483];
}
else {
vErrors.push(err483);
}
errors++;
}
var _valid10 = _errs478 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 44];
}
else {
if(_valid10){
valid21 = true;
passing10 = 44;
}
const _errs479 = errors;
if("CL" !== data28){
const err484 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/45/const",keyword:"const",params:{allowedValue: "CL"},message:"must be equal to constant",schema:"CL",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[45],data:data28};
if(vErrors === null){
vErrors = [err484];
}
else {
vErrors.push(err484);
}
errors++;
}
var _valid10 = _errs479 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 45];
}
else {
if(_valid10){
valid21 = true;
passing10 = 45;
}
const _errs480 = errors;
if("CM" !== data28){
const err485 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/46/const",keyword:"const",params:{allowedValue: "CM"},message:"must be equal to constant",schema:"CM",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[46],data:data28};
if(vErrors === null){
vErrors = [err485];
}
else {
vErrors.push(err485);
}
errors++;
}
var _valid10 = _errs480 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 46];
}
else {
if(_valid10){
valid21 = true;
passing10 = 46;
}
const _errs481 = errors;
if("CN" !== data28){
const err486 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/47/const",keyword:"const",params:{allowedValue: "CN"},message:"must be equal to constant",schema:"CN",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[47],data:data28};
if(vErrors === null){
vErrors = [err486];
}
else {
vErrors.push(err486);
}
errors++;
}
var _valid10 = _errs481 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 47];
}
else {
if(_valid10){
valid21 = true;
passing10 = 47;
}
const _errs482 = errors;
if("CO" !== data28){
const err487 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/48/const",keyword:"const",params:{allowedValue: "CO"},message:"must be equal to constant",schema:"CO",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[48],data:data28};
if(vErrors === null){
vErrors = [err487];
}
else {
vErrors.push(err487);
}
errors++;
}
var _valid10 = _errs482 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 48];
}
else {
if(_valid10){
valid21 = true;
passing10 = 48;
}
const _errs483 = errors;
if("CR" !== data28){
const err488 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/49/const",keyword:"const",params:{allowedValue: "CR"},message:"must be equal to constant",schema:"CR",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[49],data:data28};
if(vErrors === null){
vErrors = [err488];
}
else {
vErrors.push(err488);
}
errors++;
}
var _valid10 = _errs483 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 49];
}
else {
if(_valid10){
valid21 = true;
passing10 = 49;
}
const _errs484 = errors;
if("CU" !== data28){
const err489 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/50/const",keyword:"const",params:{allowedValue: "CU"},message:"must be equal to constant",schema:"CU",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[50],data:data28};
if(vErrors === null){
vErrors = [err489];
}
else {
vErrors.push(err489);
}
errors++;
}
var _valid10 = _errs484 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 50];
}
else {
if(_valid10){
valid21 = true;
passing10 = 50;
}
const _errs485 = errors;
if("CV" !== data28){
const err490 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/51/const",keyword:"const",params:{allowedValue: "CV"},message:"must be equal to constant",schema:"CV",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[51],data:data28};
if(vErrors === null){
vErrors = [err490];
}
else {
vErrors.push(err490);
}
errors++;
}
var _valid10 = _errs485 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 51];
}
else {
if(_valid10){
valid21 = true;
passing10 = 51;
}
const _errs486 = errors;
if("CW" !== data28){
const err491 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/52/const",keyword:"const",params:{allowedValue: "CW"},message:"must be equal to constant",schema:"CW",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[52],data:data28};
if(vErrors === null){
vErrors = [err491];
}
else {
vErrors.push(err491);
}
errors++;
}
var _valid10 = _errs486 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 52];
}
else {
if(_valid10){
valid21 = true;
passing10 = 52;
}
const _errs487 = errors;
if("CX" !== data28){
const err492 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/53/const",keyword:"const",params:{allowedValue: "CX"},message:"must be equal to constant",schema:"CX",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[53],data:data28};
if(vErrors === null){
vErrors = [err492];
}
else {
vErrors.push(err492);
}
errors++;
}
var _valid10 = _errs487 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 53];
}
else {
if(_valid10){
valid21 = true;
passing10 = 53;
}
const _errs488 = errors;
if("CY" !== data28){
const err493 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/54/const",keyword:"const",params:{allowedValue: "CY"},message:"must be equal to constant",schema:"CY",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[54],data:data28};
if(vErrors === null){
vErrors = [err493];
}
else {
vErrors.push(err493);
}
errors++;
}
var _valid10 = _errs488 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 54];
}
else {
if(_valid10){
valid21 = true;
passing10 = 54;
}
const _errs489 = errors;
if("CZ" !== data28){
const err494 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/55/const",keyword:"const",params:{allowedValue: "CZ"},message:"must be equal to constant",schema:"CZ",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[55],data:data28};
if(vErrors === null){
vErrors = [err494];
}
else {
vErrors.push(err494);
}
errors++;
}
var _valid10 = _errs489 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 55];
}
else {
if(_valid10){
valid21 = true;
passing10 = 55;
}
const _errs490 = errors;
if("DE" !== data28){
const err495 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/56/const",keyword:"const",params:{allowedValue: "DE"},message:"must be equal to constant",schema:"DE",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[56],data:data28};
if(vErrors === null){
vErrors = [err495];
}
else {
vErrors.push(err495);
}
errors++;
}
var _valid10 = _errs490 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 56];
}
else {
if(_valid10){
valid21 = true;
passing10 = 56;
}
const _errs491 = errors;
if("DJ" !== data28){
const err496 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/57/const",keyword:"const",params:{allowedValue: "DJ"},message:"must be equal to constant",schema:"DJ",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[57],data:data28};
if(vErrors === null){
vErrors = [err496];
}
else {
vErrors.push(err496);
}
errors++;
}
var _valid10 = _errs491 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 57];
}
else {
if(_valid10){
valid21 = true;
passing10 = 57;
}
const _errs492 = errors;
if("DK" !== data28){
const err497 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/58/const",keyword:"const",params:{allowedValue: "DK"},message:"must be equal to constant",schema:"DK",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[58],data:data28};
if(vErrors === null){
vErrors = [err497];
}
else {
vErrors.push(err497);
}
errors++;
}
var _valid10 = _errs492 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 58];
}
else {
if(_valid10){
valid21 = true;
passing10 = 58;
}
const _errs493 = errors;
if("DM" !== data28){
const err498 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/59/const",keyword:"const",params:{allowedValue: "DM"},message:"must be equal to constant",schema:"DM",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[59],data:data28};
if(vErrors === null){
vErrors = [err498];
}
else {
vErrors.push(err498);
}
errors++;
}
var _valid10 = _errs493 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 59];
}
else {
if(_valid10){
valid21 = true;
passing10 = 59;
}
const _errs494 = errors;
if("DO" !== data28){
const err499 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/60/const",keyword:"const",params:{allowedValue: "DO"},message:"must be equal to constant",schema:"DO",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[60],data:data28};
if(vErrors === null){
vErrors = [err499];
}
else {
vErrors.push(err499);
}
errors++;
}
var _valid10 = _errs494 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 60];
}
else {
if(_valid10){
valid21 = true;
passing10 = 60;
}
const _errs495 = errors;
if("DZ" !== data28){
const err500 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/61/const",keyword:"const",params:{allowedValue: "DZ"},message:"must be equal to constant",schema:"DZ",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[61],data:data28};
if(vErrors === null){
vErrors = [err500];
}
else {
vErrors.push(err500);
}
errors++;
}
var _valid10 = _errs495 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 61];
}
else {
if(_valid10){
valid21 = true;
passing10 = 61;
}
const _errs496 = errors;
if("EC" !== data28){
const err501 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/62/const",keyword:"const",params:{allowedValue: "EC"},message:"must be equal to constant",schema:"EC",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[62],data:data28};
if(vErrors === null){
vErrors = [err501];
}
else {
vErrors.push(err501);
}
errors++;
}
var _valid10 = _errs496 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 62];
}
else {
if(_valid10){
valid21 = true;
passing10 = 62;
}
const _errs497 = errors;
if("EE" !== data28){
const err502 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/63/const",keyword:"const",params:{allowedValue: "EE"},message:"must be equal to constant",schema:"EE",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[63],data:data28};
if(vErrors === null){
vErrors = [err502];
}
else {
vErrors.push(err502);
}
errors++;
}
var _valid10 = _errs497 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 63];
}
else {
if(_valid10){
valid21 = true;
passing10 = 63;
}
const _errs498 = errors;
if("EG" !== data28){
const err503 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/64/const",keyword:"const",params:{allowedValue: "EG"},message:"must be equal to constant",schema:"EG",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[64],data:data28};
if(vErrors === null){
vErrors = [err503];
}
else {
vErrors.push(err503);
}
errors++;
}
var _valid10 = _errs498 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 64];
}
else {
if(_valid10){
valid21 = true;
passing10 = 64;
}
const _errs499 = errors;
if("EH" !== data28){
const err504 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/65/const",keyword:"const",params:{allowedValue: "EH"},message:"must be equal to constant",schema:"EH",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[65],data:data28};
if(vErrors === null){
vErrors = [err504];
}
else {
vErrors.push(err504);
}
errors++;
}
var _valid10 = _errs499 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 65];
}
else {
if(_valid10){
valid21 = true;
passing10 = 65;
}
const _errs500 = errors;
if("ER" !== data28){
const err505 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/66/const",keyword:"const",params:{allowedValue: "ER"},message:"must be equal to constant",schema:"ER",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[66],data:data28};
if(vErrors === null){
vErrors = [err505];
}
else {
vErrors.push(err505);
}
errors++;
}
var _valid10 = _errs500 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 66];
}
else {
if(_valid10){
valid21 = true;
passing10 = 66;
}
const _errs501 = errors;
if("ES" !== data28){
const err506 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/67/const",keyword:"const",params:{allowedValue: "ES"},message:"must be equal to constant",schema:"ES",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[67],data:data28};
if(vErrors === null){
vErrors = [err506];
}
else {
vErrors.push(err506);
}
errors++;
}
var _valid10 = _errs501 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 67];
}
else {
if(_valid10){
valid21 = true;
passing10 = 67;
}
const _errs502 = errors;
if("ET" !== data28){
const err507 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/68/const",keyword:"const",params:{allowedValue: "ET"},message:"must be equal to constant",schema:"ET",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[68],data:data28};
if(vErrors === null){
vErrors = [err507];
}
else {
vErrors.push(err507);
}
errors++;
}
var _valid10 = _errs502 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 68];
}
else {
if(_valid10){
valid21 = true;
passing10 = 68;
}
const _errs503 = errors;
if("FI" !== data28){
const err508 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/69/const",keyword:"const",params:{allowedValue: "FI"},message:"must be equal to constant",schema:"FI",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[69],data:data28};
if(vErrors === null){
vErrors = [err508];
}
else {
vErrors.push(err508);
}
errors++;
}
var _valid10 = _errs503 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 69];
}
else {
if(_valid10){
valid21 = true;
passing10 = 69;
}
const _errs504 = errors;
if("FJ" !== data28){
const err509 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/70/const",keyword:"const",params:{allowedValue: "FJ"},message:"must be equal to constant",schema:"FJ",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[70],data:data28};
if(vErrors === null){
vErrors = [err509];
}
else {
vErrors.push(err509);
}
errors++;
}
var _valid10 = _errs504 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 70];
}
else {
if(_valid10){
valid21 = true;
passing10 = 70;
}
const _errs505 = errors;
if("FK" !== data28){
const err510 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/71/const",keyword:"const",params:{allowedValue: "FK"},message:"must be equal to constant",schema:"FK",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[71],data:data28};
if(vErrors === null){
vErrors = [err510];
}
else {
vErrors.push(err510);
}
errors++;
}
var _valid10 = _errs505 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 71];
}
else {
if(_valid10){
valid21 = true;
passing10 = 71;
}
const _errs506 = errors;
if("FM" !== data28){
const err511 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/72/const",keyword:"const",params:{allowedValue: "FM"},message:"must be equal to constant",schema:"FM",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[72],data:data28};
if(vErrors === null){
vErrors = [err511];
}
else {
vErrors.push(err511);
}
errors++;
}
var _valid10 = _errs506 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 72];
}
else {
if(_valid10){
valid21 = true;
passing10 = 72;
}
const _errs507 = errors;
if("FO" !== data28){
const err512 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/73/const",keyword:"const",params:{allowedValue: "FO"},message:"must be equal to constant",schema:"FO",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[73],data:data28};
if(vErrors === null){
vErrors = [err512];
}
else {
vErrors.push(err512);
}
errors++;
}
var _valid10 = _errs507 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 73];
}
else {
if(_valid10){
valid21 = true;
passing10 = 73;
}
const _errs508 = errors;
if("FR" !== data28){
const err513 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/74/const",keyword:"const",params:{allowedValue: "FR"},message:"must be equal to constant",schema:"FR",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[74],data:data28};
if(vErrors === null){
vErrors = [err513];
}
else {
vErrors.push(err513);
}
errors++;
}
var _valid10 = _errs508 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 74];
}
else {
if(_valid10){
valid21 = true;
passing10 = 74;
}
const _errs509 = errors;
if("GA" !== data28){
const err514 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/75/const",keyword:"const",params:{allowedValue: "GA"},message:"must be equal to constant",schema:"GA",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[75],data:data28};
if(vErrors === null){
vErrors = [err514];
}
else {
vErrors.push(err514);
}
errors++;
}
var _valid10 = _errs509 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 75];
}
else {
if(_valid10){
valid21 = true;
passing10 = 75;
}
const _errs510 = errors;
if("GB" !== data28){
const err515 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/76/const",keyword:"const",params:{allowedValue: "GB"},message:"must be equal to constant",schema:"GB",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[76],data:data28};
if(vErrors === null){
vErrors = [err515];
}
else {
vErrors.push(err515);
}
errors++;
}
var _valid10 = _errs510 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 76];
}
else {
if(_valid10){
valid21 = true;
passing10 = 76;
}
const _errs511 = errors;
if("GD" !== data28){
const err516 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/77/const",keyword:"const",params:{allowedValue: "GD"},message:"must be equal to constant",schema:"GD",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[77],data:data28};
if(vErrors === null){
vErrors = [err516];
}
else {
vErrors.push(err516);
}
errors++;
}
var _valid10 = _errs511 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 77];
}
else {
if(_valid10){
valid21 = true;
passing10 = 77;
}
const _errs512 = errors;
if("GE" !== data28){
const err517 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/78/const",keyword:"const",params:{allowedValue: "GE"},message:"must be equal to constant",schema:"GE",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[78],data:data28};
if(vErrors === null){
vErrors = [err517];
}
else {
vErrors.push(err517);
}
errors++;
}
var _valid10 = _errs512 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 78];
}
else {
if(_valid10){
valid21 = true;
passing10 = 78;
}
const _errs513 = errors;
if("GF" !== data28){
const err518 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/79/const",keyword:"const",params:{allowedValue: "GF"},message:"must be equal to constant",schema:"GF",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[79],data:data28};
if(vErrors === null){
vErrors = [err518];
}
else {
vErrors.push(err518);
}
errors++;
}
var _valid10 = _errs513 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 79];
}
else {
if(_valid10){
valid21 = true;
passing10 = 79;
}
const _errs514 = errors;
if("GG" !== data28){
const err519 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/80/const",keyword:"const",params:{allowedValue: "GG"},message:"must be equal to constant",schema:"GG",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[80],data:data28};
if(vErrors === null){
vErrors = [err519];
}
else {
vErrors.push(err519);
}
errors++;
}
var _valid10 = _errs514 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 80];
}
else {
if(_valid10){
valid21 = true;
passing10 = 80;
}
const _errs515 = errors;
if("GH" !== data28){
const err520 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/81/const",keyword:"const",params:{allowedValue: "GH"},message:"must be equal to constant",schema:"GH",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[81],data:data28};
if(vErrors === null){
vErrors = [err520];
}
else {
vErrors.push(err520);
}
errors++;
}
var _valid10 = _errs515 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 81];
}
else {
if(_valid10){
valid21 = true;
passing10 = 81;
}
const _errs516 = errors;
if("GI" !== data28){
const err521 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/82/const",keyword:"const",params:{allowedValue: "GI"},message:"must be equal to constant",schema:"GI",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[82],data:data28};
if(vErrors === null){
vErrors = [err521];
}
else {
vErrors.push(err521);
}
errors++;
}
var _valid10 = _errs516 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 82];
}
else {
if(_valid10){
valid21 = true;
passing10 = 82;
}
const _errs517 = errors;
if("GL" !== data28){
const err522 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/83/const",keyword:"const",params:{allowedValue: "GL"},message:"must be equal to constant",schema:"GL",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[83],data:data28};
if(vErrors === null){
vErrors = [err522];
}
else {
vErrors.push(err522);
}
errors++;
}
var _valid10 = _errs517 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 83];
}
else {
if(_valid10){
valid21 = true;
passing10 = 83;
}
const _errs518 = errors;
if("GM" !== data28){
const err523 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/84/const",keyword:"const",params:{allowedValue: "GM"},message:"must be equal to constant",schema:"GM",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[84],data:data28};
if(vErrors === null){
vErrors = [err523];
}
else {
vErrors.push(err523);
}
errors++;
}
var _valid10 = _errs518 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 84];
}
else {
if(_valid10){
valid21 = true;
passing10 = 84;
}
const _errs519 = errors;
if("GN" !== data28){
const err524 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/85/const",keyword:"const",params:{allowedValue: "GN"},message:"must be equal to constant",schema:"GN",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[85],data:data28};
if(vErrors === null){
vErrors = [err524];
}
else {
vErrors.push(err524);
}
errors++;
}
var _valid10 = _errs519 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 85];
}
else {
if(_valid10){
valid21 = true;
passing10 = 85;
}
const _errs520 = errors;
if("GP" !== data28){
const err525 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/86/const",keyword:"const",params:{allowedValue: "GP"},message:"must be equal to constant",schema:"GP",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[86],data:data28};
if(vErrors === null){
vErrors = [err525];
}
else {
vErrors.push(err525);
}
errors++;
}
var _valid10 = _errs520 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 86];
}
else {
if(_valid10){
valid21 = true;
passing10 = 86;
}
const _errs521 = errors;
if("GQ" !== data28){
const err526 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/87/const",keyword:"const",params:{allowedValue: "GQ"},message:"must be equal to constant",schema:"GQ",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[87],data:data28};
if(vErrors === null){
vErrors = [err526];
}
else {
vErrors.push(err526);
}
errors++;
}
var _valid10 = _errs521 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 87];
}
else {
if(_valid10){
valid21 = true;
passing10 = 87;
}
const _errs522 = errors;
if("GR" !== data28){
const err527 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/88/const",keyword:"const",params:{allowedValue: "GR"},message:"must be equal to constant",schema:"GR",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[88],data:data28};
if(vErrors === null){
vErrors = [err527];
}
else {
vErrors.push(err527);
}
errors++;
}
var _valid10 = _errs522 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 88];
}
else {
if(_valid10){
valid21 = true;
passing10 = 88;
}
const _errs523 = errors;
if("GS" !== data28){
const err528 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/89/const",keyword:"const",params:{allowedValue: "GS"},message:"must be equal to constant",schema:"GS",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[89],data:data28};
if(vErrors === null){
vErrors = [err528];
}
else {
vErrors.push(err528);
}
errors++;
}
var _valid10 = _errs523 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 89];
}
else {
if(_valid10){
valid21 = true;
passing10 = 89;
}
const _errs524 = errors;
if("GT" !== data28){
const err529 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/90/const",keyword:"const",params:{allowedValue: "GT"},message:"must be equal to constant",schema:"GT",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[90],data:data28};
if(vErrors === null){
vErrors = [err529];
}
else {
vErrors.push(err529);
}
errors++;
}
var _valid10 = _errs524 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 90];
}
else {
if(_valid10){
valid21 = true;
passing10 = 90;
}
const _errs525 = errors;
if("GU" !== data28){
const err530 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/91/const",keyword:"const",params:{allowedValue: "GU"},message:"must be equal to constant",schema:"GU",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[91],data:data28};
if(vErrors === null){
vErrors = [err530];
}
else {
vErrors.push(err530);
}
errors++;
}
var _valid10 = _errs525 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 91];
}
else {
if(_valid10){
valid21 = true;
passing10 = 91;
}
const _errs526 = errors;
if("GW" !== data28){
const err531 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/92/const",keyword:"const",params:{allowedValue: "GW"},message:"must be equal to constant",schema:"GW",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[92],data:data28};
if(vErrors === null){
vErrors = [err531];
}
else {
vErrors.push(err531);
}
errors++;
}
var _valid10 = _errs526 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 92];
}
else {
if(_valid10){
valid21 = true;
passing10 = 92;
}
const _errs527 = errors;
if("GY" !== data28){
const err532 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/93/const",keyword:"const",params:{allowedValue: "GY"},message:"must be equal to constant",schema:"GY",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[93],data:data28};
if(vErrors === null){
vErrors = [err532];
}
else {
vErrors.push(err532);
}
errors++;
}
var _valid10 = _errs527 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 93];
}
else {
if(_valid10){
valid21 = true;
passing10 = 93;
}
const _errs528 = errors;
if("HK" !== data28){
const err533 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/94/const",keyword:"const",params:{allowedValue: "HK"},message:"must be equal to constant",schema:"HK",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[94],data:data28};
if(vErrors === null){
vErrors = [err533];
}
else {
vErrors.push(err533);
}
errors++;
}
var _valid10 = _errs528 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 94];
}
else {
if(_valid10){
valid21 = true;
passing10 = 94;
}
const _errs529 = errors;
if("HM" !== data28){
const err534 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/95/const",keyword:"const",params:{allowedValue: "HM"},message:"must be equal to constant",schema:"HM",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[95],data:data28};
if(vErrors === null){
vErrors = [err534];
}
else {
vErrors.push(err534);
}
errors++;
}
var _valid10 = _errs529 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 95];
}
else {
if(_valid10){
valid21 = true;
passing10 = 95;
}
const _errs530 = errors;
if("HN" !== data28){
const err535 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/96/const",keyword:"const",params:{allowedValue: "HN"},message:"must be equal to constant",schema:"HN",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[96],data:data28};
if(vErrors === null){
vErrors = [err535];
}
else {
vErrors.push(err535);
}
errors++;
}
var _valid10 = _errs530 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 96];
}
else {
if(_valid10){
valid21 = true;
passing10 = 96;
}
const _errs531 = errors;
if("HR" !== data28){
const err536 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/97/const",keyword:"const",params:{allowedValue: "HR"},message:"must be equal to constant",schema:"HR",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[97],data:data28};
if(vErrors === null){
vErrors = [err536];
}
else {
vErrors.push(err536);
}
errors++;
}
var _valid10 = _errs531 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 97];
}
else {
if(_valid10){
valid21 = true;
passing10 = 97;
}
const _errs532 = errors;
if("HT" !== data28){
const err537 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/98/const",keyword:"const",params:{allowedValue: "HT"},message:"must be equal to constant",schema:"HT",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[98],data:data28};
if(vErrors === null){
vErrors = [err537];
}
else {
vErrors.push(err537);
}
errors++;
}
var _valid10 = _errs532 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 98];
}
else {
if(_valid10){
valid21 = true;
passing10 = 98;
}
const _errs533 = errors;
if("HU" !== data28){
const err538 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/99/const",keyword:"const",params:{allowedValue: "HU"},message:"must be equal to constant",schema:"HU",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[99],data:data28};
if(vErrors === null){
vErrors = [err538];
}
else {
vErrors.push(err538);
}
errors++;
}
var _valid10 = _errs533 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 99];
}
else {
if(_valid10){
valid21 = true;
passing10 = 99;
}
const _errs534 = errors;
if("ID" !== data28){
const err539 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/100/const",keyword:"const",params:{allowedValue: "ID"},message:"must be equal to constant",schema:"ID",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[100],data:data28};
if(vErrors === null){
vErrors = [err539];
}
else {
vErrors.push(err539);
}
errors++;
}
var _valid10 = _errs534 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 100];
}
else {
if(_valid10){
valid21 = true;
passing10 = 100;
}
const _errs535 = errors;
if("IE" !== data28){
const err540 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/101/const",keyword:"const",params:{allowedValue: "IE"},message:"must be equal to constant",schema:"IE",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[101],data:data28};
if(vErrors === null){
vErrors = [err540];
}
else {
vErrors.push(err540);
}
errors++;
}
var _valid10 = _errs535 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 101];
}
else {
if(_valid10){
valid21 = true;
passing10 = 101;
}
const _errs536 = errors;
if("IL" !== data28){
const err541 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/102/const",keyword:"const",params:{allowedValue: "IL"},message:"must be equal to constant",schema:"IL",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[102],data:data28};
if(vErrors === null){
vErrors = [err541];
}
else {
vErrors.push(err541);
}
errors++;
}
var _valid10 = _errs536 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 102];
}
else {
if(_valid10){
valid21 = true;
passing10 = 102;
}
const _errs537 = errors;
if("IM" !== data28){
const err542 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/103/const",keyword:"const",params:{allowedValue: "IM"},message:"must be equal to constant",schema:"IM",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[103],data:data28};
if(vErrors === null){
vErrors = [err542];
}
else {
vErrors.push(err542);
}
errors++;
}
var _valid10 = _errs537 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 103];
}
else {
if(_valid10){
valid21 = true;
passing10 = 103;
}
const _errs538 = errors;
if("IN" !== data28){
const err543 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/104/const",keyword:"const",params:{allowedValue: "IN"},message:"must be equal to constant",schema:"IN",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[104],data:data28};
if(vErrors === null){
vErrors = [err543];
}
else {
vErrors.push(err543);
}
errors++;
}
var _valid10 = _errs538 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 104];
}
else {
if(_valid10){
valid21 = true;
passing10 = 104;
}
const _errs539 = errors;
if("IO" !== data28){
const err544 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/105/const",keyword:"const",params:{allowedValue: "IO"},message:"must be equal to constant",schema:"IO",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[105],data:data28};
if(vErrors === null){
vErrors = [err544];
}
else {
vErrors.push(err544);
}
errors++;
}
var _valid10 = _errs539 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 105];
}
else {
if(_valid10){
valid21 = true;
passing10 = 105;
}
const _errs540 = errors;
if("IQ" !== data28){
const err545 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/106/const",keyword:"const",params:{allowedValue: "IQ"},message:"must be equal to constant",schema:"IQ",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[106],data:data28};
if(vErrors === null){
vErrors = [err545];
}
else {
vErrors.push(err545);
}
errors++;
}
var _valid10 = _errs540 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 106];
}
else {
if(_valid10){
valid21 = true;
passing10 = 106;
}
const _errs541 = errors;
if("IR" !== data28){
const err546 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/107/const",keyword:"const",params:{allowedValue: "IR"},message:"must be equal to constant",schema:"IR",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[107],data:data28};
if(vErrors === null){
vErrors = [err546];
}
else {
vErrors.push(err546);
}
errors++;
}
var _valid10 = _errs541 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 107];
}
else {
if(_valid10){
valid21 = true;
passing10 = 107;
}
const _errs542 = errors;
if("IS" !== data28){
const err547 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/108/const",keyword:"const",params:{allowedValue: "IS"},message:"must be equal to constant",schema:"IS",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[108],data:data28};
if(vErrors === null){
vErrors = [err547];
}
else {
vErrors.push(err547);
}
errors++;
}
var _valid10 = _errs542 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 108];
}
else {
if(_valid10){
valid21 = true;
passing10 = 108;
}
const _errs543 = errors;
if("IT" !== data28){
const err548 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/109/const",keyword:"const",params:{allowedValue: "IT"},message:"must be equal to constant",schema:"IT",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[109],data:data28};
if(vErrors === null){
vErrors = [err548];
}
else {
vErrors.push(err548);
}
errors++;
}
var _valid10 = _errs543 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 109];
}
else {
if(_valid10){
valid21 = true;
passing10 = 109;
}
const _errs544 = errors;
if("JE" !== data28){
const err549 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/110/const",keyword:"const",params:{allowedValue: "JE"},message:"must be equal to constant",schema:"JE",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[110],data:data28};
if(vErrors === null){
vErrors = [err549];
}
else {
vErrors.push(err549);
}
errors++;
}
var _valid10 = _errs544 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 110];
}
else {
if(_valid10){
valid21 = true;
passing10 = 110;
}
const _errs545 = errors;
if("JM" !== data28){
const err550 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/111/const",keyword:"const",params:{allowedValue: "JM"},message:"must be equal to constant",schema:"JM",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[111],data:data28};
if(vErrors === null){
vErrors = [err550];
}
else {
vErrors.push(err550);
}
errors++;
}
var _valid10 = _errs545 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 111];
}
else {
if(_valid10){
valid21 = true;
passing10 = 111;
}
const _errs546 = errors;
if("JO" !== data28){
const err551 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/112/const",keyword:"const",params:{allowedValue: "JO"},message:"must be equal to constant",schema:"JO",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[112],data:data28};
if(vErrors === null){
vErrors = [err551];
}
else {
vErrors.push(err551);
}
errors++;
}
var _valid10 = _errs546 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 112];
}
else {
if(_valid10){
valid21 = true;
passing10 = 112;
}
const _errs547 = errors;
if("JP" !== data28){
const err552 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/113/const",keyword:"const",params:{allowedValue: "JP"},message:"must be equal to constant",schema:"JP",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[113],data:data28};
if(vErrors === null){
vErrors = [err552];
}
else {
vErrors.push(err552);
}
errors++;
}
var _valid10 = _errs547 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 113];
}
else {
if(_valid10){
valid21 = true;
passing10 = 113;
}
const _errs548 = errors;
if("KE" !== data28){
const err553 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/114/const",keyword:"const",params:{allowedValue: "KE"},message:"must be equal to constant",schema:"KE",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[114],data:data28};
if(vErrors === null){
vErrors = [err553];
}
else {
vErrors.push(err553);
}
errors++;
}
var _valid10 = _errs548 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 114];
}
else {
if(_valid10){
valid21 = true;
passing10 = 114;
}
const _errs549 = errors;
if("KG" !== data28){
const err554 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/115/const",keyword:"const",params:{allowedValue: "KG"},message:"must be equal to constant",schema:"KG",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[115],data:data28};
if(vErrors === null){
vErrors = [err554];
}
else {
vErrors.push(err554);
}
errors++;
}
var _valid10 = _errs549 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 115];
}
else {
if(_valid10){
valid21 = true;
passing10 = 115;
}
const _errs550 = errors;
if("KH" !== data28){
const err555 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/116/const",keyword:"const",params:{allowedValue: "KH"},message:"must be equal to constant",schema:"KH",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[116],data:data28};
if(vErrors === null){
vErrors = [err555];
}
else {
vErrors.push(err555);
}
errors++;
}
var _valid10 = _errs550 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 116];
}
else {
if(_valid10){
valid21 = true;
passing10 = 116;
}
const _errs551 = errors;
if("KI" !== data28){
const err556 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/117/const",keyword:"const",params:{allowedValue: "KI"},message:"must be equal to constant",schema:"KI",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[117],data:data28};
if(vErrors === null){
vErrors = [err556];
}
else {
vErrors.push(err556);
}
errors++;
}
var _valid10 = _errs551 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 117];
}
else {
if(_valid10){
valid21 = true;
passing10 = 117;
}
const _errs552 = errors;
if("KM" !== data28){
const err557 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/118/const",keyword:"const",params:{allowedValue: "KM"},message:"must be equal to constant",schema:"KM",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[118],data:data28};
if(vErrors === null){
vErrors = [err557];
}
else {
vErrors.push(err557);
}
errors++;
}
var _valid10 = _errs552 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 118];
}
else {
if(_valid10){
valid21 = true;
passing10 = 118;
}
const _errs553 = errors;
if("KN" !== data28){
const err558 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/119/const",keyword:"const",params:{allowedValue: "KN"},message:"must be equal to constant",schema:"KN",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[119],data:data28};
if(vErrors === null){
vErrors = [err558];
}
else {
vErrors.push(err558);
}
errors++;
}
var _valid10 = _errs553 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 119];
}
else {
if(_valid10){
valid21 = true;
passing10 = 119;
}
const _errs554 = errors;
if("KP" !== data28){
const err559 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/120/const",keyword:"const",params:{allowedValue: "KP"},message:"must be equal to constant",schema:"KP",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[120],data:data28};
if(vErrors === null){
vErrors = [err559];
}
else {
vErrors.push(err559);
}
errors++;
}
var _valid10 = _errs554 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 120];
}
else {
if(_valid10){
valid21 = true;
passing10 = 120;
}
const _errs555 = errors;
if("KR" !== data28){
const err560 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/121/const",keyword:"const",params:{allowedValue: "KR"},message:"must be equal to constant",schema:"KR",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[121],data:data28};
if(vErrors === null){
vErrors = [err560];
}
else {
vErrors.push(err560);
}
errors++;
}
var _valid10 = _errs555 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 121];
}
else {
if(_valid10){
valid21 = true;
passing10 = 121;
}
const _errs556 = errors;
if("KW" !== data28){
const err561 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/122/const",keyword:"const",params:{allowedValue: "KW"},message:"must be equal to constant",schema:"KW",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[122],data:data28};
if(vErrors === null){
vErrors = [err561];
}
else {
vErrors.push(err561);
}
errors++;
}
var _valid10 = _errs556 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 122];
}
else {
if(_valid10){
valid21 = true;
passing10 = 122;
}
const _errs557 = errors;
if("KY" !== data28){
const err562 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/123/const",keyword:"const",params:{allowedValue: "KY"},message:"must be equal to constant",schema:"KY",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[123],data:data28};
if(vErrors === null){
vErrors = [err562];
}
else {
vErrors.push(err562);
}
errors++;
}
var _valid10 = _errs557 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 123];
}
else {
if(_valid10){
valid21 = true;
passing10 = 123;
}
const _errs558 = errors;
if("KZ" !== data28){
const err563 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/124/const",keyword:"const",params:{allowedValue: "KZ"},message:"must be equal to constant",schema:"KZ",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[124],data:data28};
if(vErrors === null){
vErrors = [err563];
}
else {
vErrors.push(err563);
}
errors++;
}
var _valid10 = _errs558 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 124];
}
else {
if(_valid10){
valid21 = true;
passing10 = 124;
}
const _errs559 = errors;
if("LA" !== data28){
const err564 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/125/const",keyword:"const",params:{allowedValue: "LA"},message:"must be equal to constant",schema:"LA",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[125],data:data28};
if(vErrors === null){
vErrors = [err564];
}
else {
vErrors.push(err564);
}
errors++;
}
var _valid10 = _errs559 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 125];
}
else {
if(_valid10){
valid21 = true;
passing10 = 125;
}
const _errs560 = errors;
if("LB" !== data28){
const err565 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/126/const",keyword:"const",params:{allowedValue: "LB"},message:"must be equal to constant",schema:"LB",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[126],data:data28};
if(vErrors === null){
vErrors = [err565];
}
else {
vErrors.push(err565);
}
errors++;
}
var _valid10 = _errs560 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 126];
}
else {
if(_valid10){
valid21 = true;
passing10 = 126;
}
const _errs561 = errors;
if("LC" !== data28){
const err566 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/127/const",keyword:"const",params:{allowedValue: "LC"},message:"must be equal to constant",schema:"LC",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[127],data:data28};
if(vErrors === null){
vErrors = [err566];
}
else {
vErrors.push(err566);
}
errors++;
}
var _valid10 = _errs561 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 127];
}
else {
if(_valid10){
valid21 = true;
passing10 = 127;
}
const _errs562 = errors;
if("LI" !== data28){
const err567 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/128/const",keyword:"const",params:{allowedValue: "LI"},message:"must be equal to constant",schema:"LI",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[128],data:data28};
if(vErrors === null){
vErrors = [err567];
}
else {
vErrors.push(err567);
}
errors++;
}
var _valid10 = _errs562 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 128];
}
else {
if(_valid10){
valid21 = true;
passing10 = 128;
}
const _errs563 = errors;
if("LK" !== data28){
const err568 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/129/const",keyword:"const",params:{allowedValue: "LK"},message:"must be equal to constant",schema:"LK",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[129],data:data28};
if(vErrors === null){
vErrors = [err568];
}
else {
vErrors.push(err568);
}
errors++;
}
var _valid10 = _errs563 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 129];
}
else {
if(_valid10){
valid21 = true;
passing10 = 129;
}
const _errs564 = errors;
if("LR" !== data28){
const err569 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/130/const",keyword:"const",params:{allowedValue: "LR"},message:"must be equal to constant",schema:"LR",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[130],data:data28};
if(vErrors === null){
vErrors = [err569];
}
else {
vErrors.push(err569);
}
errors++;
}
var _valid10 = _errs564 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 130];
}
else {
if(_valid10){
valid21 = true;
passing10 = 130;
}
const _errs565 = errors;
if("LS" !== data28){
const err570 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/131/const",keyword:"const",params:{allowedValue: "LS"},message:"must be equal to constant",schema:"LS",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[131],data:data28};
if(vErrors === null){
vErrors = [err570];
}
else {
vErrors.push(err570);
}
errors++;
}
var _valid10 = _errs565 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 131];
}
else {
if(_valid10){
valid21 = true;
passing10 = 131;
}
const _errs566 = errors;
if("LT" !== data28){
const err571 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/132/const",keyword:"const",params:{allowedValue: "LT"},message:"must be equal to constant",schema:"LT",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[132],data:data28};
if(vErrors === null){
vErrors = [err571];
}
else {
vErrors.push(err571);
}
errors++;
}
var _valid10 = _errs566 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 132];
}
else {
if(_valid10){
valid21 = true;
passing10 = 132;
}
const _errs567 = errors;
if("LU" !== data28){
const err572 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/133/const",keyword:"const",params:{allowedValue: "LU"},message:"must be equal to constant",schema:"LU",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[133],data:data28};
if(vErrors === null){
vErrors = [err572];
}
else {
vErrors.push(err572);
}
errors++;
}
var _valid10 = _errs567 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 133];
}
else {
if(_valid10){
valid21 = true;
passing10 = 133;
}
const _errs568 = errors;
if("LV" !== data28){
const err573 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/134/const",keyword:"const",params:{allowedValue: "LV"},message:"must be equal to constant",schema:"LV",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[134],data:data28};
if(vErrors === null){
vErrors = [err573];
}
else {
vErrors.push(err573);
}
errors++;
}
var _valid10 = _errs568 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 134];
}
else {
if(_valid10){
valid21 = true;
passing10 = 134;
}
const _errs569 = errors;
if("LY" !== data28){
const err574 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/135/const",keyword:"const",params:{allowedValue: "LY"},message:"must be equal to constant",schema:"LY",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[135],data:data28};
if(vErrors === null){
vErrors = [err574];
}
else {
vErrors.push(err574);
}
errors++;
}
var _valid10 = _errs569 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 135];
}
else {
if(_valid10){
valid21 = true;
passing10 = 135;
}
const _errs570 = errors;
if("MA" !== data28){
const err575 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/136/const",keyword:"const",params:{allowedValue: "MA"},message:"must be equal to constant",schema:"MA",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[136],data:data28};
if(vErrors === null){
vErrors = [err575];
}
else {
vErrors.push(err575);
}
errors++;
}
var _valid10 = _errs570 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 136];
}
else {
if(_valid10){
valid21 = true;
passing10 = 136;
}
const _errs571 = errors;
if("MC" !== data28){
const err576 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/137/const",keyword:"const",params:{allowedValue: "MC"},message:"must be equal to constant",schema:"MC",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[137],data:data28};
if(vErrors === null){
vErrors = [err576];
}
else {
vErrors.push(err576);
}
errors++;
}
var _valid10 = _errs571 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 137];
}
else {
if(_valid10){
valid21 = true;
passing10 = 137;
}
const _errs572 = errors;
if("MD" !== data28){
const err577 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/138/const",keyword:"const",params:{allowedValue: "MD"},message:"must be equal to constant",schema:"MD",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[138],data:data28};
if(vErrors === null){
vErrors = [err577];
}
else {
vErrors.push(err577);
}
errors++;
}
var _valid10 = _errs572 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 138];
}
else {
if(_valid10){
valid21 = true;
passing10 = 138;
}
const _errs573 = errors;
if("ME" !== data28){
const err578 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/139/const",keyword:"const",params:{allowedValue: "ME"},message:"must be equal to constant",schema:"ME",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[139],data:data28};
if(vErrors === null){
vErrors = [err578];
}
else {
vErrors.push(err578);
}
errors++;
}
var _valid10 = _errs573 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 139];
}
else {
if(_valid10){
valid21 = true;
passing10 = 139;
}
const _errs574 = errors;
if("MF" !== data28){
const err579 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/140/const",keyword:"const",params:{allowedValue: "MF"},message:"must be equal to constant",schema:"MF",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[140],data:data28};
if(vErrors === null){
vErrors = [err579];
}
else {
vErrors.push(err579);
}
errors++;
}
var _valid10 = _errs574 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 140];
}
else {
if(_valid10){
valid21 = true;
passing10 = 140;
}
const _errs575 = errors;
if("MG" !== data28){
const err580 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/141/const",keyword:"const",params:{allowedValue: "MG"},message:"must be equal to constant",schema:"MG",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[141],data:data28};
if(vErrors === null){
vErrors = [err580];
}
else {
vErrors.push(err580);
}
errors++;
}
var _valid10 = _errs575 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 141];
}
else {
if(_valid10){
valid21 = true;
passing10 = 141;
}
const _errs576 = errors;
if("MH" !== data28){
const err581 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/142/const",keyword:"const",params:{allowedValue: "MH"},message:"must be equal to constant",schema:"MH",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[142],data:data28};
if(vErrors === null){
vErrors = [err581];
}
else {
vErrors.push(err581);
}
errors++;
}
var _valid10 = _errs576 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 142];
}
else {
if(_valid10){
valid21 = true;
passing10 = 142;
}
const _errs577 = errors;
if("MK" !== data28){
const err582 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/143/const",keyword:"const",params:{allowedValue: "MK"},message:"must be equal to constant",schema:"MK",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[143],data:data28};
if(vErrors === null){
vErrors = [err582];
}
else {
vErrors.push(err582);
}
errors++;
}
var _valid10 = _errs577 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 143];
}
else {
if(_valid10){
valid21 = true;
passing10 = 143;
}
const _errs578 = errors;
if("ML" !== data28){
const err583 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/144/const",keyword:"const",params:{allowedValue: "ML"},message:"must be equal to constant",schema:"ML",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[144],data:data28};
if(vErrors === null){
vErrors = [err583];
}
else {
vErrors.push(err583);
}
errors++;
}
var _valid10 = _errs578 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 144];
}
else {
if(_valid10){
valid21 = true;
passing10 = 144;
}
const _errs579 = errors;
if("MM" !== data28){
const err584 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/145/const",keyword:"const",params:{allowedValue: "MM"},message:"must be equal to constant",schema:"MM",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[145],data:data28};
if(vErrors === null){
vErrors = [err584];
}
else {
vErrors.push(err584);
}
errors++;
}
var _valid10 = _errs579 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 145];
}
else {
if(_valid10){
valid21 = true;
passing10 = 145;
}
const _errs580 = errors;
if("MN" !== data28){
const err585 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/146/const",keyword:"const",params:{allowedValue: "MN"},message:"must be equal to constant",schema:"MN",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[146],data:data28};
if(vErrors === null){
vErrors = [err585];
}
else {
vErrors.push(err585);
}
errors++;
}
var _valid10 = _errs580 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 146];
}
else {
if(_valid10){
valid21 = true;
passing10 = 146;
}
const _errs581 = errors;
if("MO" !== data28){
const err586 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/147/const",keyword:"const",params:{allowedValue: "MO"},message:"must be equal to constant",schema:"MO",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[147],data:data28};
if(vErrors === null){
vErrors = [err586];
}
else {
vErrors.push(err586);
}
errors++;
}
var _valid10 = _errs581 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 147];
}
else {
if(_valid10){
valid21 = true;
passing10 = 147;
}
const _errs582 = errors;
if("MP" !== data28){
const err587 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/148/const",keyword:"const",params:{allowedValue: "MP"},message:"must be equal to constant",schema:"MP",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[148],data:data28};
if(vErrors === null){
vErrors = [err587];
}
else {
vErrors.push(err587);
}
errors++;
}
var _valid10 = _errs582 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 148];
}
else {
if(_valid10){
valid21 = true;
passing10 = 148;
}
const _errs583 = errors;
if("MQ" !== data28){
const err588 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/149/const",keyword:"const",params:{allowedValue: "MQ"},message:"must be equal to constant",schema:"MQ",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[149],data:data28};
if(vErrors === null){
vErrors = [err588];
}
else {
vErrors.push(err588);
}
errors++;
}
var _valid10 = _errs583 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 149];
}
else {
if(_valid10){
valid21 = true;
passing10 = 149;
}
const _errs584 = errors;
if("MR" !== data28){
const err589 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/150/const",keyword:"const",params:{allowedValue: "MR"},message:"must be equal to constant",schema:"MR",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[150],data:data28};
if(vErrors === null){
vErrors = [err589];
}
else {
vErrors.push(err589);
}
errors++;
}
var _valid10 = _errs584 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 150];
}
else {
if(_valid10){
valid21 = true;
passing10 = 150;
}
const _errs585 = errors;
if("MS" !== data28){
const err590 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/151/const",keyword:"const",params:{allowedValue: "MS"},message:"must be equal to constant",schema:"MS",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[151],data:data28};
if(vErrors === null){
vErrors = [err590];
}
else {
vErrors.push(err590);
}
errors++;
}
var _valid10 = _errs585 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 151];
}
else {
if(_valid10){
valid21 = true;
passing10 = 151;
}
const _errs586 = errors;
if("MT" !== data28){
const err591 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/152/const",keyword:"const",params:{allowedValue: "MT"},message:"must be equal to constant",schema:"MT",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[152],data:data28};
if(vErrors === null){
vErrors = [err591];
}
else {
vErrors.push(err591);
}
errors++;
}
var _valid10 = _errs586 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 152];
}
else {
if(_valid10){
valid21 = true;
passing10 = 152;
}
const _errs587 = errors;
if("MU" !== data28){
const err592 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/153/const",keyword:"const",params:{allowedValue: "MU"},message:"must be equal to constant",schema:"MU",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[153],data:data28};
if(vErrors === null){
vErrors = [err592];
}
else {
vErrors.push(err592);
}
errors++;
}
var _valid10 = _errs587 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 153];
}
else {
if(_valid10){
valid21 = true;
passing10 = 153;
}
const _errs588 = errors;
if("MV" !== data28){
const err593 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/154/const",keyword:"const",params:{allowedValue: "MV"},message:"must be equal to constant",schema:"MV",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[154],data:data28};
if(vErrors === null){
vErrors = [err593];
}
else {
vErrors.push(err593);
}
errors++;
}
var _valid10 = _errs588 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 154];
}
else {
if(_valid10){
valid21 = true;
passing10 = 154;
}
const _errs589 = errors;
if("MW" !== data28){
const err594 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/155/const",keyword:"const",params:{allowedValue: "MW"},message:"must be equal to constant",schema:"MW",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[155],data:data28};
if(vErrors === null){
vErrors = [err594];
}
else {
vErrors.push(err594);
}
errors++;
}
var _valid10 = _errs589 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 155];
}
else {
if(_valid10){
valid21 = true;
passing10 = 155;
}
const _errs590 = errors;
if("MX" !== data28){
const err595 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/156/const",keyword:"const",params:{allowedValue: "MX"},message:"must be equal to constant",schema:"MX",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[156],data:data28};
if(vErrors === null){
vErrors = [err595];
}
else {
vErrors.push(err595);
}
errors++;
}
var _valid10 = _errs590 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 156];
}
else {
if(_valid10){
valid21 = true;
passing10 = 156;
}
const _errs591 = errors;
if("MY" !== data28){
const err596 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/157/const",keyword:"const",params:{allowedValue: "MY"},message:"must be equal to constant",schema:"MY",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[157],data:data28};
if(vErrors === null){
vErrors = [err596];
}
else {
vErrors.push(err596);
}
errors++;
}
var _valid10 = _errs591 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 157];
}
else {
if(_valid10){
valid21 = true;
passing10 = 157;
}
const _errs592 = errors;
if("MZ" !== data28){
const err597 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/158/const",keyword:"const",params:{allowedValue: "MZ"},message:"must be equal to constant",schema:"MZ",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[158],data:data28};
if(vErrors === null){
vErrors = [err597];
}
else {
vErrors.push(err597);
}
errors++;
}
var _valid10 = _errs592 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 158];
}
else {
if(_valid10){
valid21 = true;
passing10 = 158;
}
const _errs593 = errors;
if("NA" !== data28){
const err598 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/159/const",keyword:"const",params:{allowedValue: "NA"},message:"must be equal to constant",schema:"NA",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[159],data:data28};
if(vErrors === null){
vErrors = [err598];
}
else {
vErrors.push(err598);
}
errors++;
}
var _valid10 = _errs593 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 159];
}
else {
if(_valid10){
valid21 = true;
passing10 = 159;
}
const _errs594 = errors;
if("NC" !== data28){
const err599 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/160/const",keyword:"const",params:{allowedValue: "NC"},message:"must be equal to constant",schema:"NC",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[160],data:data28};
if(vErrors === null){
vErrors = [err599];
}
else {
vErrors.push(err599);
}
errors++;
}
var _valid10 = _errs594 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 160];
}
else {
if(_valid10){
valid21 = true;
passing10 = 160;
}
const _errs595 = errors;
if("NE" !== data28){
const err600 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/161/const",keyword:"const",params:{allowedValue: "NE"},message:"must be equal to constant",schema:"NE",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[161],data:data28};
if(vErrors === null){
vErrors = [err600];
}
else {
vErrors.push(err600);
}
errors++;
}
var _valid10 = _errs595 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 161];
}
else {
if(_valid10){
valid21 = true;
passing10 = 161;
}
const _errs596 = errors;
if("NF" !== data28){
const err601 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/162/const",keyword:"const",params:{allowedValue: "NF"},message:"must be equal to constant",schema:"NF",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[162],data:data28};
if(vErrors === null){
vErrors = [err601];
}
else {
vErrors.push(err601);
}
errors++;
}
var _valid10 = _errs596 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 162];
}
else {
if(_valid10){
valid21 = true;
passing10 = 162;
}
const _errs597 = errors;
if("NG" !== data28){
const err602 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/163/const",keyword:"const",params:{allowedValue: "NG"},message:"must be equal to constant",schema:"NG",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[163],data:data28};
if(vErrors === null){
vErrors = [err602];
}
else {
vErrors.push(err602);
}
errors++;
}
var _valid10 = _errs597 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 163];
}
else {
if(_valid10){
valid21 = true;
passing10 = 163;
}
const _errs598 = errors;
if("NI" !== data28){
const err603 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/164/const",keyword:"const",params:{allowedValue: "NI"},message:"must be equal to constant",schema:"NI",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[164],data:data28};
if(vErrors === null){
vErrors = [err603];
}
else {
vErrors.push(err603);
}
errors++;
}
var _valid10 = _errs598 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 164];
}
else {
if(_valid10){
valid21 = true;
passing10 = 164;
}
const _errs599 = errors;
if("NL" !== data28){
const err604 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/165/const",keyword:"const",params:{allowedValue: "NL"},message:"must be equal to constant",schema:"NL",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[165],data:data28};
if(vErrors === null){
vErrors = [err604];
}
else {
vErrors.push(err604);
}
errors++;
}
var _valid10 = _errs599 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 165];
}
else {
if(_valid10){
valid21 = true;
passing10 = 165;
}
const _errs600 = errors;
if("NO" !== data28){
const err605 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/166/const",keyword:"const",params:{allowedValue: "NO"},message:"must be equal to constant",schema:"NO",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[166],data:data28};
if(vErrors === null){
vErrors = [err605];
}
else {
vErrors.push(err605);
}
errors++;
}
var _valid10 = _errs600 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 166];
}
else {
if(_valid10){
valid21 = true;
passing10 = 166;
}
const _errs601 = errors;
if("NP" !== data28){
const err606 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/167/const",keyword:"const",params:{allowedValue: "NP"},message:"must be equal to constant",schema:"NP",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[167],data:data28};
if(vErrors === null){
vErrors = [err606];
}
else {
vErrors.push(err606);
}
errors++;
}
var _valid10 = _errs601 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 167];
}
else {
if(_valid10){
valid21 = true;
passing10 = 167;
}
const _errs602 = errors;
if("NR" !== data28){
const err607 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/168/const",keyword:"const",params:{allowedValue: "NR"},message:"must be equal to constant",schema:"NR",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[168],data:data28};
if(vErrors === null){
vErrors = [err607];
}
else {
vErrors.push(err607);
}
errors++;
}
var _valid10 = _errs602 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 168];
}
else {
if(_valid10){
valid21 = true;
passing10 = 168;
}
const _errs603 = errors;
if("NU" !== data28){
const err608 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/169/const",keyword:"const",params:{allowedValue: "NU"},message:"must be equal to constant",schema:"NU",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[169],data:data28};
if(vErrors === null){
vErrors = [err608];
}
else {
vErrors.push(err608);
}
errors++;
}
var _valid10 = _errs603 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 169];
}
else {
if(_valid10){
valid21 = true;
passing10 = 169;
}
const _errs604 = errors;
if("NZ" !== data28){
const err609 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/170/const",keyword:"const",params:{allowedValue: "NZ"},message:"must be equal to constant",schema:"NZ",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[170],data:data28};
if(vErrors === null){
vErrors = [err609];
}
else {
vErrors.push(err609);
}
errors++;
}
var _valid10 = _errs604 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 170];
}
else {
if(_valid10){
valid21 = true;
passing10 = 170;
}
const _errs605 = errors;
if("OM" !== data28){
const err610 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/171/const",keyword:"const",params:{allowedValue: "OM"},message:"must be equal to constant",schema:"OM",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[171],data:data28};
if(vErrors === null){
vErrors = [err610];
}
else {
vErrors.push(err610);
}
errors++;
}
var _valid10 = _errs605 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 171];
}
else {
if(_valid10){
valid21 = true;
passing10 = 171;
}
const _errs606 = errors;
if("PA" !== data28){
const err611 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/172/const",keyword:"const",params:{allowedValue: "PA"},message:"must be equal to constant",schema:"PA",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[172],data:data28};
if(vErrors === null){
vErrors = [err611];
}
else {
vErrors.push(err611);
}
errors++;
}
var _valid10 = _errs606 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 172];
}
else {
if(_valid10){
valid21 = true;
passing10 = 172;
}
const _errs607 = errors;
if("PE" !== data28){
const err612 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/173/const",keyword:"const",params:{allowedValue: "PE"},message:"must be equal to constant",schema:"PE",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[173],data:data28};
if(vErrors === null){
vErrors = [err612];
}
else {
vErrors.push(err612);
}
errors++;
}
var _valid10 = _errs607 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 173];
}
else {
if(_valid10){
valid21 = true;
passing10 = 173;
}
const _errs608 = errors;
if("PF" !== data28){
const err613 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/174/const",keyword:"const",params:{allowedValue: "PF"},message:"must be equal to constant",schema:"PF",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[174],data:data28};
if(vErrors === null){
vErrors = [err613];
}
else {
vErrors.push(err613);
}
errors++;
}
var _valid10 = _errs608 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 174];
}
else {
if(_valid10){
valid21 = true;
passing10 = 174;
}
const _errs609 = errors;
if("PG" !== data28){
const err614 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/175/const",keyword:"const",params:{allowedValue: "PG"},message:"must be equal to constant",schema:"PG",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[175],data:data28};
if(vErrors === null){
vErrors = [err614];
}
else {
vErrors.push(err614);
}
errors++;
}
var _valid10 = _errs609 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 175];
}
else {
if(_valid10){
valid21 = true;
passing10 = 175;
}
const _errs610 = errors;
if("PH" !== data28){
const err615 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/176/const",keyword:"const",params:{allowedValue: "PH"},message:"must be equal to constant",schema:"PH",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[176],data:data28};
if(vErrors === null){
vErrors = [err615];
}
else {
vErrors.push(err615);
}
errors++;
}
var _valid10 = _errs610 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 176];
}
else {
if(_valid10){
valid21 = true;
passing10 = 176;
}
const _errs611 = errors;
if("PK" !== data28){
const err616 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/177/const",keyword:"const",params:{allowedValue: "PK"},message:"must be equal to constant",schema:"PK",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[177],data:data28};
if(vErrors === null){
vErrors = [err616];
}
else {
vErrors.push(err616);
}
errors++;
}
var _valid10 = _errs611 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 177];
}
else {
if(_valid10){
valid21 = true;
passing10 = 177;
}
const _errs612 = errors;
if("PL" !== data28){
const err617 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/178/const",keyword:"const",params:{allowedValue: "PL"},message:"must be equal to constant",schema:"PL",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[178],data:data28};
if(vErrors === null){
vErrors = [err617];
}
else {
vErrors.push(err617);
}
errors++;
}
var _valid10 = _errs612 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 178];
}
else {
if(_valid10){
valid21 = true;
passing10 = 178;
}
const _errs613 = errors;
if("PM" !== data28){
const err618 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/179/const",keyword:"const",params:{allowedValue: "PM"},message:"must be equal to constant",schema:"PM",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[179],data:data28};
if(vErrors === null){
vErrors = [err618];
}
else {
vErrors.push(err618);
}
errors++;
}
var _valid10 = _errs613 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 179];
}
else {
if(_valid10){
valid21 = true;
passing10 = 179;
}
const _errs614 = errors;
if("PN" !== data28){
const err619 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/180/const",keyword:"const",params:{allowedValue: "PN"},message:"must be equal to constant",schema:"PN",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[180],data:data28};
if(vErrors === null){
vErrors = [err619];
}
else {
vErrors.push(err619);
}
errors++;
}
var _valid10 = _errs614 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 180];
}
else {
if(_valid10){
valid21 = true;
passing10 = 180;
}
const _errs615 = errors;
if("PR" !== data28){
const err620 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/181/const",keyword:"const",params:{allowedValue: "PR"},message:"must be equal to constant",schema:"PR",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[181],data:data28};
if(vErrors === null){
vErrors = [err620];
}
else {
vErrors.push(err620);
}
errors++;
}
var _valid10 = _errs615 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 181];
}
else {
if(_valid10){
valid21 = true;
passing10 = 181;
}
const _errs616 = errors;
if("PS" !== data28){
const err621 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/182/const",keyword:"const",params:{allowedValue: "PS"},message:"must be equal to constant",schema:"PS",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[182],data:data28};
if(vErrors === null){
vErrors = [err621];
}
else {
vErrors.push(err621);
}
errors++;
}
var _valid10 = _errs616 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 182];
}
else {
if(_valid10){
valid21 = true;
passing10 = 182;
}
const _errs617 = errors;
if("PT" !== data28){
const err622 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/183/const",keyword:"const",params:{allowedValue: "PT"},message:"must be equal to constant",schema:"PT",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[183],data:data28};
if(vErrors === null){
vErrors = [err622];
}
else {
vErrors.push(err622);
}
errors++;
}
var _valid10 = _errs617 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 183];
}
else {
if(_valid10){
valid21 = true;
passing10 = 183;
}
const _errs618 = errors;
if("PW" !== data28){
const err623 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/184/const",keyword:"const",params:{allowedValue: "PW"},message:"must be equal to constant",schema:"PW",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[184],data:data28};
if(vErrors === null){
vErrors = [err623];
}
else {
vErrors.push(err623);
}
errors++;
}
var _valid10 = _errs618 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 184];
}
else {
if(_valid10){
valid21 = true;
passing10 = 184;
}
const _errs619 = errors;
if("PY" !== data28){
const err624 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/185/const",keyword:"const",params:{allowedValue: "PY"},message:"must be equal to constant",schema:"PY",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[185],data:data28};
if(vErrors === null){
vErrors = [err624];
}
else {
vErrors.push(err624);
}
errors++;
}
var _valid10 = _errs619 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 185];
}
else {
if(_valid10){
valid21 = true;
passing10 = 185;
}
const _errs620 = errors;
if("QA" !== data28){
const err625 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/186/const",keyword:"const",params:{allowedValue: "QA"},message:"must be equal to constant",schema:"QA",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[186],data:data28};
if(vErrors === null){
vErrors = [err625];
}
else {
vErrors.push(err625);
}
errors++;
}
var _valid10 = _errs620 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 186];
}
else {
if(_valid10){
valid21 = true;
passing10 = 186;
}
const _errs621 = errors;
if("RE" !== data28){
const err626 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/187/const",keyword:"const",params:{allowedValue: "RE"},message:"must be equal to constant",schema:"RE",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[187],data:data28};
if(vErrors === null){
vErrors = [err626];
}
else {
vErrors.push(err626);
}
errors++;
}
var _valid10 = _errs621 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 187];
}
else {
if(_valid10){
valid21 = true;
passing10 = 187;
}
const _errs622 = errors;
if("RO" !== data28){
const err627 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/188/const",keyword:"const",params:{allowedValue: "RO"},message:"must be equal to constant",schema:"RO",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[188],data:data28};
if(vErrors === null){
vErrors = [err627];
}
else {
vErrors.push(err627);
}
errors++;
}
var _valid10 = _errs622 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 188];
}
else {
if(_valid10){
valid21 = true;
passing10 = 188;
}
const _errs623 = errors;
if("RS" !== data28){
const err628 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/189/const",keyword:"const",params:{allowedValue: "RS"},message:"must be equal to constant",schema:"RS",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[189],data:data28};
if(vErrors === null){
vErrors = [err628];
}
else {
vErrors.push(err628);
}
errors++;
}
var _valid10 = _errs623 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 189];
}
else {
if(_valid10){
valid21 = true;
passing10 = 189;
}
const _errs624 = errors;
if("RU" !== data28){
const err629 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/190/const",keyword:"const",params:{allowedValue: "RU"},message:"must be equal to constant",schema:"RU",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[190],data:data28};
if(vErrors === null){
vErrors = [err629];
}
else {
vErrors.push(err629);
}
errors++;
}
var _valid10 = _errs624 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 190];
}
else {
if(_valid10){
valid21 = true;
passing10 = 190;
}
const _errs625 = errors;
if("RW" !== data28){
const err630 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/191/const",keyword:"const",params:{allowedValue: "RW"},message:"must be equal to constant",schema:"RW",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[191],data:data28};
if(vErrors === null){
vErrors = [err630];
}
else {
vErrors.push(err630);
}
errors++;
}
var _valid10 = _errs625 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 191];
}
else {
if(_valid10){
valid21 = true;
passing10 = 191;
}
const _errs626 = errors;
if("SA" !== data28){
const err631 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/192/const",keyword:"const",params:{allowedValue: "SA"},message:"must be equal to constant",schema:"SA",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[192],data:data28};
if(vErrors === null){
vErrors = [err631];
}
else {
vErrors.push(err631);
}
errors++;
}
var _valid10 = _errs626 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 192];
}
else {
if(_valid10){
valid21 = true;
passing10 = 192;
}
const _errs627 = errors;
if("SB" !== data28){
const err632 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/193/const",keyword:"const",params:{allowedValue: "SB"},message:"must be equal to constant",schema:"SB",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[193],data:data28};
if(vErrors === null){
vErrors = [err632];
}
else {
vErrors.push(err632);
}
errors++;
}
var _valid10 = _errs627 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 193];
}
else {
if(_valid10){
valid21 = true;
passing10 = 193;
}
const _errs628 = errors;
if("SC" !== data28){
const err633 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/194/const",keyword:"const",params:{allowedValue: "SC"},message:"must be equal to constant",schema:"SC",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[194],data:data28};
if(vErrors === null){
vErrors = [err633];
}
else {
vErrors.push(err633);
}
errors++;
}
var _valid10 = _errs628 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 194];
}
else {
if(_valid10){
valid21 = true;
passing10 = 194;
}
const _errs629 = errors;
if("SD" !== data28){
const err634 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/195/const",keyword:"const",params:{allowedValue: "SD"},message:"must be equal to constant",schema:"SD",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[195],data:data28};
if(vErrors === null){
vErrors = [err634];
}
else {
vErrors.push(err634);
}
errors++;
}
var _valid10 = _errs629 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 195];
}
else {
if(_valid10){
valid21 = true;
passing10 = 195;
}
const _errs630 = errors;
if("SE" !== data28){
const err635 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/196/const",keyword:"const",params:{allowedValue: "SE"},message:"must be equal to constant",schema:"SE",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[196],data:data28};
if(vErrors === null){
vErrors = [err635];
}
else {
vErrors.push(err635);
}
errors++;
}
var _valid10 = _errs630 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 196];
}
else {
if(_valid10){
valid21 = true;
passing10 = 196;
}
const _errs631 = errors;
if("SG" !== data28){
const err636 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/197/const",keyword:"const",params:{allowedValue: "SG"},message:"must be equal to constant",schema:"SG",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[197],data:data28};
if(vErrors === null){
vErrors = [err636];
}
else {
vErrors.push(err636);
}
errors++;
}
var _valid10 = _errs631 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 197];
}
else {
if(_valid10){
valid21 = true;
passing10 = 197;
}
const _errs632 = errors;
if("SH" !== data28){
const err637 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/198/const",keyword:"const",params:{allowedValue: "SH"},message:"must be equal to constant",schema:"SH",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[198],data:data28};
if(vErrors === null){
vErrors = [err637];
}
else {
vErrors.push(err637);
}
errors++;
}
var _valid10 = _errs632 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 198];
}
else {
if(_valid10){
valid21 = true;
passing10 = 198;
}
const _errs633 = errors;
if("SI" !== data28){
const err638 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/199/const",keyword:"const",params:{allowedValue: "SI"},message:"must be equal to constant",schema:"SI",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[199],data:data28};
if(vErrors === null){
vErrors = [err638];
}
else {
vErrors.push(err638);
}
errors++;
}
var _valid10 = _errs633 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 199];
}
else {
if(_valid10){
valid21 = true;
passing10 = 199;
}
const _errs634 = errors;
if("SJ" !== data28){
const err639 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/200/const",keyword:"const",params:{allowedValue: "SJ"},message:"must be equal to constant",schema:"SJ",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[200],data:data28};
if(vErrors === null){
vErrors = [err639];
}
else {
vErrors.push(err639);
}
errors++;
}
var _valid10 = _errs634 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 200];
}
else {
if(_valid10){
valid21 = true;
passing10 = 200;
}
const _errs635 = errors;
if("SK" !== data28){
const err640 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/201/const",keyword:"const",params:{allowedValue: "SK"},message:"must be equal to constant",schema:"SK",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[201],data:data28};
if(vErrors === null){
vErrors = [err640];
}
else {
vErrors.push(err640);
}
errors++;
}
var _valid10 = _errs635 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 201];
}
else {
if(_valid10){
valid21 = true;
passing10 = 201;
}
const _errs636 = errors;
if("SL" !== data28){
const err641 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/202/const",keyword:"const",params:{allowedValue: "SL"},message:"must be equal to constant",schema:"SL",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[202],data:data28};
if(vErrors === null){
vErrors = [err641];
}
else {
vErrors.push(err641);
}
errors++;
}
var _valid10 = _errs636 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 202];
}
else {
if(_valid10){
valid21 = true;
passing10 = 202;
}
const _errs637 = errors;
if("SM" !== data28){
const err642 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/203/const",keyword:"const",params:{allowedValue: "SM"},message:"must be equal to constant",schema:"SM",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[203],data:data28};
if(vErrors === null){
vErrors = [err642];
}
else {
vErrors.push(err642);
}
errors++;
}
var _valid10 = _errs637 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 203];
}
else {
if(_valid10){
valid21 = true;
passing10 = 203;
}
const _errs638 = errors;
if("SN" !== data28){
const err643 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/204/const",keyword:"const",params:{allowedValue: "SN"},message:"must be equal to constant",schema:"SN",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[204],data:data28};
if(vErrors === null){
vErrors = [err643];
}
else {
vErrors.push(err643);
}
errors++;
}
var _valid10 = _errs638 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 204];
}
else {
if(_valid10){
valid21 = true;
passing10 = 204;
}
const _errs639 = errors;
if("SO" !== data28){
const err644 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/205/const",keyword:"const",params:{allowedValue: "SO"},message:"must be equal to constant",schema:"SO",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[205],data:data28};
if(vErrors === null){
vErrors = [err644];
}
else {
vErrors.push(err644);
}
errors++;
}
var _valid10 = _errs639 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 205];
}
else {
if(_valid10){
valid21 = true;
passing10 = 205;
}
const _errs640 = errors;
if("SR" !== data28){
const err645 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/206/const",keyword:"const",params:{allowedValue: "SR"},message:"must be equal to constant",schema:"SR",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[206],data:data28};
if(vErrors === null){
vErrors = [err645];
}
else {
vErrors.push(err645);
}
errors++;
}
var _valid10 = _errs640 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 206];
}
else {
if(_valid10){
valid21 = true;
passing10 = 206;
}
const _errs641 = errors;
if("SS" !== data28){
const err646 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/207/const",keyword:"const",params:{allowedValue: "SS"},message:"must be equal to constant",schema:"SS",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[207],data:data28};
if(vErrors === null){
vErrors = [err646];
}
else {
vErrors.push(err646);
}
errors++;
}
var _valid10 = _errs641 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 207];
}
else {
if(_valid10){
valid21 = true;
passing10 = 207;
}
const _errs642 = errors;
if("ST" !== data28){
const err647 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/208/const",keyword:"const",params:{allowedValue: "ST"},message:"must be equal to constant",schema:"ST",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[208],data:data28};
if(vErrors === null){
vErrors = [err647];
}
else {
vErrors.push(err647);
}
errors++;
}
var _valid10 = _errs642 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 208];
}
else {
if(_valid10){
valid21 = true;
passing10 = 208;
}
const _errs643 = errors;
if("SV" !== data28){
const err648 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/209/const",keyword:"const",params:{allowedValue: "SV"},message:"must be equal to constant",schema:"SV",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[209],data:data28};
if(vErrors === null){
vErrors = [err648];
}
else {
vErrors.push(err648);
}
errors++;
}
var _valid10 = _errs643 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 209];
}
else {
if(_valid10){
valid21 = true;
passing10 = 209;
}
const _errs644 = errors;
if("SX" !== data28){
const err649 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/210/const",keyword:"const",params:{allowedValue: "SX"},message:"must be equal to constant",schema:"SX",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[210],data:data28};
if(vErrors === null){
vErrors = [err649];
}
else {
vErrors.push(err649);
}
errors++;
}
var _valid10 = _errs644 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 210];
}
else {
if(_valid10){
valid21 = true;
passing10 = 210;
}
const _errs645 = errors;
if("SY" !== data28){
const err650 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/211/const",keyword:"const",params:{allowedValue: "SY"},message:"must be equal to constant",schema:"SY",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[211],data:data28};
if(vErrors === null){
vErrors = [err650];
}
else {
vErrors.push(err650);
}
errors++;
}
var _valid10 = _errs645 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 211];
}
else {
if(_valid10){
valid21 = true;
passing10 = 211;
}
const _errs646 = errors;
if("SZ" !== data28){
const err651 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/212/const",keyword:"const",params:{allowedValue: "SZ"},message:"must be equal to constant",schema:"SZ",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[212],data:data28};
if(vErrors === null){
vErrors = [err651];
}
else {
vErrors.push(err651);
}
errors++;
}
var _valid10 = _errs646 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 212];
}
else {
if(_valid10){
valid21 = true;
passing10 = 212;
}
const _errs647 = errors;
if("TC" !== data28){
const err652 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/213/const",keyword:"const",params:{allowedValue: "TC"},message:"must be equal to constant",schema:"TC",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[213],data:data28};
if(vErrors === null){
vErrors = [err652];
}
else {
vErrors.push(err652);
}
errors++;
}
var _valid10 = _errs647 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 213];
}
else {
if(_valid10){
valid21 = true;
passing10 = 213;
}
const _errs648 = errors;
if("TD" !== data28){
const err653 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/214/const",keyword:"const",params:{allowedValue: "TD"},message:"must be equal to constant",schema:"TD",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[214],data:data28};
if(vErrors === null){
vErrors = [err653];
}
else {
vErrors.push(err653);
}
errors++;
}
var _valid10 = _errs648 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 214];
}
else {
if(_valid10){
valid21 = true;
passing10 = 214;
}
const _errs649 = errors;
if("TF" !== data28){
const err654 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/215/const",keyword:"const",params:{allowedValue: "TF"},message:"must be equal to constant",schema:"TF",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[215],data:data28};
if(vErrors === null){
vErrors = [err654];
}
else {
vErrors.push(err654);
}
errors++;
}
var _valid10 = _errs649 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 215];
}
else {
if(_valid10){
valid21 = true;
passing10 = 215;
}
const _errs650 = errors;
if("TG" !== data28){
const err655 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/216/const",keyword:"const",params:{allowedValue: "TG"},message:"must be equal to constant",schema:"TG",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[216],data:data28};
if(vErrors === null){
vErrors = [err655];
}
else {
vErrors.push(err655);
}
errors++;
}
var _valid10 = _errs650 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 216];
}
else {
if(_valid10){
valid21 = true;
passing10 = 216;
}
const _errs651 = errors;
if("TH" !== data28){
const err656 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/217/const",keyword:"const",params:{allowedValue: "TH"},message:"must be equal to constant",schema:"TH",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[217],data:data28};
if(vErrors === null){
vErrors = [err656];
}
else {
vErrors.push(err656);
}
errors++;
}
var _valid10 = _errs651 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 217];
}
else {
if(_valid10){
valid21 = true;
passing10 = 217;
}
const _errs652 = errors;
if("TJ" !== data28){
const err657 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/218/const",keyword:"const",params:{allowedValue: "TJ"},message:"must be equal to constant",schema:"TJ",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[218],data:data28};
if(vErrors === null){
vErrors = [err657];
}
else {
vErrors.push(err657);
}
errors++;
}
var _valid10 = _errs652 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 218];
}
else {
if(_valid10){
valid21 = true;
passing10 = 218;
}
const _errs653 = errors;
if("TK" !== data28){
const err658 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/219/const",keyword:"const",params:{allowedValue: "TK"},message:"must be equal to constant",schema:"TK",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[219],data:data28};
if(vErrors === null){
vErrors = [err658];
}
else {
vErrors.push(err658);
}
errors++;
}
var _valid10 = _errs653 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 219];
}
else {
if(_valid10){
valid21 = true;
passing10 = 219;
}
const _errs654 = errors;
if("TL" !== data28){
const err659 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/220/const",keyword:"const",params:{allowedValue: "TL"},message:"must be equal to constant",schema:"TL",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[220],data:data28};
if(vErrors === null){
vErrors = [err659];
}
else {
vErrors.push(err659);
}
errors++;
}
var _valid10 = _errs654 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 220];
}
else {
if(_valid10){
valid21 = true;
passing10 = 220;
}
const _errs655 = errors;
if("TM" !== data28){
const err660 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/221/const",keyword:"const",params:{allowedValue: "TM"},message:"must be equal to constant",schema:"TM",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[221],data:data28};
if(vErrors === null){
vErrors = [err660];
}
else {
vErrors.push(err660);
}
errors++;
}
var _valid10 = _errs655 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 221];
}
else {
if(_valid10){
valid21 = true;
passing10 = 221;
}
const _errs656 = errors;
if("TN" !== data28){
const err661 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/222/const",keyword:"const",params:{allowedValue: "TN"},message:"must be equal to constant",schema:"TN",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[222],data:data28};
if(vErrors === null){
vErrors = [err661];
}
else {
vErrors.push(err661);
}
errors++;
}
var _valid10 = _errs656 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 222];
}
else {
if(_valid10){
valid21 = true;
passing10 = 222;
}
const _errs657 = errors;
if("TO" !== data28){
const err662 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/223/const",keyword:"const",params:{allowedValue: "TO"},message:"must be equal to constant",schema:"TO",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[223],data:data28};
if(vErrors === null){
vErrors = [err662];
}
else {
vErrors.push(err662);
}
errors++;
}
var _valid10 = _errs657 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 223];
}
else {
if(_valid10){
valid21 = true;
passing10 = 223;
}
const _errs658 = errors;
if("TR" !== data28){
const err663 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/224/const",keyword:"const",params:{allowedValue: "TR"},message:"must be equal to constant",schema:"TR",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[224],data:data28};
if(vErrors === null){
vErrors = [err663];
}
else {
vErrors.push(err663);
}
errors++;
}
var _valid10 = _errs658 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 224];
}
else {
if(_valid10){
valid21 = true;
passing10 = 224;
}
const _errs659 = errors;
if("TT" !== data28){
const err664 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/225/const",keyword:"const",params:{allowedValue: "TT"},message:"must be equal to constant",schema:"TT",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[225],data:data28};
if(vErrors === null){
vErrors = [err664];
}
else {
vErrors.push(err664);
}
errors++;
}
var _valid10 = _errs659 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 225];
}
else {
if(_valid10){
valid21 = true;
passing10 = 225;
}
const _errs660 = errors;
if("TV" !== data28){
const err665 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/226/const",keyword:"const",params:{allowedValue: "TV"},message:"must be equal to constant",schema:"TV",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[226],data:data28};
if(vErrors === null){
vErrors = [err665];
}
else {
vErrors.push(err665);
}
errors++;
}
var _valid10 = _errs660 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 226];
}
else {
if(_valid10){
valid21 = true;
passing10 = 226;
}
const _errs661 = errors;
if("TW" !== data28){
const err666 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/227/const",keyword:"const",params:{allowedValue: "TW"},message:"must be equal to constant",schema:"TW",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[227],data:data28};
if(vErrors === null){
vErrors = [err666];
}
else {
vErrors.push(err666);
}
errors++;
}
var _valid10 = _errs661 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 227];
}
else {
if(_valid10){
valid21 = true;
passing10 = 227;
}
const _errs662 = errors;
if("TZ" !== data28){
const err667 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/228/const",keyword:"const",params:{allowedValue: "TZ"},message:"must be equal to constant",schema:"TZ",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[228],data:data28};
if(vErrors === null){
vErrors = [err667];
}
else {
vErrors.push(err667);
}
errors++;
}
var _valid10 = _errs662 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 228];
}
else {
if(_valid10){
valid21 = true;
passing10 = 228;
}
const _errs663 = errors;
if("UA" !== data28){
const err668 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/229/const",keyword:"const",params:{allowedValue: "UA"},message:"must be equal to constant",schema:"UA",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[229],data:data28};
if(vErrors === null){
vErrors = [err668];
}
else {
vErrors.push(err668);
}
errors++;
}
var _valid10 = _errs663 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 229];
}
else {
if(_valid10){
valid21 = true;
passing10 = 229;
}
const _errs664 = errors;
if("UG" !== data28){
const err669 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/230/const",keyword:"const",params:{allowedValue: "UG"},message:"must be equal to constant",schema:"UG",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[230],data:data28};
if(vErrors === null){
vErrors = [err669];
}
else {
vErrors.push(err669);
}
errors++;
}
var _valid10 = _errs664 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 230];
}
else {
if(_valid10){
valid21 = true;
passing10 = 230;
}
const _errs665 = errors;
if("UM" !== data28){
const err670 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/231/const",keyword:"const",params:{allowedValue: "UM"},message:"must be equal to constant",schema:"UM",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[231],data:data28};
if(vErrors === null){
vErrors = [err670];
}
else {
vErrors.push(err670);
}
errors++;
}
var _valid10 = _errs665 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 231];
}
else {
if(_valid10){
valid21 = true;
passing10 = 231;
}
const _errs666 = errors;
if("US" !== data28){
const err671 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/232/const",keyword:"const",params:{allowedValue: "US"},message:"must be equal to constant",schema:"US",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[232],data:data28};
if(vErrors === null){
vErrors = [err671];
}
else {
vErrors.push(err671);
}
errors++;
}
var _valid10 = _errs666 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 232];
}
else {
if(_valid10){
valid21 = true;
passing10 = 232;
}
const _errs667 = errors;
if("UY" !== data28){
const err672 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/233/const",keyword:"const",params:{allowedValue: "UY"},message:"must be equal to constant",schema:"UY",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[233],data:data28};
if(vErrors === null){
vErrors = [err672];
}
else {
vErrors.push(err672);
}
errors++;
}
var _valid10 = _errs667 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 233];
}
else {
if(_valid10){
valid21 = true;
passing10 = 233;
}
const _errs668 = errors;
if("UZ" !== data28){
const err673 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/234/const",keyword:"const",params:{allowedValue: "UZ"},message:"must be equal to constant",schema:"UZ",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[234],data:data28};
if(vErrors === null){
vErrors = [err673];
}
else {
vErrors.push(err673);
}
errors++;
}
var _valid10 = _errs668 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 234];
}
else {
if(_valid10){
valid21 = true;
passing10 = 234;
}
const _errs669 = errors;
if("VA" !== data28){
const err674 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/235/const",keyword:"const",params:{allowedValue: "VA"},message:"must be equal to constant",schema:"VA",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[235],data:data28};
if(vErrors === null){
vErrors = [err674];
}
else {
vErrors.push(err674);
}
errors++;
}
var _valid10 = _errs669 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 235];
}
else {
if(_valid10){
valid21 = true;
passing10 = 235;
}
const _errs670 = errors;
if("VC" !== data28){
const err675 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/236/const",keyword:"const",params:{allowedValue: "VC"},message:"must be equal to constant",schema:"VC",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[236],data:data28};
if(vErrors === null){
vErrors = [err675];
}
else {
vErrors.push(err675);
}
errors++;
}
var _valid10 = _errs670 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 236];
}
else {
if(_valid10){
valid21 = true;
passing10 = 236;
}
const _errs671 = errors;
if("VE" !== data28){
const err676 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/237/const",keyword:"const",params:{allowedValue: "VE"},message:"must be equal to constant",schema:"VE",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[237],data:data28};
if(vErrors === null){
vErrors = [err676];
}
else {
vErrors.push(err676);
}
errors++;
}
var _valid10 = _errs671 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 237];
}
else {
if(_valid10){
valid21 = true;
passing10 = 237;
}
const _errs672 = errors;
if("VG" !== data28){
const err677 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/238/const",keyword:"const",params:{allowedValue: "VG"},message:"must be equal to constant",schema:"VG",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[238],data:data28};
if(vErrors === null){
vErrors = [err677];
}
else {
vErrors.push(err677);
}
errors++;
}
var _valid10 = _errs672 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 238];
}
else {
if(_valid10){
valid21 = true;
passing10 = 238;
}
const _errs673 = errors;
if("VI" !== data28){
const err678 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/239/const",keyword:"const",params:{allowedValue: "VI"},message:"must be equal to constant",schema:"VI",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[239],data:data28};
if(vErrors === null){
vErrors = [err678];
}
else {
vErrors.push(err678);
}
errors++;
}
var _valid10 = _errs673 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 239];
}
else {
if(_valid10){
valid21 = true;
passing10 = 239;
}
const _errs674 = errors;
if("VN" !== data28){
const err679 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/240/const",keyword:"const",params:{allowedValue: "VN"},message:"must be equal to constant",schema:"VN",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[240],data:data28};
if(vErrors === null){
vErrors = [err679];
}
else {
vErrors.push(err679);
}
errors++;
}
var _valid10 = _errs674 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 240];
}
else {
if(_valid10){
valid21 = true;
passing10 = 240;
}
const _errs675 = errors;
if("VU" !== data28){
const err680 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/241/const",keyword:"const",params:{allowedValue: "VU"},message:"must be equal to constant",schema:"VU",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[241],data:data28};
if(vErrors === null){
vErrors = [err680];
}
else {
vErrors.push(err680);
}
errors++;
}
var _valid10 = _errs675 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 241];
}
else {
if(_valid10){
valid21 = true;
passing10 = 241;
}
const _errs676 = errors;
if("WF" !== data28){
const err681 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/242/const",keyword:"const",params:{allowedValue: "WF"},message:"must be equal to constant",schema:"WF",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[242],data:data28};
if(vErrors === null){
vErrors = [err681];
}
else {
vErrors.push(err681);
}
errors++;
}
var _valid10 = _errs676 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 242];
}
else {
if(_valid10){
valid21 = true;
passing10 = 242;
}
const _errs677 = errors;
if("WS" !== data28){
const err682 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/243/const",keyword:"const",params:{allowedValue: "WS"},message:"must be equal to constant",schema:"WS",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[243],data:data28};
if(vErrors === null){
vErrors = [err682];
}
else {
vErrors.push(err682);
}
errors++;
}
var _valid10 = _errs677 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 243];
}
else {
if(_valid10){
valid21 = true;
passing10 = 243;
}
const _errs678 = errors;
if("YE" !== data28){
const err683 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/244/const",keyword:"const",params:{allowedValue: "YE"},message:"must be equal to constant",schema:"YE",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[244],data:data28};
if(vErrors === null){
vErrors = [err683];
}
else {
vErrors.push(err683);
}
errors++;
}
var _valid10 = _errs678 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 244];
}
else {
if(_valid10){
valid21 = true;
passing10 = 244;
}
const _errs679 = errors;
if("YT" !== data28){
const err684 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/245/const",keyword:"const",params:{allowedValue: "YT"},message:"must be equal to constant",schema:"YT",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[245],data:data28};
if(vErrors === null){
vErrors = [err684];
}
else {
vErrors.push(err684);
}
errors++;
}
var _valid10 = _errs679 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 245];
}
else {
if(_valid10){
valid21 = true;
passing10 = 245;
}
const _errs680 = errors;
if("ZA" !== data28){
const err685 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/246/const",keyword:"const",params:{allowedValue: "ZA"},message:"must be equal to constant",schema:"ZA",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[246],data:data28};
if(vErrors === null){
vErrors = [err685];
}
else {
vErrors.push(err685);
}
errors++;
}
var _valid10 = _errs680 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 246];
}
else {
if(_valid10){
valid21 = true;
passing10 = 246;
}
const _errs681 = errors;
if("ZM" !== data28){
const err686 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/247/const",keyword:"const",params:{allowedValue: "ZM"},message:"must be equal to constant",schema:"ZM",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[247],data:data28};
if(vErrors === null){
vErrors = [err686];
}
else {
vErrors.push(err686);
}
errors++;
}
var _valid10 = _errs681 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 247];
}
else {
if(_valid10){
valid21 = true;
passing10 = 247;
}
const _errs682 = errors;
if("ZW" !== data28){
const err687 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf/248/const",keyword:"const",params:{allowedValue: "ZW"},message:"must be equal to constant",schema:"ZW",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf[248],data:data28};
if(vErrors === null){
vErrors = [err687];
}
else {
vErrors.push(err687);
}
errors++;
}
var _valid10 = _errs682 === errors;
if(_valid10 && valid21){
valid21 = false;
passing10 = [passing10, 248];
}
else {
if(_valid10){
valid21 = true;
passing10 = 248;
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
if(!valid21){
const err688 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/oneOf",keyword:"oneOf",params:{passingSchemas: passing10},message:"must match exactly one schema in oneOf",schema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.oneOf,parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co,data:data28};
if(vErrors === null){
vErrors = [err688];
}
else {
vErrors.push(err688);
}
errors++;
}
else {
errors = _errs433;
if(vErrors !== null){
if(_errs433){
vErrors.length = _errs433;
}
else {
vErrors = null;
}
}
}
if(typeof data28 === "string"){
if(!pattern8.test(data28)){
const err689 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/pattern",keyword:"pattern",params:{pattern: "[A-Z]{1,10}"},message:"must match pattern \""+"[A-Z]{1,10}"+"\"",schema:"[A-Z]{1,10}",parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co,data:data28};
if(vErrors === null){
vErrors = [err689];
}
else {
vErrors.push(err689);
}
errors++;
}
}
else {
const err690 = {instancePath:instancePath+"/t/" + i1+"/co",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/co/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co.type,parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.co,data:data28};
if(vErrors === null){
vErrors = [err690];
}
else {
vErrors.push(err690);
}
errors++;
}
}
if(data20.is !== undefined){
let data29 = data20.is;
if(typeof data29 === "string"){
if(func3(data29) > 80){
const err691 = {instancePath:instancePath+"/t/" + i1+"/is",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/is/maxLength",keyword:"maxLength",params:{limit: 80},message:"must NOT have more than 80 characters",schema:80,parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.is,data:data29};
if(vErrors === null){
vErrors = [err691];
}
else {
vErrors.push(err691);
}
errors++;
}
}
else {
const err692 = {instancePath:instancePath+"/t/" + i1+"/is",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/is/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.allOf[1].oneOf[1].properties.t.items.properties.is.type,parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.is,data:data29};
if(vErrors === null){
vErrors = [err692];
}
else {
vErrors.push(err692);
}
errors++;
}
}
if(data20.ci !== undefined){
let data30 = data20.ci;
if(typeof data30 === "string"){
if(func3(data30) > 80){
const err693 = {instancePath:instancePath+"/t/" + i1+"/ci",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ci/maxLength",keyword:"maxLength",params:{limit: 80},message:"must NOT have more than 80 characters",schema:80,parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ci,data:data30};
if(vErrors === null){
vErrors = [err693];
}
else {
vErrors.push(err693);
}
errors++;
}
}
else {
const err694 = {instancePath:instancePath+"/t/" + i1+"/ci",schemaPath:"#/allOf/1/oneOf/1/properties/t/items/properties/ci/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ci.type,parentSchema:schema31.allOf[1].oneOf[1].properties.t.items.properties.ci,data:data30};
if(vErrors === null){
vErrors = [err694];
}
else {
vErrors.push(err694);
}
errors++;
}
}
}
else {
const err695 = {instancePath:instancePath+"/t/" + i1,schemaPath:"#/allOf/1/oneOf/1/properties/t/items/type",keyword:"type",params:{type: "object"},message:"must be object",schema:schema31.allOf[1].oneOf[1].properties.t.items.type,parentSchema:schema31.allOf[1].oneOf[1].properties.t.items,data:data20};
if(vErrors === null){
vErrors = [err695];
}
else {
vErrors.push(err695);
}
errors++;
}
}
}
else {
const err696 = {instancePath:instancePath+"/t",schemaPath:"#/allOf/1/oneOf/1/properties/t/type",keyword:"type",params:{type: "array"},message:"must be array",schema:schema31.allOf[1].oneOf[1].properties.t.type,parentSchema:schema31.allOf[1].oneOf[1].properties.t,data:data19};
if(vErrors === null){
vErrors = [err696];
}
else {
vErrors.push(err696);
}
errors++;
}
}
}
var _valid0 = _errs329 === errors;
if(_valid0 && valid3){
valid3 = false;
passing0 = [passing0, 1];
}
else {
if(_valid0){
valid3 = true;
passing0 = 1;
if(props0 !== true){
props0 = props0 || {};
props0.t = true;
}
}
const _errs687 = errors;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.r === undefined){
const err697 = {instancePath,schemaPath:"#/allOf/1/oneOf/2/required",keyword:"required",params:{missingProperty: "r"},message:"must have required property '"+"r"+"'",schema:schema31.allOf[1].oneOf[2].required,parentSchema:schema31.allOf[1].oneOf[2],data};
if(vErrors === null){
vErrors = [err697];
}
else {
vErrors.push(err697);
}
errors++;
}
if(data.r !== undefined){
let data31 = data.r;
if(Array.isArray(data31)){
if(data31.length > 1){
const err698 = {instancePath:instancePath+"/r",schemaPath:"#/allOf/1/oneOf/2/properties/r/maxItems",keyword:"maxItems",params:{limit: 1},message:"must NOT have more than 1 items",schema:1,parentSchema:schema31.allOf[1].oneOf[2].properties.r,data:data31};
if(vErrors === null){
vErrors = [err698];
}
else {
vErrors.push(err698);
}
errors++;
}
if(data31.length < 1){
const err699 = {instancePath:instancePath+"/r",schemaPath:"#/allOf/1/oneOf/2/properties/r/minItems",keyword:"minItems",params:{limit: 1},message:"must NOT have fewer than 1 items",schema:1,parentSchema:schema31.allOf[1].oneOf[2].properties.r,data:data31};
if(vErrors === null){
vErrors = [err699];
}
else {
vErrors.push(err699);
}
errors++;
}
const len2 = data31.length;
for(let i2=0; i2<len2; i2++){
let data32 = data31[i2];
if(data32 && typeof data32 == "object" && !Array.isArray(data32)){
if(data32.tg === undefined){
const err700 = {instancePath:instancePath+"/r/" + i2,schemaPath:"#/allOf/1/oneOf/2/properties/r/items/required",keyword:"required",params:{missingProperty: "tg"},message:"must have required property '"+"tg"+"'",schema:schema31.allOf[1].oneOf[2].properties.r.items.required,parentSchema:schema31.allOf[1].oneOf[2].properties.r.items,data:data32};
if(vErrors === null){
vErrors = [err700];
}
else {
vErrors.push(err700);
}
errors++;
}
if(data32.fr === undefined){
const err701 = {instancePath:instancePath+"/r/" + i2,schemaPath:"#/allOf/1/oneOf/2/properties/r/items/required",keyword:"required",params:{missingProperty: "fr"},message:"must have required property '"+"fr"+"'",schema:schema31.allOf[1].oneOf[2].properties.r.items.required,parentSchema:schema31.allOf[1].oneOf[2].properties.r.items,data:data32};
if(vErrors === null){
vErrors = [err701];
}
else {
vErrors.push(err701);
}
errors++;
}
if(data32.co === undefined){
const err702 = {instancePath:instancePath+"/r/" + i2,schemaPath:"#/allOf/1/oneOf/2/properties/r/items/required",keyword:"required",params:{missingProperty: "co"},message:"must have required property '"+"co"+"'",schema:schema31.allOf[1].oneOf[2].properties.r.items.required,parentSchema:schema31.allOf[1].oneOf[2].properties.r.items,data:data32};
if(vErrors === null){
vErrors = [err702];
}
else {
vErrors.push(err702);
}
errors++;
}
if(data32.is === undefined){
const err703 = {instancePath:instancePath+"/r/" + i2,schemaPath:"#/allOf/1/oneOf/2/properties/r/items/required",keyword:"required",params:{missingProperty: "is"},message:"must have required property '"+"is"+"'",schema:schema31.allOf[1].oneOf[2].properties.r.items.required,parentSchema:schema31.allOf[1].oneOf[2].properties.r.items,data:data32};
if(vErrors === null){
vErrors = [err703];
}
else {
vErrors.push(err703);
}
errors++;
}
if(data32.df === undefined){
const err704 = {instancePath:instancePath+"/r/" + i2,schemaPath:"#/allOf/1/oneOf/2/properties/r/items/required",keyword:"required",params:{missingProperty: "df"},message:"must have required property '"+"df"+"'",schema:schema31.allOf[1].oneOf[2].properties.r.items.required,parentSchema:schema31.allOf[1].oneOf[2].properties.r.items,data:data32};
if(vErrors === null){
vErrors = [err704];
}
else {
vErrors.push(err704);
}
errors++;
}
if(data32.du === undefined){
const err705 = {instancePath:instancePath+"/r/" + i2,schemaPath:"#/allOf/1/oneOf/2/properties/r/items/required",keyword:"required",params:{missingProperty: "du"},message:"must have required property '"+"du"+"'",schema:schema31.allOf[1].oneOf[2].properties.r.items.required,parentSchema:schema31.allOf[1].oneOf[2].properties.r.items,data:data32};
if(vErrors === null){
vErrors = [err705];
}
else {
vErrors.push(err705);
}
errors++;
}
if(data32.ci === undefined){
const err706 = {instancePath:instancePath+"/r/" + i2,schemaPath:"#/allOf/1/oneOf/2/properties/r/items/required",keyword:"required",params:{missingProperty: "ci"},message:"must have required property '"+"ci"+"'",schema:schema31.allOf[1].oneOf[2].properties.r.items.required,parentSchema:schema31.allOf[1].oneOf[2].properties.r.items,data:data32};
if(vErrors === null){
vErrors = [err706];
}
else {
vErrors.push(err706);
}
errors++;
}
if(data32.tg !== undefined){
let data33 = data32.tg;
if(typeof data33 !== "string"){
const err707 = {instancePath:instancePath+"/r/" + i2+"/tg",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/tg/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.allOf[1].oneOf[2].properties.r.items.properties.tg.type,parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.tg,data:data33};
if(vErrors === null){
vErrors = [err707];
}
else {
vErrors.push(err707);
}
errors++;
}
const _errs694 = errors;
let valid26 = false;
let passing11 = null;
const _errs695 = errors;
if("840539006" !== data33){
const err708 = {instancePath:instancePath+"/r/" + i2+"/tg",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/tg/oneOf/0/const",keyword:"const",params:{allowedValue: "840539006"},message:"must be equal to constant",schema:"840539006",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.tg.oneOf[0],data:data33};
if(vErrors === null){
vErrors = [err708];
}
else {
vErrors.push(err708);
}
errors++;
}
var _valid11 = _errs695 === errors;
if(_valid11){
valid26 = true;
passing11 = 0;
}
if(!valid26){
const err709 = {instancePath:instancePath+"/r/" + i2+"/tg",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/tg/oneOf",keyword:"oneOf",params:{passingSchemas: passing11},message:"must match exactly one schema in oneOf",schema:schema31.allOf[1].oneOf[2].properties.r.items.properties.tg.oneOf,parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.tg,data:data33};
if(vErrors === null){
vErrors = [err709];
}
else {
vErrors.push(err709);
}
errors++;
}
else {
errors = _errs694;
if(vErrors !== null){
if(_errs694){
vErrors.length = _errs694;
}
else {
vErrors = null;
}
}
}
}
if(data32.fr !== undefined){
let data34 = data32.fr;
if(typeof data34 === "string"){
if(!(formats0.validate(data34))){
const err710 = {instancePath:instancePath+"/r/" + i2+"/fr",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/fr/format",keyword:"format",params:{format: "date"},message:"must match format \""+"date"+"\"",schema:"date",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.fr,data:data34};
if(vErrors === null){
vErrors = [err710];
}
else {
vErrors.push(err710);
}
errors++;
}
}
else {
const err711 = {instancePath:instancePath+"/r/" + i2+"/fr",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/fr/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.allOf[1].oneOf[2].properties.r.items.properties.fr.type,parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.fr,data:data34};
if(vErrors === null){
vErrors = [err711];
}
else {
vErrors.push(err711);
}
errors++;
}
}
if(data32.co !== undefined){
let data35 = data32.co;
const _errs700 = errors;
let valid27 = false;
let passing12 = null;
const _errs701 = errors;
if("AD" !== data35){
const err712 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/0/const",keyword:"const",params:{allowedValue: "AD"},message:"must be equal to constant",schema:"AD",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[0],data:data35};
if(vErrors === null){
vErrors = [err712];
}
else {
vErrors.push(err712);
}
errors++;
}
var _valid12 = _errs701 === errors;
if(_valid12){
valid27 = true;
passing12 = 0;
}
const _errs702 = errors;
if("AE" !== data35){
const err713 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/1/const",keyword:"const",params:{allowedValue: "AE"},message:"must be equal to constant",schema:"AE",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[1],data:data35};
if(vErrors === null){
vErrors = [err713];
}
else {
vErrors.push(err713);
}
errors++;
}
var _valid12 = _errs702 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 1];
}
else {
if(_valid12){
valid27 = true;
passing12 = 1;
}
const _errs703 = errors;
if("AF" !== data35){
const err714 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/2/const",keyword:"const",params:{allowedValue: "AF"},message:"must be equal to constant",schema:"AF",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[2],data:data35};
if(vErrors === null){
vErrors = [err714];
}
else {
vErrors.push(err714);
}
errors++;
}
var _valid12 = _errs703 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 2];
}
else {
if(_valid12){
valid27 = true;
passing12 = 2;
}
const _errs704 = errors;
if("AG" !== data35){
const err715 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/3/const",keyword:"const",params:{allowedValue: "AG"},message:"must be equal to constant",schema:"AG",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[3],data:data35};
if(vErrors === null){
vErrors = [err715];
}
else {
vErrors.push(err715);
}
errors++;
}
var _valid12 = _errs704 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 3];
}
else {
if(_valid12){
valid27 = true;
passing12 = 3;
}
const _errs705 = errors;
if("AI" !== data35){
const err716 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/4/const",keyword:"const",params:{allowedValue: "AI"},message:"must be equal to constant",schema:"AI",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[4],data:data35};
if(vErrors === null){
vErrors = [err716];
}
else {
vErrors.push(err716);
}
errors++;
}
var _valid12 = _errs705 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 4];
}
else {
if(_valid12){
valid27 = true;
passing12 = 4;
}
const _errs706 = errors;
if("AL" !== data35){
const err717 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/5/const",keyword:"const",params:{allowedValue: "AL"},message:"must be equal to constant",schema:"AL",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[5],data:data35};
if(vErrors === null){
vErrors = [err717];
}
else {
vErrors.push(err717);
}
errors++;
}
var _valid12 = _errs706 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 5];
}
else {
if(_valid12){
valid27 = true;
passing12 = 5;
}
const _errs707 = errors;
if("AM" !== data35){
const err718 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/6/const",keyword:"const",params:{allowedValue: "AM"},message:"must be equal to constant",schema:"AM",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[6],data:data35};
if(vErrors === null){
vErrors = [err718];
}
else {
vErrors.push(err718);
}
errors++;
}
var _valid12 = _errs707 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 6];
}
else {
if(_valid12){
valid27 = true;
passing12 = 6;
}
const _errs708 = errors;
if("AO" !== data35){
const err719 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/7/const",keyword:"const",params:{allowedValue: "AO"},message:"must be equal to constant",schema:"AO",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[7],data:data35};
if(vErrors === null){
vErrors = [err719];
}
else {
vErrors.push(err719);
}
errors++;
}
var _valid12 = _errs708 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 7];
}
else {
if(_valid12){
valid27 = true;
passing12 = 7;
}
const _errs709 = errors;
if("AQ" !== data35){
const err720 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/8/const",keyword:"const",params:{allowedValue: "AQ"},message:"must be equal to constant",schema:"AQ",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[8],data:data35};
if(vErrors === null){
vErrors = [err720];
}
else {
vErrors.push(err720);
}
errors++;
}
var _valid12 = _errs709 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 8];
}
else {
if(_valid12){
valid27 = true;
passing12 = 8;
}
const _errs710 = errors;
if("AR" !== data35){
const err721 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/9/const",keyword:"const",params:{allowedValue: "AR"},message:"must be equal to constant",schema:"AR",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[9],data:data35};
if(vErrors === null){
vErrors = [err721];
}
else {
vErrors.push(err721);
}
errors++;
}
var _valid12 = _errs710 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 9];
}
else {
if(_valid12){
valid27 = true;
passing12 = 9;
}
const _errs711 = errors;
if("AS" !== data35){
const err722 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/10/const",keyword:"const",params:{allowedValue: "AS"},message:"must be equal to constant",schema:"AS",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[10],data:data35};
if(vErrors === null){
vErrors = [err722];
}
else {
vErrors.push(err722);
}
errors++;
}
var _valid12 = _errs711 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 10];
}
else {
if(_valid12){
valid27 = true;
passing12 = 10;
}
const _errs712 = errors;
if("AT" !== data35){
const err723 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/11/const",keyword:"const",params:{allowedValue: "AT"},message:"must be equal to constant",schema:"AT",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[11],data:data35};
if(vErrors === null){
vErrors = [err723];
}
else {
vErrors.push(err723);
}
errors++;
}
var _valid12 = _errs712 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 11];
}
else {
if(_valid12){
valid27 = true;
passing12 = 11;
}
const _errs713 = errors;
if("AU" !== data35){
const err724 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/12/const",keyword:"const",params:{allowedValue: "AU"},message:"must be equal to constant",schema:"AU",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[12],data:data35};
if(vErrors === null){
vErrors = [err724];
}
else {
vErrors.push(err724);
}
errors++;
}
var _valid12 = _errs713 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 12];
}
else {
if(_valid12){
valid27 = true;
passing12 = 12;
}
const _errs714 = errors;
if("AW" !== data35){
const err725 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/13/const",keyword:"const",params:{allowedValue: "AW"},message:"must be equal to constant",schema:"AW",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[13],data:data35};
if(vErrors === null){
vErrors = [err725];
}
else {
vErrors.push(err725);
}
errors++;
}
var _valid12 = _errs714 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 13];
}
else {
if(_valid12){
valid27 = true;
passing12 = 13;
}
const _errs715 = errors;
if("AX" !== data35){
const err726 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/14/const",keyword:"const",params:{allowedValue: "AX"},message:"must be equal to constant",schema:"AX",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[14],data:data35};
if(vErrors === null){
vErrors = [err726];
}
else {
vErrors.push(err726);
}
errors++;
}
var _valid12 = _errs715 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 14];
}
else {
if(_valid12){
valid27 = true;
passing12 = 14;
}
const _errs716 = errors;
if("AZ" !== data35){
const err727 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/15/const",keyword:"const",params:{allowedValue: "AZ"},message:"must be equal to constant",schema:"AZ",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[15],data:data35};
if(vErrors === null){
vErrors = [err727];
}
else {
vErrors.push(err727);
}
errors++;
}
var _valid12 = _errs716 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 15];
}
else {
if(_valid12){
valid27 = true;
passing12 = 15;
}
const _errs717 = errors;
if("BA" !== data35){
const err728 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/16/const",keyword:"const",params:{allowedValue: "BA"},message:"must be equal to constant",schema:"BA",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[16],data:data35};
if(vErrors === null){
vErrors = [err728];
}
else {
vErrors.push(err728);
}
errors++;
}
var _valid12 = _errs717 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 16];
}
else {
if(_valid12){
valid27 = true;
passing12 = 16;
}
const _errs718 = errors;
if("BB" !== data35){
const err729 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/17/const",keyword:"const",params:{allowedValue: "BB"},message:"must be equal to constant",schema:"BB",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[17],data:data35};
if(vErrors === null){
vErrors = [err729];
}
else {
vErrors.push(err729);
}
errors++;
}
var _valid12 = _errs718 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 17];
}
else {
if(_valid12){
valid27 = true;
passing12 = 17;
}
const _errs719 = errors;
if("BD" !== data35){
const err730 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/18/const",keyword:"const",params:{allowedValue: "BD"},message:"must be equal to constant",schema:"BD",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[18],data:data35};
if(vErrors === null){
vErrors = [err730];
}
else {
vErrors.push(err730);
}
errors++;
}
var _valid12 = _errs719 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 18];
}
else {
if(_valid12){
valid27 = true;
passing12 = 18;
}
const _errs720 = errors;
if("BE" !== data35){
const err731 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/19/const",keyword:"const",params:{allowedValue: "BE"},message:"must be equal to constant",schema:"BE",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[19],data:data35};
if(vErrors === null){
vErrors = [err731];
}
else {
vErrors.push(err731);
}
errors++;
}
var _valid12 = _errs720 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 19];
}
else {
if(_valid12){
valid27 = true;
passing12 = 19;
}
const _errs721 = errors;
if("BF" !== data35){
const err732 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/20/const",keyword:"const",params:{allowedValue: "BF"},message:"must be equal to constant",schema:"BF",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[20],data:data35};
if(vErrors === null){
vErrors = [err732];
}
else {
vErrors.push(err732);
}
errors++;
}
var _valid12 = _errs721 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 20];
}
else {
if(_valid12){
valid27 = true;
passing12 = 20;
}
const _errs722 = errors;
if("BG" !== data35){
const err733 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/21/const",keyword:"const",params:{allowedValue: "BG"},message:"must be equal to constant",schema:"BG",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[21],data:data35};
if(vErrors === null){
vErrors = [err733];
}
else {
vErrors.push(err733);
}
errors++;
}
var _valid12 = _errs722 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 21];
}
else {
if(_valid12){
valid27 = true;
passing12 = 21;
}
const _errs723 = errors;
if("BH" !== data35){
const err734 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/22/const",keyword:"const",params:{allowedValue: "BH"},message:"must be equal to constant",schema:"BH",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[22],data:data35};
if(vErrors === null){
vErrors = [err734];
}
else {
vErrors.push(err734);
}
errors++;
}
var _valid12 = _errs723 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 22];
}
else {
if(_valid12){
valid27 = true;
passing12 = 22;
}
const _errs724 = errors;
if("BI" !== data35){
const err735 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/23/const",keyword:"const",params:{allowedValue: "BI"},message:"must be equal to constant",schema:"BI",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[23],data:data35};
if(vErrors === null){
vErrors = [err735];
}
else {
vErrors.push(err735);
}
errors++;
}
var _valid12 = _errs724 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 23];
}
else {
if(_valid12){
valid27 = true;
passing12 = 23;
}
const _errs725 = errors;
if("BJ" !== data35){
const err736 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/24/const",keyword:"const",params:{allowedValue: "BJ"},message:"must be equal to constant",schema:"BJ",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[24],data:data35};
if(vErrors === null){
vErrors = [err736];
}
else {
vErrors.push(err736);
}
errors++;
}
var _valid12 = _errs725 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 24];
}
else {
if(_valid12){
valid27 = true;
passing12 = 24;
}
const _errs726 = errors;
if("BL" !== data35){
const err737 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/25/const",keyword:"const",params:{allowedValue: "BL"},message:"must be equal to constant",schema:"BL",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[25],data:data35};
if(vErrors === null){
vErrors = [err737];
}
else {
vErrors.push(err737);
}
errors++;
}
var _valid12 = _errs726 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 25];
}
else {
if(_valid12){
valid27 = true;
passing12 = 25;
}
const _errs727 = errors;
if("BM" !== data35){
const err738 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/26/const",keyword:"const",params:{allowedValue: "BM"},message:"must be equal to constant",schema:"BM",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[26],data:data35};
if(vErrors === null){
vErrors = [err738];
}
else {
vErrors.push(err738);
}
errors++;
}
var _valid12 = _errs727 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 26];
}
else {
if(_valid12){
valid27 = true;
passing12 = 26;
}
const _errs728 = errors;
if("BN" !== data35){
const err739 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/27/const",keyword:"const",params:{allowedValue: "BN"},message:"must be equal to constant",schema:"BN",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[27],data:data35};
if(vErrors === null){
vErrors = [err739];
}
else {
vErrors.push(err739);
}
errors++;
}
var _valid12 = _errs728 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 27];
}
else {
if(_valid12){
valid27 = true;
passing12 = 27;
}
const _errs729 = errors;
if("BO" !== data35){
const err740 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/28/const",keyword:"const",params:{allowedValue: "BO"},message:"must be equal to constant",schema:"BO",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[28],data:data35};
if(vErrors === null){
vErrors = [err740];
}
else {
vErrors.push(err740);
}
errors++;
}
var _valid12 = _errs729 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 28];
}
else {
if(_valid12){
valid27 = true;
passing12 = 28;
}
const _errs730 = errors;
if("BQ" !== data35){
const err741 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/29/const",keyword:"const",params:{allowedValue: "BQ"},message:"must be equal to constant",schema:"BQ",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[29],data:data35};
if(vErrors === null){
vErrors = [err741];
}
else {
vErrors.push(err741);
}
errors++;
}
var _valid12 = _errs730 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 29];
}
else {
if(_valid12){
valid27 = true;
passing12 = 29;
}
const _errs731 = errors;
if("BR" !== data35){
const err742 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/30/const",keyword:"const",params:{allowedValue: "BR"},message:"must be equal to constant",schema:"BR",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[30],data:data35};
if(vErrors === null){
vErrors = [err742];
}
else {
vErrors.push(err742);
}
errors++;
}
var _valid12 = _errs731 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 30];
}
else {
if(_valid12){
valid27 = true;
passing12 = 30;
}
const _errs732 = errors;
if("BS" !== data35){
const err743 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/31/const",keyword:"const",params:{allowedValue: "BS"},message:"must be equal to constant",schema:"BS",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[31],data:data35};
if(vErrors === null){
vErrors = [err743];
}
else {
vErrors.push(err743);
}
errors++;
}
var _valid12 = _errs732 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 31];
}
else {
if(_valid12){
valid27 = true;
passing12 = 31;
}
const _errs733 = errors;
if("BT" !== data35){
const err744 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/32/const",keyword:"const",params:{allowedValue: "BT"},message:"must be equal to constant",schema:"BT",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[32],data:data35};
if(vErrors === null){
vErrors = [err744];
}
else {
vErrors.push(err744);
}
errors++;
}
var _valid12 = _errs733 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 32];
}
else {
if(_valid12){
valid27 = true;
passing12 = 32;
}
const _errs734 = errors;
if("BV" !== data35){
const err745 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/33/const",keyword:"const",params:{allowedValue: "BV"},message:"must be equal to constant",schema:"BV",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[33],data:data35};
if(vErrors === null){
vErrors = [err745];
}
else {
vErrors.push(err745);
}
errors++;
}
var _valid12 = _errs734 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 33];
}
else {
if(_valid12){
valid27 = true;
passing12 = 33;
}
const _errs735 = errors;
if("BW" !== data35){
const err746 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/34/const",keyword:"const",params:{allowedValue: "BW"},message:"must be equal to constant",schema:"BW",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[34],data:data35};
if(vErrors === null){
vErrors = [err746];
}
else {
vErrors.push(err746);
}
errors++;
}
var _valid12 = _errs735 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 34];
}
else {
if(_valid12){
valid27 = true;
passing12 = 34;
}
const _errs736 = errors;
if("BY" !== data35){
const err747 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/35/const",keyword:"const",params:{allowedValue: "BY"},message:"must be equal to constant",schema:"BY",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[35],data:data35};
if(vErrors === null){
vErrors = [err747];
}
else {
vErrors.push(err747);
}
errors++;
}
var _valid12 = _errs736 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 35];
}
else {
if(_valid12){
valid27 = true;
passing12 = 35;
}
const _errs737 = errors;
if("BZ" !== data35){
const err748 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/36/const",keyword:"const",params:{allowedValue: "BZ"},message:"must be equal to constant",schema:"BZ",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[36],data:data35};
if(vErrors === null){
vErrors = [err748];
}
else {
vErrors.push(err748);
}
errors++;
}
var _valid12 = _errs737 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 36];
}
else {
if(_valid12){
valid27 = true;
passing12 = 36;
}
const _errs738 = errors;
if("CA" !== data35){
const err749 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/37/const",keyword:"const",params:{allowedValue: "CA"},message:"must be equal to constant",schema:"CA",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[37],data:data35};
if(vErrors === null){
vErrors = [err749];
}
else {
vErrors.push(err749);
}
errors++;
}
var _valid12 = _errs738 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 37];
}
else {
if(_valid12){
valid27 = true;
passing12 = 37;
}
const _errs739 = errors;
if("CC" !== data35){
const err750 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/38/const",keyword:"const",params:{allowedValue: "CC"},message:"must be equal to constant",schema:"CC",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[38],data:data35};
if(vErrors === null){
vErrors = [err750];
}
else {
vErrors.push(err750);
}
errors++;
}
var _valid12 = _errs739 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 38];
}
else {
if(_valid12){
valid27 = true;
passing12 = 38;
}
const _errs740 = errors;
if("CD" !== data35){
const err751 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/39/const",keyword:"const",params:{allowedValue: "CD"},message:"must be equal to constant",schema:"CD",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[39],data:data35};
if(vErrors === null){
vErrors = [err751];
}
else {
vErrors.push(err751);
}
errors++;
}
var _valid12 = _errs740 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 39];
}
else {
if(_valid12){
valid27 = true;
passing12 = 39;
}
const _errs741 = errors;
if("CF" !== data35){
const err752 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/40/const",keyword:"const",params:{allowedValue: "CF"},message:"must be equal to constant",schema:"CF",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[40],data:data35};
if(vErrors === null){
vErrors = [err752];
}
else {
vErrors.push(err752);
}
errors++;
}
var _valid12 = _errs741 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 40];
}
else {
if(_valid12){
valid27 = true;
passing12 = 40;
}
const _errs742 = errors;
if("CG" !== data35){
const err753 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/41/const",keyword:"const",params:{allowedValue: "CG"},message:"must be equal to constant",schema:"CG",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[41],data:data35};
if(vErrors === null){
vErrors = [err753];
}
else {
vErrors.push(err753);
}
errors++;
}
var _valid12 = _errs742 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 41];
}
else {
if(_valid12){
valid27 = true;
passing12 = 41;
}
const _errs743 = errors;
if("CH" !== data35){
const err754 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/42/const",keyword:"const",params:{allowedValue: "CH"},message:"must be equal to constant",schema:"CH",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[42],data:data35};
if(vErrors === null){
vErrors = [err754];
}
else {
vErrors.push(err754);
}
errors++;
}
var _valid12 = _errs743 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 42];
}
else {
if(_valid12){
valid27 = true;
passing12 = 42;
}
const _errs744 = errors;
if("CI" !== data35){
const err755 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/43/const",keyword:"const",params:{allowedValue: "CI"},message:"must be equal to constant",schema:"CI",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[43],data:data35};
if(vErrors === null){
vErrors = [err755];
}
else {
vErrors.push(err755);
}
errors++;
}
var _valid12 = _errs744 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 43];
}
else {
if(_valid12){
valid27 = true;
passing12 = 43;
}
const _errs745 = errors;
if("CK" !== data35){
const err756 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/44/const",keyword:"const",params:{allowedValue: "CK"},message:"must be equal to constant",schema:"CK",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[44],data:data35};
if(vErrors === null){
vErrors = [err756];
}
else {
vErrors.push(err756);
}
errors++;
}
var _valid12 = _errs745 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 44];
}
else {
if(_valid12){
valid27 = true;
passing12 = 44;
}
const _errs746 = errors;
if("CL" !== data35){
const err757 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/45/const",keyword:"const",params:{allowedValue: "CL"},message:"must be equal to constant",schema:"CL",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[45],data:data35};
if(vErrors === null){
vErrors = [err757];
}
else {
vErrors.push(err757);
}
errors++;
}
var _valid12 = _errs746 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 45];
}
else {
if(_valid12){
valid27 = true;
passing12 = 45;
}
const _errs747 = errors;
if("CM" !== data35){
const err758 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/46/const",keyword:"const",params:{allowedValue: "CM"},message:"must be equal to constant",schema:"CM",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[46],data:data35};
if(vErrors === null){
vErrors = [err758];
}
else {
vErrors.push(err758);
}
errors++;
}
var _valid12 = _errs747 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 46];
}
else {
if(_valid12){
valid27 = true;
passing12 = 46;
}
const _errs748 = errors;
if("CN" !== data35){
const err759 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/47/const",keyword:"const",params:{allowedValue: "CN"},message:"must be equal to constant",schema:"CN",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[47],data:data35};
if(vErrors === null){
vErrors = [err759];
}
else {
vErrors.push(err759);
}
errors++;
}
var _valid12 = _errs748 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 47];
}
else {
if(_valid12){
valid27 = true;
passing12 = 47;
}
const _errs749 = errors;
if("CO" !== data35){
const err760 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/48/const",keyword:"const",params:{allowedValue: "CO"},message:"must be equal to constant",schema:"CO",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[48],data:data35};
if(vErrors === null){
vErrors = [err760];
}
else {
vErrors.push(err760);
}
errors++;
}
var _valid12 = _errs749 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 48];
}
else {
if(_valid12){
valid27 = true;
passing12 = 48;
}
const _errs750 = errors;
if("CR" !== data35){
const err761 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/49/const",keyword:"const",params:{allowedValue: "CR"},message:"must be equal to constant",schema:"CR",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[49],data:data35};
if(vErrors === null){
vErrors = [err761];
}
else {
vErrors.push(err761);
}
errors++;
}
var _valid12 = _errs750 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 49];
}
else {
if(_valid12){
valid27 = true;
passing12 = 49;
}
const _errs751 = errors;
if("CU" !== data35){
const err762 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/50/const",keyword:"const",params:{allowedValue: "CU"},message:"must be equal to constant",schema:"CU",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[50],data:data35};
if(vErrors === null){
vErrors = [err762];
}
else {
vErrors.push(err762);
}
errors++;
}
var _valid12 = _errs751 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 50];
}
else {
if(_valid12){
valid27 = true;
passing12 = 50;
}
const _errs752 = errors;
if("CV" !== data35){
const err763 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/51/const",keyword:"const",params:{allowedValue: "CV"},message:"must be equal to constant",schema:"CV",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[51],data:data35};
if(vErrors === null){
vErrors = [err763];
}
else {
vErrors.push(err763);
}
errors++;
}
var _valid12 = _errs752 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 51];
}
else {
if(_valid12){
valid27 = true;
passing12 = 51;
}
const _errs753 = errors;
if("CW" !== data35){
const err764 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/52/const",keyword:"const",params:{allowedValue: "CW"},message:"must be equal to constant",schema:"CW",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[52],data:data35};
if(vErrors === null){
vErrors = [err764];
}
else {
vErrors.push(err764);
}
errors++;
}
var _valid12 = _errs753 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 52];
}
else {
if(_valid12){
valid27 = true;
passing12 = 52;
}
const _errs754 = errors;
if("CX" !== data35){
const err765 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/53/const",keyword:"const",params:{allowedValue: "CX"},message:"must be equal to constant",schema:"CX",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[53],data:data35};
if(vErrors === null){
vErrors = [err765];
}
else {
vErrors.push(err765);
}
errors++;
}
var _valid12 = _errs754 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 53];
}
else {
if(_valid12){
valid27 = true;
passing12 = 53;
}
const _errs755 = errors;
if("CY" !== data35){
const err766 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/54/const",keyword:"const",params:{allowedValue: "CY"},message:"must be equal to constant",schema:"CY",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[54],data:data35};
if(vErrors === null){
vErrors = [err766];
}
else {
vErrors.push(err766);
}
errors++;
}
var _valid12 = _errs755 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 54];
}
else {
if(_valid12){
valid27 = true;
passing12 = 54;
}
const _errs756 = errors;
if("CZ" !== data35){
const err767 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/55/const",keyword:"const",params:{allowedValue: "CZ"},message:"must be equal to constant",schema:"CZ",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[55],data:data35};
if(vErrors === null){
vErrors = [err767];
}
else {
vErrors.push(err767);
}
errors++;
}
var _valid12 = _errs756 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 55];
}
else {
if(_valid12){
valid27 = true;
passing12 = 55;
}
const _errs757 = errors;
if("DE" !== data35){
const err768 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/56/const",keyword:"const",params:{allowedValue: "DE"},message:"must be equal to constant",schema:"DE",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[56],data:data35};
if(vErrors === null){
vErrors = [err768];
}
else {
vErrors.push(err768);
}
errors++;
}
var _valid12 = _errs757 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 56];
}
else {
if(_valid12){
valid27 = true;
passing12 = 56;
}
const _errs758 = errors;
if("DJ" !== data35){
const err769 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/57/const",keyword:"const",params:{allowedValue: "DJ"},message:"must be equal to constant",schema:"DJ",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[57],data:data35};
if(vErrors === null){
vErrors = [err769];
}
else {
vErrors.push(err769);
}
errors++;
}
var _valid12 = _errs758 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 57];
}
else {
if(_valid12){
valid27 = true;
passing12 = 57;
}
const _errs759 = errors;
if("DK" !== data35){
const err770 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/58/const",keyword:"const",params:{allowedValue: "DK"},message:"must be equal to constant",schema:"DK",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[58],data:data35};
if(vErrors === null){
vErrors = [err770];
}
else {
vErrors.push(err770);
}
errors++;
}
var _valid12 = _errs759 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 58];
}
else {
if(_valid12){
valid27 = true;
passing12 = 58;
}
const _errs760 = errors;
if("DM" !== data35){
const err771 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/59/const",keyword:"const",params:{allowedValue: "DM"},message:"must be equal to constant",schema:"DM",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[59],data:data35};
if(vErrors === null){
vErrors = [err771];
}
else {
vErrors.push(err771);
}
errors++;
}
var _valid12 = _errs760 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 59];
}
else {
if(_valid12){
valid27 = true;
passing12 = 59;
}
const _errs761 = errors;
if("DO" !== data35){
const err772 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/60/const",keyword:"const",params:{allowedValue: "DO"},message:"must be equal to constant",schema:"DO",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[60],data:data35};
if(vErrors === null){
vErrors = [err772];
}
else {
vErrors.push(err772);
}
errors++;
}
var _valid12 = _errs761 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 60];
}
else {
if(_valid12){
valid27 = true;
passing12 = 60;
}
const _errs762 = errors;
if("DZ" !== data35){
const err773 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/61/const",keyword:"const",params:{allowedValue: "DZ"},message:"must be equal to constant",schema:"DZ",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[61],data:data35};
if(vErrors === null){
vErrors = [err773];
}
else {
vErrors.push(err773);
}
errors++;
}
var _valid12 = _errs762 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 61];
}
else {
if(_valid12){
valid27 = true;
passing12 = 61;
}
const _errs763 = errors;
if("EC" !== data35){
const err774 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/62/const",keyword:"const",params:{allowedValue: "EC"},message:"must be equal to constant",schema:"EC",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[62],data:data35};
if(vErrors === null){
vErrors = [err774];
}
else {
vErrors.push(err774);
}
errors++;
}
var _valid12 = _errs763 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 62];
}
else {
if(_valid12){
valid27 = true;
passing12 = 62;
}
const _errs764 = errors;
if("EE" !== data35){
const err775 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/63/const",keyword:"const",params:{allowedValue: "EE"},message:"must be equal to constant",schema:"EE",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[63],data:data35};
if(vErrors === null){
vErrors = [err775];
}
else {
vErrors.push(err775);
}
errors++;
}
var _valid12 = _errs764 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 63];
}
else {
if(_valid12){
valid27 = true;
passing12 = 63;
}
const _errs765 = errors;
if("EG" !== data35){
const err776 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/64/const",keyword:"const",params:{allowedValue: "EG"},message:"must be equal to constant",schema:"EG",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[64],data:data35};
if(vErrors === null){
vErrors = [err776];
}
else {
vErrors.push(err776);
}
errors++;
}
var _valid12 = _errs765 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 64];
}
else {
if(_valid12){
valid27 = true;
passing12 = 64;
}
const _errs766 = errors;
if("EH" !== data35){
const err777 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/65/const",keyword:"const",params:{allowedValue: "EH"},message:"must be equal to constant",schema:"EH",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[65],data:data35};
if(vErrors === null){
vErrors = [err777];
}
else {
vErrors.push(err777);
}
errors++;
}
var _valid12 = _errs766 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 65];
}
else {
if(_valid12){
valid27 = true;
passing12 = 65;
}
const _errs767 = errors;
if("ER" !== data35){
const err778 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/66/const",keyword:"const",params:{allowedValue: "ER"},message:"must be equal to constant",schema:"ER",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[66],data:data35};
if(vErrors === null){
vErrors = [err778];
}
else {
vErrors.push(err778);
}
errors++;
}
var _valid12 = _errs767 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 66];
}
else {
if(_valid12){
valid27 = true;
passing12 = 66;
}
const _errs768 = errors;
if("ES" !== data35){
const err779 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/67/const",keyword:"const",params:{allowedValue: "ES"},message:"must be equal to constant",schema:"ES",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[67],data:data35};
if(vErrors === null){
vErrors = [err779];
}
else {
vErrors.push(err779);
}
errors++;
}
var _valid12 = _errs768 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 67];
}
else {
if(_valid12){
valid27 = true;
passing12 = 67;
}
const _errs769 = errors;
if("ET" !== data35){
const err780 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/68/const",keyword:"const",params:{allowedValue: "ET"},message:"must be equal to constant",schema:"ET",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[68],data:data35};
if(vErrors === null){
vErrors = [err780];
}
else {
vErrors.push(err780);
}
errors++;
}
var _valid12 = _errs769 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 68];
}
else {
if(_valid12){
valid27 = true;
passing12 = 68;
}
const _errs770 = errors;
if("FI" !== data35){
const err781 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/69/const",keyword:"const",params:{allowedValue: "FI"},message:"must be equal to constant",schema:"FI",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[69],data:data35};
if(vErrors === null){
vErrors = [err781];
}
else {
vErrors.push(err781);
}
errors++;
}
var _valid12 = _errs770 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 69];
}
else {
if(_valid12){
valid27 = true;
passing12 = 69;
}
const _errs771 = errors;
if("FJ" !== data35){
const err782 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/70/const",keyword:"const",params:{allowedValue: "FJ"},message:"must be equal to constant",schema:"FJ",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[70],data:data35};
if(vErrors === null){
vErrors = [err782];
}
else {
vErrors.push(err782);
}
errors++;
}
var _valid12 = _errs771 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 70];
}
else {
if(_valid12){
valid27 = true;
passing12 = 70;
}
const _errs772 = errors;
if("FK" !== data35){
const err783 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/71/const",keyword:"const",params:{allowedValue: "FK"},message:"must be equal to constant",schema:"FK",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[71],data:data35};
if(vErrors === null){
vErrors = [err783];
}
else {
vErrors.push(err783);
}
errors++;
}
var _valid12 = _errs772 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 71];
}
else {
if(_valid12){
valid27 = true;
passing12 = 71;
}
const _errs773 = errors;
if("FM" !== data35){
const err784 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/72/const",keyword:"const",params:{allowedValue: "FM"},message:"must be equal to constant",schema:"FM",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[72],data:data35};
if(vErrors === null){
vErrors = [err784];
}
else {
vErrors.push(err784);
}
errors++;
}
var _valid12 = _errs773 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 72];
}
else {
if(_valid12){
valid27 = true;
passing12 = 72;
}
const _errs774 = errors;
if("FO" !== data35){
const err785 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/73/const",keyword:"const",params:{allowedValue: "FO"},message:"must be equal to constant",schema:"FO",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[73],data:data35};
if(vErrors === null){
vErrors = [err785];
}
else {
vErrors.push(err785);
}
errors++;
}
var _valid12 = _errs774 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 73];
}
else {
if(_valid12){
valid27 = true;
passing12 = 73;
}
const _errs775 = errors;
if("FR" !== data35){
const err786 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/74/const",keyword:"const",params:{allowedValue: "FR"},message:"must be equal to constant",schema:"FR",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[74],data:data35};
if(vErrors === null){
vErrors = [err786];
}
else {
vErrors.push(err786);
}
errors++;
}
var _valid12 = _errs775 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 74];
}
else {
if(_valid12){
valid27 = true;
passing12 = 74;
}
const _errs776 = errors;
if("GA" !== data35){
const err787 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/75/const",keyword:"const",params:{allowedValue: "GA"},message:"must be equal to constant",schema:"GA",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[75],data:data35};
if(vErrors === null){
vErrors = [err787];
}
else {
vErrors.push(err787);
}
errors++;
}
var _valid12 = _errs776 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 75];
}
else {
if(_valid12){
valid27 = true;
passing12 = 75;
}
const _errs777 = errors;
if("GB" !== data35){
const err788 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/76/const",keyword:"const",params:{allowedValue: "GB"},message:"must be equal to constant",schema:"GB",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[76],data:data35};
if(vErrors === null){
vErrors = [err788];
}
else {
vErrors.push(err788);
}
errors++;
}
var _valid12 = _errs777 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 76];
}
else {
if(_valid12){
valid27 = true;
passing12 = 76;
}
const _errs778 = errors;
if("GD" !== data35){
const err789 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/77/const",keyword:"const",params:{allowedValue: "GD"},message:"must be equal to constant",schema:"GD",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[77],data:data35};
if(vErrors === null){
vErrors = [err789];
}
else {
vErrors.push(err789);
}
errors++;
}
var _valid12 = _errs778 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 77];
}
else {
if(_valid12){
valid27 = true;
passing12 = 77;
}
const _errs779 = errors;
if("GE" !== data35){
const err790 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/78/const",keyword:"const",params:{allowedValue: "GE"},message:"must be equal to constant",schema:"GE",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[78],data:data35};
if(vErrors === null){
vErrors = [err790];
}
else {
vErrors.push(err790);
}
errors++;
}
var _valid12 = _errs779 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 78];
}
else {
if(_valid12){
valid27 = true;
passing12 = 78;
}
const _errs780 = errors;
if("GF" !== data35){
const err791 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/79/const",keyword:"const",params:{allowedValue: "GF"},message:"must be equal to constant",schema:"GF",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[79],data:data35};
if(vErrors === null){
vErrors = [err791];
}
else {
vErrors.push(err791);
}
errors++;
}
var _valid12 = _errs780 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 79];
}
else {
if(_valid12){
valid27 = true;
passing12 = 79;
}
const _errs781 = errors;
if("GG" !== data35){
const err792 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/80/const",keyword:"const",params:{allowedValue: "GG"},message:"must be equal to constant",schema:"GG",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[80],data:data35};
if(vErrors === null){
vErrors = [err792];
}
else {
vErrors.push(err792);
}
errors++;
}
var _valid12 = _errs781 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 80];
}
else {
if(_valid12){
valid27 = true;
passing12 = 80;
}
const _errs782 = errors;
if("GH" !== data35){
const err793 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/81/const",keyword:"const",params:{allowedValue: "GH"},message:"must be equal to constant",schema:"GH",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[81],data:data35};
if(vErrors === null){
vErrors = [err793];
}
else {
vErrors.push(err793);
}
errors++;
}
var _valid12 = _errs782 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 81];
}
else {
if(_valid12){
valid27 = true;
passing12 = 81;
}
const _errs783 = errors;
if("GI" !== data35){
const err794 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/82/const",keyword:"const",params:{allowedValue: "GI"},message:"must be equal to constant",schema:"GI",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[82],data:data35};
if(vErrors === null){
vErrors = [err794];
}
else {
vErrors.push(err794);
}
errors++;
}
var _valid12 = _errs783 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 82];
}
else {
if(_valid12){
valid27 = true;
passing12 = 82;
}
const _errs784 = errors;
if("GL" !== data35){
const err795 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/83/const",keyword:"const",params:{allowedValue: "GL"},message:"must be equal to constant",schema:"GL",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[83],data:data35};
if(vErrors === null){
vErrors = [err795];
}
else {
vErrors.push(err795);
}
errors++;
}
var _valid12 = _errs784 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 83];
}
else {
if(_valid12){
valid27 = true;
passing12 = 83;
}
const _errs785 = errors;
if("GM" !== data35){
const err796 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/84/const",keyword:"const",params:{allowedValue: "GM"},message:"must be equal to constant",schema:"GM",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[84],data:data35};
if(vErrors === null){
vErrors = [err796];
}
else {
vErrors.push(err796);
}
errors++;
}
var _valid12 = _errs785 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 84];
}
else {
if(_valid12){
valid27 = true;
passing12 = 84;
}
const _errs786 = errors;
if("GN" !== data35){
const err797 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/85/const",keyword:"const",params:{allowedValue: "GN"},message:"must be equal to constant",schema:"GN",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[85],data:data35};
if(vErrors === null){
vErrors = [err797];
}
else {
vErrors.push(err797);
}
errors++;
}
var _valid12 = _errs786 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 85];
}
else {
if(_valid12){
valid27 = true;
passing12 = 85;
}
const _errs787 = errors;
if("GP" !== data35){
const err798 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/86/const",keyword:"const",params:{allowedValue: "GP"},message:"must be equal to constant",schema:"GP",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[86],data:data35};
if(vErrors === null){
vErrors = [err798];
}
else {
vErrors.push(err798);
}
errors++;
}
var _valid12 = _errs787 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 86];
}
else {
if(_valid12){
valid27 = true;
passing12 = 86;
}
const _errs788 = errors;
if("GQ" !== data35){
const err799 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/87/const",keyword:"const",params:{allowedValue: "GQ"},message:"must be equal to constant",schema:"GQ",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[87],data:data35};
if(vErrors === null){
vErrors = [err799];
}
else {
vErrors.push(err799);
}
errors++;
}
var _valid12 = _errs788 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 87];
}
else {
if(_valid12){
valid27 = true;
passing12 = 87;
}
const _errs789 = errors;
if("GR" !== data35){
const err800 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/88/const",keyword:"const",params:{allowedValue: "GR"},message:"must be equal to constant",schema:"GR",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[88],data:data35};
if(vErrors === null){
vErrors = [err800];
}
else {
vErrors.push(err800);
}
errors++;
}
var _valid12 = _errs789 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 88];
}
else {
if(_valid12){
valid27 = true;
passing12 = 88;
}
const _errs790 = errors;
if("GS" !== data35){
const err801 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/89/const",keyword:"const",params:{allowedValue: "GS"},message:"must be equal to constant",schema:"GS",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[89],data:data35};
if(vErrors === null){
vErrors = [err801];
}
else {
vErrors.push(err801);
}
errors++;
}
var _valid12 = _errs790 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 89];
}
else {
if(_valid12){
valid27 = true;
passing12 = 89;
}
const _errs791 = errors;
if("GT" !== data35){
const err802 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/90/const",keyword:"const",params:{allowedValue: "GT"},message:"must be equal to constant",schema:"GT",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[90],data:data35};
if(vErrors === null){
vErrors = [err802];
}
else {
vErrors.push(err802);
}
errors++;
}
var _valid12 = _errs791 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 90];
}
else {
if(_valid12){
valid27 = true;
passing12 = 90;
}
const _errs792 = errors;
if("GU" !== data35){
const err803 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/91/const",keyword:"const",params:{allowedValue: "GU"},message:"must be equal to constant",schema:"GU",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[91],data:data35};
if(vErrors === null){
vErrors = [err803];
}
else {
vErrors.push(err803);
}
errors++;
}
var _valid12 = _errs792 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 91];
}
else {
if(_valid12){
valid27 = true;
passing12 = 91;
}
const _errs793 = errors;
if("GW" !== data35){
const err804 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/92/const",keyword:"const",params:{allowedValue: "GW"},message:"must be equal to constant",schema:"GW",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[92],data:data35};
if(vErrors === null){
vErrors = [err804];
}
else {
vErrors.push(err804);
}
errors++;
}
var _valid12 = _errs793 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 92];
}
else {
if(_valid12){
valid27 = true;
passing12 = 92;
}
const _errs794 = errors;
if("GY" !== data35){
const err805 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/93/const",keyword:"const",params:{allowedValue: "GY"},message:"must be equal to constant",schema:"GY",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[93],data:data35};
if(vErrors === null){
vErrors = [err805];
}
else {
vErrors.push(err805);
}
errors++;
}
var _valid12 = _errs794 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 93];
}
else {
if(_valid12){
valid27 = true;
passing12 = 93;
}
const _errs795 = errors;
if("HK" !== data35){
const err806 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/94/const",keyword:"const",params:{allowedValue: "HK"},message:"must be equal to constant",schema:"HK",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[94],data:data35};
if(vErrors === null){
vErrors = [err806];
}
else {
vErrors.push(err806);
}
errors++;
}
var _valid12 = _errs795 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 94];
}
else {
if(_valid12){
valid27 = true;
passing12 = 94;
}
const _errs796 = errors;
if("HM" !== data35){
const err807 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/95/const",keyword:"const",params:{allowedValue: "HM"},message:"must be equal to constant",schema:"HM",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[95],data:data35};
if(vErrors === null){
vErrors = [err807];
}
else {
vErrors.push(err807);
}
errors++;
}
var _valid12 = _errs796 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 95];
}
else {
if(_valid12){
valid27 = true;
passing12 = 95;
}
const _errs797 = errors;
if("HN" !== data35){
const err808 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/96/const",keyword:"const",params:{allowedValue: "HN"},message:"must be equal to constant",schema:"HN",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[96],data:data35};
if(vErrors === null){
vErrors = [err808];
}
else {
vErrors.push(err808);
}
errors++;
}
var _valid12 = _errs797 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 96];
}
else {
if(_valid12){
valid27 = true;
passing12 = 96;
}
const _errs798 = errors;
if("HR" !== data35){
const err809 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/97/const",keyword:"const",params:{allowedValue: "HR"},message:"must be equal to constant",schema:"HR",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[97],data:data35};
if(vErrors === null){
vErrors = [err809];
}
else {
vErrors.push(err809);
}
errors++;
}
var _valid12 = _errs798 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 97];
}
else {
if(_valid12){
valid27 = true;
passing12 = 97;
}
const _errs799 = errors;
if("HT" !== data35){
const err810 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/98/const",keyword:"const",params:{allowedValue: "HT"},message:"must be equal to constant",schema:"HT",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[98],data:data35};
if(vErrors === null){
vErrors = [err810];
}
else {
vErrors.push(err810);
}
errors++;
}
var _valid12 = _errs799 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 98];
}
else {
if(_valid12){
valid27 = true;
passing12 = 98;
}
const _errs800 = errors;
if("HU" !== data35){
const err811 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/99/const",keyword:"const",params:{allowedValue: "HU"},message:"must be equal to constant",schema:"HU",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[99],data:data35};
if(vErrors === null){
vErrors = [err811];
}
else {
vErrors.push(err811);
}
errors++;
}
var _valid12 = _errs800 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 99];
}
else {
if(_valid12){
valid27 = true;
passing12 = 99;
}
const _errs801 = errors;
if("ID" !== data35){
const err812 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/100/const",keyword:"const",params:{allowedValue: "ID"},message:"must be equal to constant",schema:"ID",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[100],data:data35};
if(vErrors === null){
vErrors = [err812];
}
else {
vErrors.push(err812);
}
errors++;
}
var _valid12 = _errs801 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 100];
}
else {
if(_valid12){
valid27 = true;
passing12 = 100;
}
const _errs802 = errors;
if("IE" !== data35){
const err813 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/101/const",keyword:"const",params:{allowedValue: "IE"},message:"must be equal to constant",schema:"IE",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[101],data:data35};
if(vErrors === null){
vErrors = [err813];
}
else {
vErrors.push(err813);
}
errors++;
}
var _valid12 = _errs802 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 101];
}
else {
if(_valid12){
valid27 = true;
passing12 = 101;
}
const _errs803 = errors;
if("IL" !== data35){
const err814 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/102/const",keyword:"const",params:{allowedValue: "IL"},message:"must be equal to constant",schema:"IL",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[102],data:data35};
if(vErrors === null){
vErrors = [err814];
}
else {
vErrors.push(err814);
}
errors++;
}
var _valid12 = _errs803 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 102];
}
else {
if(_valid12){
valid27 = true;
passing12 = 102;
}
const _errs804 = errors;
if("IM" !== data35){
const err815 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/103/const",keyword:"const",params:{allowedValue: "IM"},message:"must be equal to constant",schema:"IM",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[103],data:data35};
if(vErrors === null){
vErrors = [err815];
}
else {
vErrors.push(err815);
}
errors++;
}
var _valid12 = _errs804 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 103];
}
else {
if(_valid12){
valid27 = true;
passing12 = 103;
}
const _errs805 = errors;
if("IN" !== data35){
const err816 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/104/const",keyword:"const",params:{allowedValue: "IN"},message:"must be equal to constant",schema:"IN",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[104],data:data35};
if(vErrors === null){
vErrors = [err816];
}
else {
vErrors.push(err816);
}
errors++;
}
var _valid12 = _errs805 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 104];
}
else {
if(_valid12){
valid27 = true;
passing12 = 104;
}
const _errs806 = errors;
if("IO" !== data35){
const err817 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/105/const",keyword:"const",params:{allowedValue: "IO"},message:"must be equal to constant",schema:"IO",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[105],data:data35};
if(vErrors === null){
vErrors = [err817];
}
else {
vErrors.push(err817);
}
errors++;
}
var _valid12 = _errs806 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 105];
}
else {
if(_valid12){
valid27 = true;
passing12 = 105;
}
const _errs807 = errors;
if("IQ" !== data35){
const err818 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/106/const",keyword:"const",params:{allowedValue: "IQ"},message:"must be equal to constant",schema:"IQ",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[106],data:data35};
if(vErrors === null){
vErrors = [err818];
}
else {
vErrors.push(err818);
}
errors++;
}
var _valid12 = _errs807 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 106];
}
else {
if(_valid12){
valid27 = true;
passing12 = 106;
}
const _errs808 = errors;
if("IR" !== data35){
const err819 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/107/const",keyword:"const",params:{allowedValue: "IR"},message:"must be equal to constant",schema:"IR",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[107],data:data35};
if(vErrors === null){
vErrors = [err819];
}
else {
vErrors.push(err819);
}
errors++;
}
var _valid12 = _errs808 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 107];
}
else {
if(_valid12){
valid27 = true;
passing12 = 107;
}
const _errs809 = errors;
if("IS" !== data35){
const err820 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/108/const",keyword:"const",params:{allowedValue: "IS"},message:"must be equal to constant",schema:"IS",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[108],data:data35};
if(vErrors === null){
vErrors = [err820];
}
else {
vErrors.push(err820);
}
errors++;
}
var _valid12 = _errs809 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 108];
}
else {
if(_valid12){
valid27 = true;
passing12 = 108;
}
const _errs810 = errors;
if("IT" !== data35){
const err821 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/109/const",keyword:"const",params:{allowedValue: "IT"},message:"must be equal to constant",schema:"IT",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[109],data:data35};
if(vErrors === null){
vErrors = [err821];
}
else {
vErrors.push(err821);
}
errors++;
}
var _valid12 = _errs810 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 109];
}
else {
if(_valid12){
valid27 = true;
passing12 = 109;
}
const _errs811 = errors;
if("JE" !== data35){
const err822 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/110/const",keyword:"const",params:{allowedValue: "JE"},message:"must be equal to constant",schema:"JE",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[110],data:data35};
if(vErrors === null){
vErrors = [err822];
}
else {
vErrors.push(err822);
}
errors++;
}
var _valid12 = _errs811 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 110];
}
else {
if(_valid12){
valid27 = true;
passing12 = 110;
}
const _errs812 = errors;
if("JM" !== data35){
const err823 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/111/const",keyword:"const",params:{allowedValue: "JM"},message:"must be equal to constant",schema:"JM",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[111],data:data35};
if(vErrors === null){
vErrors = [err823];
}
else {
vErrors.push(err823);
}
errors++;
}
var _valid12 = _errs812 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 111];
}
else {
if(_valid12){
valid27 = true;
passing12 = 111;
}
const _errs813 = errors;
if("JO" !== data35){
const err824 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/112/const",keyword:"const",params:{allowedValue: "JO"},message:"must be equal to constant",schema:"JO",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[112],data:data35};
if(vErrors === null){
vErrors = [err824];
}
else {
vErrors.push(err824);
}
errors++;
}
var _valid12 = _errs813 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 112];
}
else {
if(_valid12){
valid27 = true;
passing12 = 112;
}
const _errs814 = errors;
if("JP" !== data35){
const err825 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/113/const",keyword:"const",params:{allowedValue: "JP"},message:"must be equal to constant",schema:"JP",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[113],data:data35};
if(vErrors === null){
vErrors = [err825];
}
else {
vErrors.push(err825);
}
errors++;
}
var _valid12 = _errs814 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 113];
}
else {
if(_valid12){
valid27 = true;
passing12 = 113;
}
const _errs815 = errors;
if("KE" !== data35){
const err826 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/114/const",keyword:"const",params:{allowedValue: "KE"},message:"must be equal to constant",schema:"KE",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[114],data:data35};
if(vErrors === null){
vErrors = [err826];
}
else {
vErrors.push(err826);
}
errors++;
}
var _valid12 = _errs815 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 114];
}
else {
if(_valid12){
valid27 = true;
passing12 = 114;
}
const _errs816 = errors;
if("KG" !== data35){
const err827 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/115/const",keyword:"const",params:{allowedValue: "KG"},message:"must be equal to constant",schema:"KG",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[115],data:data35};
if(vErrors === null){
vErrors = [err827];
}
else {
vErrors.push(err827);
}
errors++;
}
var _valid12 = _errs816 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 115];
}
else {
if(_valid12){
valid27 = true;
passing12 = 115;
}
const _errs817 = errors;
if("KH" !== data35){
const err828 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/116/const",keyword:"const",params:{allowedValue: "KH"},message:"must be equal to constant",schema:"KH",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[116],data:data35};
if(vErrors === null){
vErrors = [err828];
}
else {
vErrors.push(err828);
}
errors++;
}
var _valid12 = _errs817 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 116];
}
else {
if(_valid12){
valid27 = true;
passing12 = 116;
}
const _errs818 = errors;
if("KI" !== data35){
const err829 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/117/const",keyword:"const",params:{allowedValue: "KI"},message:"must be equal to constant",schema:"KI",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[117],data:data35};
if(vErrors === null){
vErrors = [err829];
}
else {
vErrors.push(err829);
}
errors++;
}
var _valid12 = _errs818 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 117];
}
else {
if(_valid12){
valid27 = true;
passing12 = 117;
}
const _errs819 = errors;
if("KM" !== data35){
const err830 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/118/const",keyword:"const",params:{allowedValue: "KM"},message:"must be equal to constant",schema:"KM",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[118],data:data35};
if(vErrors === null){
vErrors = [err830];
}
else {
vErrors.push(err830);
}
errors++;
}
var _valid12 = _errs819 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 118];
}
else {
if(_valid12){
valid27 = true;
passing12 = 118;
}
const _errs820 = errors;
if("KN" !== data35){
const err831 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/119/const",keyword:"const",params:{allowedValue: "KN"},message:"must be equal to constant",schema:"KN",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[119],data:data35};
if(vErrors === null){
vErrors = [err831];
}
else {
vErrors.push(err831);
}
errors++;
}
var _valid12 = _errs820 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 119];
}
else {
if(_valid12){
valid27 = true;
passing12 = 119;
}
const _errs821 = errors;
if("KP" !== data35){
const err832 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/120/const",keyword:"const",params:{allowedValue: "KP"},message:"must be equal to constant",schema:"KP",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[120],data:data35};
if(vErrors === null){
vErrors = [err832];
}
else {
vErrors.push(err832);
}
errors++;
}
var _valid12 = _errs821 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 120];
}
else {
if(_valid12){
valid27 = true;
passing12 = 120;
}
const _errs822 = errors;
if("KR" !== data35){
const err833 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/121/const",keyword:"const",params:{allowedValue: "KR"},message:"must be equal to constant",schema:"KR",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[121],data:data35};
if(vErrors === null){
vErrors = [err833];
}
else {
vErrors.push(err833);
}
errors++;
}
var _valid12 = _errs822 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 121];
}
else {
if(_valid12){
valid27 = true;
passing12 = 121;
}
const _errs823 = errors;
if("KW" !== data35){
const err834 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/122/const",keyword:"const",params:{allowedValue: "KW"},message:"must be equal to constant",schema:"KW",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[122],data:data35};
if(vErrors === null){
vErrors = [err834];
}
else {
vErrors.push(err834);
}
errors++;
}
var _valid12 = _errs823 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 122];
}
else {
if(_valid12){
valid27 = true;
passing12 = 122;
}
const _errs824 = errors;
if("KY" !== data35){
const err835 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/123/const",keyword:"const",params:{allowedValue: "KY"},message:"must be equal to constant",schema:"KY",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[123],data:data35};
if(vErrors === null){
vErrors = [err835];
}
else {
vErrors.push(err835);
}
errors++;
}
var _valid12 = _errs824 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 123];
}
else {
if(_valid12){
valid27 = true;
passing12 = 123;
}
const _errs825 = errors;
if("KZ" !== data35){
const err836 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/124/const",keyword:"const",params:{allowedValue: "KZ"},message:"must be equal to constant",schema:"KZ",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[124],data:data35};
if(vErrors === null){
vErrors = [err836];
}
else {
vErrors.push(err836);
}
errors++;
}
var _valid12 = _errs825 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 124];
}
else {
if(_valid12){
valid27 = true;
passing12 = 124;
}
const _errs826 = errors;
if("LA" !== data35){
const err837 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/125/const",keyword:"const",params:{allowedValue: "LA"},message:"must be equal to constant",schema:"LA",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[125],data:data35};
if(vErrors === null){
vErrors = [err837];
}
else {
vErrors.push(err837);
}
errors++;
}
var _valid12 = _errs826 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 125];
}
else {
if(_valid12){
valid27 = true;
passing12 = 125;
}
const _errs827 = errors;
if("LB" !== data35){
const err838 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/126/const",keyword:"const",params:{allowedValue: "LB"},message:"must be equal to constant",schema:"LB",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[126],data:data35};
if(vErrors === null){
vErrors = [err838];
}
else {
vErrors.push(err838);
}
errors++;
}
var _valid12 = _errs827 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 126];
}
else {
if(_valid12){
valid27 = true;
passing12 = 126;
}
const _errs828 = errors;
if("LC" !== data35){
const err839 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/127/const",keyword:"const",params:{allowedValue: "LC"},message:"must be equal to constant",schema:"LC",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[127],data:data35};
if(vErrors === null){
vErrors = [err839];
}
else {
vErrors.push(err839);
}
errors++;
}
var _valid12 = _errs828 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 127];
}
else {
if(_valid12){
valid27 = true;
passing12 = 127;
}
const _errs829 = errors;
if("LI" !== data35){
const err840 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/128/const",keyword:"const",params:{allowedValue: "LI"},message:"must be equal to constant",schema:"LI",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[128],data:data35};
if(vErrors === null){
vErrors = [err840];
}
else {
vErrors.push(err840);
}
errors++;
}
var _valid12 = _errs829 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 128];
}
else {
if(_valid12){
valid27 = true;
passing12 = 128;
}
const _errs830 = errors;
if("LK" !== data35){
const err841 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/129/const",keyword:"const",params:{allowedValue: "LK"},message:"must be equal to constant",schema:"LK",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[129],data:data35};
if(vErrors === null){
vErrors = [err841];
}
else {
vErrors.push(err841);
}
errors++;
}
var _valid12 = _errs830 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 129];
}
else {
if(_valid12){
valid27 = true;
passing12 = 129;
}
const _errs831 = errors;
if("LR" !== data35){
const err842 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/130/const",keyword:"const",params:{allowedValue: "LR"},message:"must be equal to constant",schema:"LR",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[130],data:data35};
if(vErrors === null){
vErrors = [err842];
}
else {
vErrors.push(err842);
}
errors++;
}
var _valid12 = _errs831 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 130];
}
else {
if(_valid12){
valid27 = true;
passing12 = 130;
}
const _errs832 = errors;
if("LS" !== data35){
const err843 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/131/const",keyword:"const",params:{allowedValue: "LS"},message:"must be equal to constant",schema:"LS",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[131],data:data35};
if(vErrors === null){
vErrors = [err843];
}
else {
vErrors.push(err843);
}
errors++;
}
var _valid12 = _errs832 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 131];
}
else {
if(_valid12){
valid27 = true;
passing12 = 131;
}
const _errs833 = errors;
if("LT" !== data35){
const err844 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/132/const",keyword:"const",params:{allowedValue: "LT"},message:"must be equal to constant",schema:"LT",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[132],data:data35};
if(vErrors === null){
vErrors = [err844];
}
else {
vErrors.push(err844);
}
errors++;
}
var _valid12 = _errs833 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 132];
}
else {
if(_valid12){
valid27 = true;
passing12 = 132;
}
const _errs834 = errors;
if("LU" !== data35){
const err845 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/133/const",keyword:"const",params:{allowedValue: "LU"},message:"must be equal to constant",schema:"LU",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[133],data:data35};
if(vErrors === null){
vErrors = [err845];
}
else {
vErrors.push(err845);
}
errors++;
}
var _valid12 = _errs834 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 133];
}
else {
if(_valid12){
valid27 = true;
passing12 = 133;
}
const _errs835 = errors;
if("LV" !== data35){
const err846 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/134/const",keyword:"const",params:{allowedValue: "LV"},message:"must be equal to constant",schema:"LV",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[134],data:data35};
if(vErrors === null){
vErrors = [err846];
}
else {
vErrors.push(err846);
}
errors++;
}
var _valid12 = _errs835 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 134];
}
else {
if(_valid12){
valid27 = true;
passing12 = 134;
}
const _errs836 = errors;
if("LY" !== data35){
const err847 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/135/const",keyword:"const",params:{allowedValue: "LY"},message:"must be equal to constant",schema:"LY",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[135],data:data35};
if(vErrors === null){
vErrors = [err847];
}
else {
vErrors.push(err847);
}
errors++;
}
var _valid12 = _errs836 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 135];
}
else {
if(_valid12){
valid27 = true;
passing12 = 135;
}
const _errs837 = errors;
if("MA" !== data35){
const err848 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/136/const",keyword:"const",params:{allowedValue: "MA"},message:"must be equal to constant",schema:"MA",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[136],data:data35};
if(vErrors === null){
vErrors = [err848];
}
else {
vErrors.push(err848);
}
errors++;
}
var _valid12 = _errs837 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 136];
}
else {
if(_valid12){
valid27 = true;
passing12 = 136;
}
const _errs838 = errors;
if("MC" !== data35){
const err849 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/137/const",keyword:"const",params:{allowedValue: "MC"},message:"must be equal to constant",schema:"MC",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[137],data:data35};
if(vErrors === null){
vErrors = [err849];
}
else {
vErrors.push(err849);
}
errors++;
}
var _valid12 = _errs838 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 137];
}
else {
if(_valid12){
valid27 = true;
passing12 = 137;
}
const _errs839 = errors;
if("MD" !== data35){
const err850 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/138/const",keyword:"const",params:{allowedValue: "MD"},message:"must be equal to constant",schema:"MD",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[138],data:data35};
if(vErrors === null){
vErrors = [err850];
}
else {
vErrors.push(err850);
}
errors++;
}
var _valid12 = _errs839 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 138];
}
else {
if(_valid12){
valid27 = true;
passing12 = 138;
}
const _errs840 = errors;
if("ME" !== data35){
const err851 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/139/const",keyword:"const",params:{allowedValue: "ME"},message:"must be equal to constant",schema:"ME",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[139],data:data35};
if(vErrors === null){
vErrors = [err851];
}
else {
vErrors.push(err851);
}
errors++;
}
var _valid12 = _errs840 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 139];
}
else {
if(_valid12){
valid27 = true;
passing12 = 139;
}
const _errs841 = errors;
if("MF" !== data35){
const err852 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/140/const",keyword:"const",params:{allowedValue: "MF"},message:"must be equal to constant",schema:"MF",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[140],data:data35};
if(vErrors === null){
vErrors = [err852];
}
else {
vErrors.push(err852);
}
errors++;
}
var _valid12 = _errs841 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 140];
}
else {
if(_valid12){
valid27 = true;
passing12 = 140;
}
const _errs842 = errors;
if("MG" !== data35){
const err853 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/141/const",keyword:"const",params:{allowedValue: "MG"},message:"must be equal to constant",schema:"MG",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[141],data:data35};
if(vErrors === null){
vErrors = [err853];
}
else {
vErrors.push(err853);
}
errors++;
}
var _valid12 = _errs842 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 141];
}
else {
if(_valid12){
valid27 = true;
passing12 = 141;
}
const _errs843 = errors;
if("MH" !== data35){
const err854 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/142/const",keyword:"const",params:{allowedValue: "MH"},message:"must be equal to constant",schema:"MH",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[142],data:data35};
if(vErrors === null){
vErrors = [err854];
}
else {
vErrors.push(err854);
}
errors++;
}
var _valid12 = _errs843 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 142];
}
else {
if(_valid12){
valid27 = true;
passing12 = 142;
}
const _errs844 = errors;
if("MK" !== data35){
const err855 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/143/const",keyword:"const",params:{allowedValue: "MK"},message:"must be equal to constant",schema:"MK",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[143],data:data35};
if(vErrors === null){
vErrors = [err855];
}
else {
vErrors.push(err855);
}
errors++;
}
var _valid12 = _errs844 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 143];
}
else {
if(_valid12){
valid27 = true;
passing12 = 143;
}
const _errs845 = errors;
if("ML" !== data35){
const err856 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/144/const",keyword:"const",params:{allowedValue: "ML"},message:"must be equal to constant",schema:"ML",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[144],data:data35};
if(vErrors === null){
vErrors = [err856];
}
else {
vErrors.push(err856);
}
errors++;
}
var _valid12 = _errs845 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 144];
}
else {
if(_valid12){
valid27 = true;
passing12 = 144;
}
const _errs846 = errors;
if("MM" !== data35){
const err857 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/145/const",keyword:"const",params:{allowedValue: "MM"},message:"must be equal to constant",schema:"MM",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[145],data:data35};
if(vErrors === null){
vErrors = [err857];
}
else {
vErrors.push(err857);
}
errors++;
}
var _valid12 = _errs846 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 145];
}
else {
if(_valid12){
valid27 = true;
passing12 = 145;
}
const _errs847 = errors;
if("MN" !== data35){
const err858 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/146/const",keyword:"const",params:{allowedValue: "MN"},message:"must be equal to constant",schema:"MN",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[146],data:data35};
if(vErrors === null){
vErrors = [err858];
}
else {
vErrors.push(err858);
}
errors++;
}
var _valid12 = _errs847 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 146];
}
else {
if(_valid12){
valid27 = true;
passing12 = 146;
}
const _errs848 = errors;
if("MO" !== data35){
const err859 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/147/const",keyword:"const",params:{allowedValue: "MO"},message:"must be equal to constant",schema:"MO",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[147],data:data35};
if(vErrors === null){
vErrors = [err859];
}
else {
vErrors.push(err859);
}
errors++;
}
var _valid12 = _errs848 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 147];
}
else {
if(_valid12){
valid27 = true;
passing12 = 147;
}
const _errs849 = errors;
if("MP" !== data35){
const err860 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/148/const",keyword:"const",params:{allowedValue: "MP"},message:"must be equal to constant",schema:"MP",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[148],data:data35};
if(vErrors === null){
vErrors = [err860];
}
else {
vErrors.push(err860);
}
errors++;
}
var _valid12 = _errs849 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 148];
}
else {
if(_valid12){
valid27 = true;
passing12 = 148;
}
const _errs850 = errors;
if("MQ" !== data35){
const err861 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/149/const",keyword:"const",params:{allowedValue: "MQ"},message:"must be equal to constant",schema:"MQ",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[149],data:data35};
if(vErrors === null){
vErrors = [err861];
}
else {
vErrors.push(err861);
}
errors++;
}
var _valid12 = _errs850 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 149];
}
else {
if(_valid12){
valid27 = true;
passing12 = 149;
}
const _errs851 = errors;
if("MR" !== data35){
const err862 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/150/const",keyword:"const",params:{allowedValue: "MR"},message:"must be equal to constant",schema:"MR",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[150],data:data35};
if(vErrors === null){
vErrors = [err862];
}
else {
vErrors.push(err862);
}
errors++;
}
var _valid12 = _errs851 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 150];
}
else {
if(_valid12){
valid27 = true;
passing12 = 150;
}
const _errs852 = errors;
if("MS" !== data35){
const err863 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/151/const",keyword:"const",params:{allowedValue: "MS"},message:"must be equal to constant",schema:"MS",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[151],data:data35};
if(vErrors === null){
vErrors = [err863];
}
else {
vErrors.push(err863);
}
errors++;
}
var _valid12 = _errs852 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 151];
}
else {
if(_valid12){
valid27 = true;
passing12 = 151;
}
const _errs853 = errors;
if("MT" !== data35){
const err864 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/152/const",keyword:"const",params:{allowedValue: "MT"},message:"must be equal to constant",schema:"MT",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[152],data:data35};
if(vErrors === null){
vErrors = [err864];
}
else {
vErrors.push(err864);
}
errors++;
}
var _valid12 = _errs853 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 152];
}
else {
if(_valid12){
valid27 = true;
passing12 = 152;
}
const _errs854 = errors;
if("MU" !== data35){
const err865 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/153/const",keyword:"const",params:{allowedValue: "MU"},message:"must be equal to constant",schema:"MU",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[153],data:data35};
if(vErrors === null){
vErrors = [err865];
}
else {
vErrors.push(err865);
}
errors++;
}
var _valid12 = _errs854 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 153];
}
else {
if(_valid12){
valid27 = true;
passing12 = 153;
}
const _errs855 = errors;
if("MV" !== data35){
const err866 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/154/const",keyword:"const",params:{allowedValue: "MV"},message:"must be equal to constant",schema:"MV",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[154],data:data35};
if(vErrors === null){
vErrors = [err866];
}
else {
vErrors.push(err866);
}
errors++;
}
var _valid12 = _errs855 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 154];
}
else {
if(_valid12){
valid27 = true;
passing12 = 154;
}
const _errs856 = errors;
if("MW" !== data35){
const err867 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/155/const",keyword:"const",params:{allowedValue: "MW"},message:"must be equal to constant",schema:"MW",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[155],data:data35};
if(vErrors === null){
vErrors = [err867];
}
else {
vErrors.push(err867);
}
errors++;
}
var _valid12 = _errs856 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 155];
}
else {
if(_valid12){
valid27 = true;
passing12 = 155;
}
const _errs857 = errors;
if("MX" !== data35){
const err868 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/156/const",keyword:"const",params:{allowedValue: "MX"},message:"must be equal to constant",schema:"MX",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[156],data:data35};
if(vErrors === null){
vErrors = [err868];
}
else {
vErrors.push(err868);
}
errors++;
}
var _valid12 = _errs857 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 156];
}
else {
if(_valid12){
valid27 = true;
passing12 = 156;
}
const _errs858 = errors;
if("MY" !== data35){
const err869 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/157/const",keyword:"const",params:{allowedValue: "MY"},message:"must be equal to constant",schema:"MY",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[157],data:data35};
if(vErrors === null){
vErrors = [err869];
}
else {
vErrors.push(err869);
}
errors++;
}
var _valid12 = _errs858 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 157];
}
else {
if(_valid12){
valid27 = true;
passing12 = 157;
}
const _errs859 = errors;
if("MZ" !== data35){
const err870 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/158/const",keyword:"const",params:{allowedValue: "MZ"},message:"must be equal to constant",schema:"MZ",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[158],data:data35};
if(vErrors === null){
vErrors = [err870];
}
else {
vErrors.push(err870);
}
errors++;
}
var _valid12 = _errs859 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 158];
}
else {
if(_valid12){
valid27 = true;
passing12 = 158;
}
const _errs860 = errors;
if("NA" !== data35){
const err871 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/159/const",keyword:"const",params:{allowedValue: "NA"},message:"must be equal to constant",schema:"NA",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[159],data:data35};
if(vErrors === null){
vErrors = [err871];
}
else {
vErrors.push(err871);
}
errors++;
}
var _valid12 = _errs860 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 159];
}
else {
if(_valid12){
valid27 = true;
passing12 = 159;
}
const _errs861 = errors;
if("NC" !== data35){
const err872 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/160/const",keyword:"const",params:{allowedValue: "NC"},message:"must be equal to constant",schema:"NC",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[160],data:data35};
if(vErrors === null){
vErrors = [err872];
}
else {
vErrors.push(err872);
}
errors++;
}
var _valid12 = _errs861 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 160];
}
else {
if(_valid12){
valid27 = true;
passing12 = 160;
}
const _errs862 = errors;
if("NE" !== data35){
const err873 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/161/const",keyword:"const",params:{allowedValue: "NE"},message:"must be equal to constant",schema:"NE",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[161],data:data35};
if(vErrors === null){
vErrors = [err873];
}
else {
vErrors.push(err873);
}
errors++;
}
var _valid12 = _errs862 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 161];
}
else {
if(_valid12){
valid27 = true;
passing12 = 161;
}
const _errs863 = errors;
if("NF" !== data35){
const err874 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/162/const",keyword:"const",params:{allowedValue: "NF"},message:"must be equal to constant",schema:"NF",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[162],data:data35};
if(vErrors === null){
vErrors = [err874];
}
else {
vErrors.push(err874);
}
errors++;
}
var _valid12 = _errs863 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 162];
}
else {
if(_valid12){
valid27 = true;
passing12 = 162;
}
const _errs864 = errors;
if("NG" !== data35){
const err875 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/163/const",keyword:"const",params:{allowedValue: "NG"},message:"must be equal to constant",schema:"NG",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[163],data:data35};
if(vErrors === null){
vErrors = [err875];
}
else {
vErrors.push(err875);
}
errors++;
}
var _valid12 = _errs864 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 163];
}
else {
if(_valid12){
valid27 = true;
passing12 = 163;
}
const _errs865 = errors;
if("NI" !== data35){
const err876 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/164/const",keyword:"const",params:{allowedValue: "NI"},message:"must be equal to constant",schema:"NI",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[164],data:data35};
if(vErrors === null){
vErrors = [err876];
}
else {
vErrors.push(err876);
}
errors++;
}
var _valid12 = _errs865 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 164];
}
else {
if(_valid12){
valid27 = true;
passing12 = 164;
}
const _errs866 = errors;
if("NL" !== data35){
const err877 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/165/const",keyword:"const",params:{allowedValue: "NL"},message:"must be equal to constant",schema:"NL",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[165],data:data35};
if(vErrors === null){
vErrors = [err877];
}
else {
vErrors.push(err877);
}
errors++;
}
var _valid12 = _errs866 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 165];
}
else {
if(_valid12){
valid27 = true;
passing12 = 165;
}
const _errs867 = errors;
if("NO" !== data35){
const err878 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/166/const",keyword:"const",params:{allowedValue: "NO"},message:"must be equal to constant",schema:"NO",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[166],data:data35};
if(vErrors === null){
vErrors = [err878];
}
else {
vErrors.push(err878);
}
errors++;
}
var _valid12 = _errs867 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 166];
}
else {
if(_valid12){
valid27 = true;
passing12 = 166;
}
const _errs868 = errors;
if("NP" !== data35){
const err879 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/167/const",keyword:"const",params:{allowedValue: "NP"},message:"must be equal to constant",schema:"NP",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[167],data:data35};
if(vErrors === null){
vErrors = [err879];
}
else {
vErrors.push(err879);
}
errors++;
}
var _valid12 = _errs868 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 167];
}
else {
if(_valid12){
valid27 = true;
passing12 = 167;
}
const _errs869 = errors;
if("NR" !== data35){
const err880 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/168/const",keyword:"const",params:{allowedValue: "NR"},message:"must be equal to constant",schema:"NR",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[168],data:data35};
if(vErrors === null){
vErrors = [err880];
}
else {
vErrors.push(err880);
}
errors++;
}
var _valid12 = _errs869 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 168];
}
else {
if(_valid12){
valid27 = true;
passing12 = 168;
}
const _errs870 = errors;
if("NU" !== data35){
const err881 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/169/const",keyword:"const",params:{allowedValue: "NU"},message:"must be equal to constant",schema:"NU",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[169],data:data35};
if(vErrors === null){
vErrors = [err881];
}
else {
vErrors.push(err881);
}
errors++;
}
var _valid12 = _errs870 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 169];
}
else {
if(_valid12){
valid27 = true;
passing12 = 169;
}
const _errs871 = errors;
if("NZ" !== data35){
const err882 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/170/const",keyword:"const",params:{allowedValue: "NZ"},message:"must be equal to constant",schema:"NZ",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[170],data:data35};
if(vErrors === null){
vErrors = [err882];
}
else {
vErrors.push(err882);
}
errors++;
}
var _valid12 = _errs871 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 170];
}
else {
if(_valid12){
valid27 = true;
passing12 = 170;
}
const _errs872 = errors;
if("OM" !== data35){
const err883 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/171/const",keyword:"const",params:{allowedValue: "OM"},message:"must be equal to constant",schema:"OM",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[171],data:data35};
if(vErrors === null){
vErrors = [err883];
}
else {
vErrors.push(err883);
}
errors++;
}
var _valid12 = _errs872 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 171];
}
else {
if(_valid12){
valid27 = true;
passing12 = 171;
}
const _errs873 = errors;
if("PA" !== data35){
const err884 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/172/const",keyword:"const",params:{allowedValue: "PA"},message:"must be equal to constant",schema:"PA",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[172],data:data35};
if(vErrors === null){
vErrors = [err884];
}
else {
vErrors.push(err884);
}
errors++;
}
var _valid12 = _errs873 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 172];
}
else {
if(_valid12){
valid27 = true;
passing12 = 172;
}
const _errs874 = errors;
if("PE" !== data35){
const err885 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/173/const",keyword:"const",params:{allowedValue: "PE"},message:"must be equal to constant",schema:"PE",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[173],data:data35};
if(vErrors === null){
vErrors = [err885];
}
else {
vErrors.push(err885);
}
errors++;
}
var _valid12 = _errs874 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 173];
}
else {
if(_valid12){
valid27 = true;
passing12 = 173;
}
const _errs875 = errors;
if("PF" !== data35){
const err886 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/174/const",keyword:"const",params:{allowedValue: "PF"},message:"must be equal to constant",schema:"PF",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[174],data:data35};
if(vErrors === null){
vErrors = [err886];
}
else {
vErrors.push(err886);
}
errors++;
}
var _valid12 = _errs875 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 174];
}
else {
if(_valid12){
valid27 = true;
passing12 = 174;
}
const _errs876 = errors;
if("PG" !== data35){
const err887 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/175/const",keyword:"const",params:{allowedValue: "PG"},message:"must be equal to constant",schema:"PG",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[175],data:data35};
if(vErrors === null){
vErrors = [err887];
}
else {
vErrors.push(err887);
}
errors++;
}
var _valid12 = _errs876 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 175];
}
else {
if(_valid12){
valid27 = true;
passing12 = 175;
}
const _errs877 = errors;
if("PH" !== data35){
const err888 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/176/const",keyword:"const",params:{allowedValue: "PH"},message:"must be equal to constant",schema:"PH",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[176],data:data35};
if(vErrors === null){
vErrors = [err888];
}
else {
vErrors.push(err888);
}
errors++;
}
var _valid12 = _errs877 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 176];
}
else {
if(_valid12){
valid27 = true;
passing12 = 176;
}
const _errs878 = errors;
if("PK" !== data35){
const err889 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/177/const",keyword:"const",params:{allowedValue: "PK"},message:"must be equal to constant",schema:"PK",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[177],data:data35};
if(vErrors === null){
vErrors = [err889];
}
else {
vErrors.push(err889);
}
errors++;
}
var _valid12 = _errs878 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 177];
}
else {
if(_valid12){
valid27 = true;
passing12 = 177;
}
const _errs879 = errors;
if("PL" !== data35){
const err890 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/178/const",keyword:"const",params:{allowedValue: "PL"},message:"must be equal to constant",schema:"PL",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[178],data:data35};
if(vErrors === null){
vErrors = [err890];
}
else {
vErrors.push(err890);
}
errors++;
}
var _valid12 = _errs879 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 178];
}
else {
if(_valid12){
valid27 = true;
passing12 = 178;
}
const _errs880 = errors;
if("PM" !== data35){
const err891 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/179/const",keyword:"const",params:{allowedValue: "PM"},message:"must be equal to constant",schema:"PM",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[179],data:data35};
if(vErrors === null){
vErrors = [err891];
}
else {
vErrors.push(err891);
}
errors++;
}
var _valid12 = _errs880 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 179];
}
else {
if(_valid12){
valid27 = true;
passing12 = 179;
}
const _errs881 = errors;
if("PN" !== data35){
const err892 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/180/const",keyword:"const",params:{allowedValue: "PN"},message:"must be equal to constant",schema:"PN",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[180],data:data35};
if(vErrors === null){
vErrors = [err892];
}
else {
vErrors.push(err892);
}
errors++;
}
var _valid12 = _errs881 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 180];
}
else {
if(_valid12){
valid27 = true;
passing12 = 180;
}
const _errs882 = errors;
if("PR" !== data35){
const err893 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/181/const",keyword:"const",params:{allowedValue: "PR"},message:"must be equal to constant",schema:"PR",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[181],data:data35};
if(vErrors === null){
vErrors = [err893];
}
else {
vErrors.push(err893);
}
errors++;
}
var _valid12 = _errs882 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 181];
}
else {
if(_valid12){
valid27 = true;
passing12 = 181;
}
const _errs883 = errors;
if("PS" !== data35){
const err894 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/182/const",keyword:"const",params:{allowedValue: "PS"},message:"must be equal to constant",schema:"PS",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[182],data:data35};
if(vErrors === null){
vErrors = [err894];
}
else {
vErrors.push(err894);
}
errors++;
}
var _valid12 = _errs883 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 182];
}
else {
if(_valid12){
valid27 = true;
passing12 = 182;
}
const _errs884 = errors;
if("PT" !== data35){
const err895 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/183/const",keyword:"const",params:{allowedValue: "PT"},message:"must be equal to constant",schema:"PT",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[183],data:data35};
if(vErrors === null){
vErrors = [err895];
}
else {
vErrors.push(err895);
}
errors++;
}
var _valid12 = _errs884 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 183];
}
else {
if(_valid12){
valid27 = true;
passing12 = 183;
}
const _errs885 = errors;
if("PW" !== data35){
const err896 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/184/const",keyword:"const",params:{allowedValue: "PW"},message:"must be equal to constant",schema:"PW",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[184],data:data35};
if(vErrors === null){
vErrors = [err896];
}
else {
vErrors.push(err896);
}
errors++;
}
var _valid12 = _errs885 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 184];
}
else {
if(_valid12){
valid27 = true;
passing12 = 184;
}
const _errs886 = errors;
if("PY" !== data35){
const err897 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/185/const",keyword:"const",params:{allowedValue: "PY"},message:"must be equal to constant",schema:"PY",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[185],data:data35};
if(vErrors === null){
vErrors = [err897];
}
else {
vErrors.push(err897);
}
errors++;
}
var _valid12 = _errs886 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 185];
}
else {
if(_valid12){
valid27 = true;
passing12 = 185;
}
const _errs887 = errors;
if("QA" !== data35){
const err898 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/186/const",keyword:"const",params:{allowedValue: "QA"},message:"must be equal to constant",schema:"QA",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[186],data:data35};
if(vErrors === null){
vErrors = [err898];
}
else {
vErrors.push(err898);
}
errors++;
}
var _valid12 = _errs887 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 186];
}
else {
if(_valid12){
valid27 = true;
passing12 = 186;
}
const _errs888 = errors;
if("RE" !== data35){
const err899 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/187/const",keyword:"const",params:{allowedValue: "RE"},message:"must be equal to constant",schema:"RE",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[187],data:data35};
if(vErrors === null){
vErrors = [err899];
}
else {
vErrors.push(err899);
}
errors++;
}
var _valid12 = _errs888 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 187];
}
else {
if(_valid12){
valid27 = true;
passing12 = 187;
}
const _errs889 = errors;
if("RO" !== data35){
const err900 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/188/const",keyword:"const",params:{allowedValue: "RO"},message:"must be equal to constant",schema:"RO",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[188],data:data35};
if(vErrors === null){
vErrors = [err900];
}
else {
vErrors.push(err900);
}
errors++;
}
var _valid12 = _errs889 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 188];
}
else {
if(_valid12){
valid27 = true;
passing12 = 188;
}
const _errs890 = errors;
if("RS" !== data35){
const err901 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/189/const",keyword:"const",params:{allowedValue: "RS"},message:"must be equal to constant",schema:"RS",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[189],data:data35};
if(vErrors === null){
vErrors = [err901];
}
else {
vErrors.push(err901);
}
errors++;
}
var _valid12 = _errs890 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 189];
}
else {
if(_valid12){
valid27 = true;
passing12 = 189;
}
const _errs891 = errors;
if("RU" !== data35){
const err902 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/190/const",keyword:"const",params:{allowedValue: "RU"},message:"must be equal to constant",schema:"RU",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[190],data:data35};
if(vErrors === null){
vErrors = [err902];
}
else {
vErrors.push(err902);
}
errors++;
}
var _valid12 = _errs891 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 190];
}
else {
if(_valid12){
valid27 = true;
passing12 = 190;
}
const _errs892 = errors;
if("RW" !== data35){
const err903 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/191/const",keyword:"const",params:{allowedValue: "RW"},message:"must be equal to constant",schema:"RW",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[191],data:data35};
if(vErrors === null){
vErrors = [err903];
}
else {
vErrors.push(err903);
}
errors++;
}
var _valid12 = _errs892 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 191];
}
else {
if(_valid12){
valid27 = true;
passing12 = 191;
}
const _errs893 = errors;
if("SA" !== data35){
const err904 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/192/const",keyword:"const",params:{allowedValue: "SA"},message:"must be equal to constant",schema:"SA",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[192],data:data35};
if(vErrors === null){
vErrors = [err904];
}
else {
vErrors.push(err904);
}
errors++;
}
var _valid12 = _errs893 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 192];
}
else {
if(_valid12){
valid27 = true;
passing12 = 192;
}
const _errs894 = errors;
if("SB" !== data35){
const err905 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/193/const",keyword:"const",params:{allowedValue: "SB"},message:"must be equal to constant",schema:"SB",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[193],data:data35};
if(vErrors === null){
vErrors = [err905];
}
else {
vErrors.push(err905);
}
errors++;
}
var _valid12 = _errs894 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 193];
}
else {
if(_valid12){
valid27 = true;
passing12 = 193;
}
const _errs895 = errors;
if("SC" !== data35){
const err906 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/194/const",keyword:"const",params:{allowedValue: "SC"},message:"must be equal to constant",schema:"SC",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[194],data:data35};
if(vErrors === null){
vErrors = [err906];
}
else {
vErrors.push(err906);
}
errors++;
}
var _valid12 = _errs895 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 194];
}
else {
if(_valid12){
valid27 = true;
passing12 = 194;
}
const _errs896 = errors;
if("SD" !== data35){
const err907 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/195/const",keyword:"const",params:{allowedValue: "SD"},message:"must be equal to constant",schema:"SD",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[195],data:data35};
if(vErrors === null){
vErrors = [err907];
}
else {
vErrors.push(err907);
}
errors++;
}
var _valid12 = _errs896 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 195];
}
else {
if(_valid12){
valid27 = true;
passing12 = 195;
}
const _errs897 = errors;
if("SE" !== data35){
const err908 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/196/const",keyword:"const",params:{allowedValue: "SE"},message:"must be equal to constant",schema:"SE",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[196],data:data35};
if(vErrors === null){
vErrors = [err908];
}
else {
vErrors.push(err908);
}
errors++;
}
var _valid12 = _errs897 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 196];
}
else {
if(_valid12){
valid27 = true;
passing12 = 196;
}
const _errs898 = errors;
if("SG" !== data35){
const err909 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/197/const",keyword:"const",params:{allowedValue: "SG"},message:"must be equal to constant",schema:"SG",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[197],data:data35};
if(vErrors === null){
vErrors = [err909];
}
else {
vErrors.push(err909);
}
errors++;
}
var _valid12 = _errs898 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 197];
}
else {
if(_valid12){
valid27 = true;
passing12 = 197;
}
const _errs899 = errors;
if("SH" !== data35){
const err910 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/198/const",keyword:"const",params:{allowedValue: "SH"},message:"must be equal to constant",schema:"SH",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[198],data:data35};
if(vErrors === null){
vErrors = [err910];
}
else {
vErrors.push(err910);
}
errors++;
}
var _valid12 = _errs899 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 198];
}
else {
if(_valid12){
valid27 = true;
passing12 = 198;
}
const _errs900 = errors;
if("SI" !== data35){
const err911 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/199/const",keyword:"const",params:{allowedValue: "SI"},message:"must be equal to constant",schema:"SI",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[199],data:data35};
if(vErrors === null){
vErrors = [err911];
}
else {
vErrors.push(err911);
}
errors++;
}
var _valid12 = _errs900 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 199];
}
else {
if(_valid12){
valid27 = true;
passing12 = 199;
}
const _errs901 = errors;
if("SJ" !== data35){
const err912 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/200/const",keyword:"const",params:{allowedValue: "SJ"},message:"must be equal to constant",schema:"SJ",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[200],data:data35};
if(vErrors === null){
vErrors = [err912];
}
else {
vErrors.push(err912);
}
errors++;
}
var _valid12 = _errs901 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 200];
}
else {
if(_valid12){
valid27 = true;
passing12 = 200;
}
const _errs902 = errors;
if("SK" !== data35){
const err913 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/201/const",keyword:"const",params:{allowedValue: "SK"},message:"must be equal to constant",schema:"SK",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[201],data:data35};
if(vErrors === null){
vErrors = [err913];
}
else {
vErrors.push(err913);
}
errors++;
}
var _valid12 = _errs902 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 201];
}
else {
if(_valid12){
valid27 = true;
passing12 = 201;
}
const _errs903 = errors;
if("SL" !== data35){
const err914 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/202/const",keyword:"const",params:{allowedValue: "SL"},message:"must be equal to constant",schema:"SL",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[202],data:data35};
if(vErrors === null){
vErrors = [err914];
}
else {
vErrors.push(err914);
}
errors++;
}
var _valid12 = _errs903 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 202];
}
else {
if(_valid12){
valid27 = true;
passing12 = 202;
}
const _errs904 = errors;
if("SM" !== data35){
const err915 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/203/const",keyword:"const",params:{allowedValue: "SM"},message:"must be equal to constant",schema:"SM",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[203],data:data35};
if(vErrors === null){
vErrors = [err915];
}
else {
vErrors.push(err915);
}
errors++;
}
var _valid12 = _errs904 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 203];
}
else {
if(_valid12){
valid27 = true;
passing12 = 203;
}
const _errs905 = errors;
if("SN" !== data35){
const err916 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/204/const",keyword:"const",params:{allowedValue: "SN"},message:"must be equal to constant",schema:"SN",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[204],data:data35};
if(vErrors === null){
vErrors = [err916];
}
else {
vErrors.push(err916);
}
errors++;
}
var _valid12 = _errs905 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 204];
}
else {
if(_valid12){
valid27 = true;
passing12 = 204;
}
const _errs906 = errors;
if("SO" !== data35){
const err917 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/205/const",keyword:"const",params:{allowedValue: "SO"},message:"must be equal to constant",schema:"SO",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[205],data:data35};
if(vErrors === null){
vErrors = [err917];
}
else {
vErrors.push(err917);
}
errors++;
}
var _valid12 = _errs906 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 205];
}
else {
if(_valid12){
valid27 = true;
passing12 = 205;
}
const _errs907 = errors;
if("SR" !== data35){
const err918 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/206/const",keyword:"const",params:{allowedValue: "SR"},message:"must be equal to constant",schema:"SR",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[206],data:data35};
if(vErrors === null){
vErrors = [err918];
}
else {
vErrors.push(err918);
}
errors++;
}
var _valid12 = _errs907 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 206];
}
else {
if(_valid12){
valid27 = true;
passing12 = 206;
}
const _errs908 = errors;
if("SS" !== data35){
const err919 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/207/const",keyword:"const",params:{allowedValue: "SS"},message:"must be equal to constant",schema:"SS",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[207],data:data35};
if(vErrors === null){
vErrors = [err919];
}
else {
vErrors.push(err919);
}
errors++;
}
var _valid12 = _errs908 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 207];
}
else {
if(_valid12){
valid27 = true;
passing12 = 207;
}
const _errs909 = errors;
if("ST" !== data35){
const err920 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/208/const",keyword:"const",params:{allowedValue: "ST"},message:"must be equal to constant",schema:"ST",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[208],data:data35};
if(vErrors === null){
vErrors = [err920];
}
else {
vErrors.push(err920);
}
errors++;
}
var _valid12 = _errs909 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 208];
}
else {
if(_valid12){
valid27 = true;
passing12 = 208;
}
const _errs910 = errors;
if("SV" !== data35){
const err921 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/209/const",keyword:"const",params:{allowedValue: "SV"},message:"must be equal to constant",schema:"SV",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[209],data:data35};
if(vErrors === null){
vErrors = [err921];
}
else {
vErrors.push(err921);
}
errors++;
}
var _valid12 = _errs910 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 209];
}
else {
if(_valid12){
valid27 = true;
passing12 = 209;
}
const _errs911 = errors;
if("SX" !== data35){
const err922 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/210/const",keyword:"const",params:{allowedValue: "SX"},message:"must be equal to constant",schema:"SX",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[210],data:data35};
if(vErrors === null){
vErrors = [err922];
}
else {
vErrors.push(err922);
}
errors++;
}
var _valid12 = _errs911 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 210];
}
else {
if(_valid12){
valid27 = true;
passing12 = 210;
}
const _errs912 = errors;
if("SY" !== data35){
const err923 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/211/const",keyword:"const",params:{allowedValue: "SY"},message:"must be equal to constant",schema:"SY",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[211],data:data35};
if(vErrors === null){
vErrors = [err923];
}
else {
vErrors.push(err923);
}
errors++;
}
var _valid12 = _errs912 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 211];
}
else {
if(_valid12){
valid27 = true;
passing12 = 211;
}
const _errs913 = errors;
if("SZ" !== data35){
const err924 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/212/const",keyword:"const",params:{allowedValue: "SZ"},message:"must be equal to constant",schema:"SZ",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[212],data:data35};
if(vErrors === null){
vErrors = [err924];
}
else {
vErrors.push(err924);
}
errors++;
}
var _valid12 = _errs913 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 212];
}
else {
if(_valid12){
valid27 = true;
passing12 = 212;
}
const _errs914 = errors;
if("TC" !== data35){
const err925 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/213/const",keyword:"const",params:{allowedValue: "TC"},message:"must be equal to constant",schema:"TC",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[213],data:data35};
if(vErrors === null){
vErrors = [err925];
}
else {
vErrors.push(err925);
}
errors++;
}
var _valid12 = _errs914 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 213];
}
else {
if(_valid12){
valid27 = true;
passing12 = 213;
}
const _errs915 = errors;
if("TD" !== data35){
const err926 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/214/const",keyword:"const",params:{allowedValue: "TD"},message:"must be equal to constant",schema:"TD",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[214],data:data35};
if(vErrors === null){
vErrors = [err926];
}
else {
vErrors.push(err926);
}
errors++;
}
var _valid12 = _errs915 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 214];
}
else {
if(_valid12){
valid27 = true;
passing12 = 214;
}
const _errs916 = errors;
if("TF" !== data35){
const err927 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/215/const",keyword:"const",params:{allowedValue: "TF"},message:"must be equal to constant",schema:"TF",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[215],data:data35};
if(vErrors === null){
vErrors = [err927];
}
else {
vErrors.push(err927);
}
errors++;
}
var _valid12 = _errs916 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 215];
}
else {
if(_valid12){
valid27 = true;
passing12 = 215;
}
const _errs917 = errors;
if("TG" !== data35){
const err928 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/216/const",keyword:"const",params:{allowedValue: "TG"},message:"must be equal to constant",schema:"TG",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[216],data:data35};
if(vErrors === null){
vErrors = [err928];
}
else {
vErrors.push(err928);
}
errors++;
}
var _valid12 = _errs917 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 216];
}
else {
if(_valid12){
valid27 = true;
passing12 = 216;
}
const _errs918 = errors;
if("TH" !== data35){
const err929 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/217/const",keyword:"const",params:{allowedValue: "TH"},message:"must be equal to constant",schema:"TH",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[217],data:data35};
if(vErrors === null){
vErrors = [err929];
}
else {
vErrors.push(err929);
}
errors++;
}
var _valid12 = _errs918 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 217];
}
else {
if(_valid12){
valid27 = true;
passing12 = 217;
}
const _errs919 = errors;
if("TJ" !== data35){
const err930 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/218/const",keyword:"const",params:{allowedValue: "TJ"},message:"must be equal to constant",schema:"TJ",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[218],data:data35};
if(vErrors === null){
vErrors = [err930];
}
else {
vErrors.push(err930);
}
errors++;
}
var _valid12 = _errs919 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 218];
}
else {
if(_valid12){
valid27 = true;
passing12 = 218;
}
const _errs920 = errors;
if("TK" !== data35){
const err931 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/219/const",keyword:"const",params:{allowedValue: "TK"},message:"must be equal to constant",schema:"TK",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[219],data:data35};
if(vErrors === null){
vErrors = [err931];
}
else {
vErrors.push(err931);
}
errors++;
}
var _valid12 = _errs920 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 219];
}
else {
if(_valid12){
valid27 = true;
passing12 = 219;
}
const _errs921 = errors;
if("TL" !== data35){
const err932 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/220/const",keyword:"const",params:{allowedValue: "TL"},message:"must be equal to constant",schema:"TL",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[220],data:data35};
if(vErrors === null){
vErrors = [err932];
}
else {
vErrors.push(err932);
}
errors++;
}
var _valid12 = _errs921 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 220];
}
else {
if(_valid12){
valid27 = true;
passing12 = 220;
}
const _errs922 = errors;
if("TM" !== data35){
const err933 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/221/const",keyword:"const",params:{allowedValue: "TM"},message:"must be equal to constant",schema:"TM",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[221],data:data35};
if(vErrors === null){
vErrors = [err933];
}
else {
vErrors.push(err933);
}
errors++;
}
var _valid12 = _errs922 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 221];
}
else {
if(_valid12){
valid27 = true;
passing12 = 221;
}
const _errs923 = errors;
if("TN" !== data35){
const err934 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/222/const",keyword:"const",params:{allowedValue: "TN"},message:"must be equal to constant",schema:"TN",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[222],data:data35};
if(vErrors === null){
vErrors = [err934];
}
else {
vErrors.push(err934);
}
errors++;
}
var _valid12 = _errs923 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 222];
}
else {
if(_valid12){
valid27 = true;
passing12 = 222;
}
const _errs924 = errors;
if("TO" !== data35){
const err935 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/223/const",keyword:"const",params:{allowedValue: "TO"},message:"must be equal to constant",schema:"TO",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[223],data:data35};
if(vErrors === null){
vErrors = [err935];
}
else {
vErrors.push(err935);
}
errors++;
}
var _valid12 = _errs924 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 223];
}
else {
if(_valid12){
valid27 = true;
passing12 = 223;
}
const _errs925 = errors;
if("TR" !== data35){
const err936 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/224/const",keyword:"const",params:{allowedValue: "TR"},message:"must be equal to constant",schema:"TR",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[224],data:data35};
if(vErrors === null){
vErrors = [err936];
}
else {
vErrors.push(err936);
}
errors++;
}
var _valid12 = _errs925 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 224];
}
else {
if(_valid12){
valid27 = true;
passing12 = 224;
}
const _errs926 = errors;
if("TT" !== data35){
const err937 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/225/const",keyword:"const",params:{allowedValue: "TT"},message:"must be equal to constant",schema:"TT",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[225],data:data35};
if(vErrors === null){
vErrors = [err937];
}
else {
vErrors.push(err937);
}
errors++;
}
var _valid12 = _errs926 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 225];
}
else {
if(_valid12){
valid27 = true;
passing12 = 225;
}
const _errs927 = errors;
if("TV" !== data35){
const err938 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/226/const",keyword:"const",params:{allowedValue: "TV"},message:"must be equal to constant",schema:"TV",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[226],data:data35};
if(vErrors === null){
vErrors = [err938];
}
else {
vErrors.push(err938);
}
errors++;
}
var _valid12 = _errs927 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 226];
}
else {
if(_valid12){
valid27 = true;
passing12 = 226;
}
const _errs928 = errors;
if("TW" !== data35){
const err939 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/227/const",keyword:"const",params:{allowedValue: "TW"},message:"must be equal to constant",schema:"TW",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[227],data:data35};
if(vErrors === null){
vErrors = [err939];
}
else {
vErrors.push(err939);
}
errors++;
}
var _valid12 = _errs928 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 227];
}
else {
if(_valid12){
valid27 = true;
passing12 = 227;
}
const _errs929 = errors;
if("TZ" !== data35){
const err940 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/228/const",keyword:"const",params:{allowedValue: "TZ"},message:"must be equal to constant",schema:"TZ",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[228],data:data35};
if(vErrors === null){
vErrors = [err940];
}
else {
vErrors.push(err940);
}
errors++;
}
var _valid12 = _errs929 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 228];
}
else {
if(_valid12){
valid27 = true;
passing12 = 228;
}
const _errs930 = errors;
if("UA" !== data35){
const err941 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/229/const",keyword:"const",params:{allowedValue: "UA"},message:"must be equal to constant",schema:"UA",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[229],data:data35};
if(vErrors === null){
vErrors = [err941];
}
else {
vErrors.push(err941);
}
errors++;
}
var _valid12 = _errs930 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 229];
}
else {
if(_valid12){
valid27 = true;
passing12 = 229;
}
const _errs931 = errors;
if("UG" !== data35){
const err942 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/230/const",keyword:"const",params:{allowedValue: "UG"},message:"must be equal to constant",schema:"UG",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[230],data:data35};
if(vErrors === null){
vErrors = [err942];
}
else {
vErrors.push(err942);
}
errors++;
}
var _valid12 = _errs931 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 230];
}
else {
if(_valid12){
valid27 = true;
passing12 = 230;
}
const _errs932 = errors;
if("UM" !== data35){
const err943 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/231/const",keyword:"const",params:{allowedValue: "UM"},message:"must be equal to constant",schema:"UM",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[231],data:data35};
if(vErrors === null){
vErrors = [err943];
}
else {
vErrors.push(err943);
}
errors++;
}
var _valid12 = _errs932 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 231];
}
else {
if(_valid12){
valid27 = true;
passing12 = 231;
}
const _errs933 = errors;
if("US" !== data35){
const err944 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/232/const",keyword:"const",params:{allowedValue: "US"},message:"must be equal to constant",schema:"US",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[232],data:data35};
if(vErrors === null){
vErrors = [err944];
}
else {
vErrors.push(err944);
}
errors++;
}
var _valid12 = _errs933 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 232];
}
else {
if(_valid12){
valid27 = true;
passing12 = 232;
}
const _errs934 = errors;
if("UY" !== data35){
const err945 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/233/const",keyword:"const",params:{allowedValue: "UY"},message:"must be equal to constant",schema:"UY",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[233],data:data35};
if(vErrors === null){
vErrors = [err945];
}
else {
vErrors.push(err945);
}
errors++;
}
var _valid12 = _errs934 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 233];
}
else {
if(_valid12){
valid27 = true;
passing12 = 233;
}
const _errs935 = errors;
if("UZ" !== data35){
const err946 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/234/const",keyword:"const",params:{allowedValue: "UZ"},message:"must be equal to constant",schema:"UZ",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[234],data:data35};
if(vErrors === null){
vErrors = [err946];
}
else {
vErrors.push(err946);
}
errors++;
}
var _valid12 = _errs935 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 234];
}
else {
if(_valid12){
valid27 = true;
passing12 = 234;
}
const _errs936 = errors;
if("VA" !== data35){
const err947 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/235/const",keyword:"const",params:{allowedValue: "VA"},message:"must be equal to constant",schema:"VA",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[235],data:data35};
if(vErrors === null){
vErrors = [err947];
}
else {
vErrors.push(err947);
}
errors++;
}
var _valid12 = _errs936 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 235];
}
else {
if(_valid12){
valid27 = true;
passing12 = 235;
}
const _errs937 = errors;
if("VC" !== data35){
const err948 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/236/const",keyword:"const",params:{allowedValue: "VC"},message:"must be equal to constant",schema:"VC",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[236],data:data35};
if(vErrors === null){
vErrors = [err948];
}
else {
vErrors.push(err948);
}
errors++;
}
var _valid12 = _errs937 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 236];
}
else {
if(_valid12){
valid27 = true;
passing12 = 236;
}
const _errs938 = errors;
if("VE" !== data35){
const err949 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/237/const",keyword:"const",params:{allowedValue: "VE"},message:"must be equal to constant",schema:"VE",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[237],data:data35};
if(vErrors === null){
vErrors = [err949];
}
else {
vErrors.push(err949);
}
errors++;
}
var _valid12 = _errs938 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 237];
}
else {
if(_valid12){
valid27 = true;
passing12 = 237;
}
const _errs939 = errors;
if("VG" !== data35){
const err950 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/238/const",keyword:"const",params:{allowedValue: "VG"},message:"must be equal to constant",schema:"VG",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[238],data:data35};
if(vErrors === null){
vErrors = [err950];
}
else {
vErrors.push(err950);
}
errors++;
}
var _valid12 = _errs939 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 238];
}
else {
if(_valid12){
valid27 = true;
passing12 = 238;
}
const _errs940 = errors;
if("VI" !== data35){
const err951 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/239/const",keyword:"const",params:{allowedValue: "VI"},message:"must be equal to constant",schema:"VI",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[239],data:data35};
if(vErrors === null){
vErrors = [err951];
}
else {
vErrors.push(err951);
}
errors++;
}
var _valid12 = _errs940 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 239];
}
else {
if(_valid12){
valid27 = true;
passing12 = 239;
}
const _errs941 = errors;
if("VN" !== data35){
const err952 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/240/const",keyword:"const",params:{allowedValue: "VN"},message:"must be equal to constant",schema:"VN",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[240],data:data35};
if(vErrors === null){
vErrors = [err952];
}
else {
vErrors.push(err952);
}
errors++;
}
var _valid12 = _errs941 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 240];
}
else {
if(_valid12){
valid27 = true;
passing12 = 240;
}
const _errs942 = errors;
if("VU" !== data35){
const err953 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/241/const",keyword:"const",params:{allowedValue: "VU"},message:"must be equal to constant",schema:"VU",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[241],data:data35};
if(vErrors === null){
vErrors = [err953];
}
else {
vErrors.push(err953);
}
errors++;
}
var _valid12 = _errs942 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 241];
}
else {
if(_valid12){
valid27 = true;
passing12 = 241;
}
const _errs943 = errors;
if("WF" !== data35){
const err954 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/242/const",keyword:"const",params:{allowedValue: "WF"},message:"must be equal to constant",schema:"WF",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[242],data:data35};
if(vErrors === null){
vErrors = [err954];
}
else {
vErrors.push(err954);
}
errors++;
}
var _valid12 = _errs943 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 242];
}
else {
if(_valid12){
valid27 = true;
passing12 = 242;
}
const _errs944 = errors;
if("WS" !== data35){
const err955 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/243/const",keyword:"const",params:{allowedValue: "WS"},message:"must be equal to constant",schema:"WS",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[243],data:data35};
if(vErrors === null){
vErrors = [err955];
}
else {
vErrors.push(err955);
}
errors++;
}
var _valid12 = _errs944 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 243];
}
else {
if(_valid12){
valid27 = true;
passing12 = 243;
}
const _errs945 = errors;
if("YE" !== data35){
const err956 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/244/const",keyword:"const",params:{allowedValue: "YE"},message:"must be equal to constant",schema:"YE",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[244],data:data35};
if(vErrors === null){
vErrors = [err956];
}
else {
vErrors.push(err956);
}
errors++;
}
var _valid12 = _errs945 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 244];
}
else {
if(_valid12){
valid27 = true;
passing12 = 244;
}
const _errs946 = errors;
if("YT" !== data35){
const err957 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/245/const",keyword:"const",params:{allowedValue: "YT"},message:"must be equal to constant",schema:"YT",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[245],data:data35};
if(vErrors === null){
vErrors = [err957];
}
else {
vErrors.push(err957);
}
errors++;
}
var _valid12 = _errs946 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 245];
}
else {
if(_valid12){
valid27 = true;
passing12 = 245;
}
const _errs947 = errors;
if("ZA" !== data35){
const err958 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/246/const",keyword:"const",params:{allowedValue: "ZA"},message:"must be equal to constant",schema:"ZA",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[246],data:data35};
if(vErrors === null){
vErrors = [err958];
}
else {
vErrors.push(err958);
}
errors++;
}
var _valid12 = _errs947 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 246];
}
else {
if(_valid12){
valid27 = true;
passing12 = 246;
}
const _errs948 = errors;
if("ZM" !== data35){
const err959 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/247/const",keyword:"const",params:{allowedValue: "ZM"},message:"must be equal to constant",schema:"ZM",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[247],data:data35};
if(vErrors === null){
vErrors = [err959];
}
else {
vErrors.push(err959);
}
errors++;
}
var _valid12 = _errs948 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 247];
}
else {
if(_valid12){
valid27 = true;
passing12 = 247;
}
const _errs949 = errors;
if("ZW" !== data35){
const err960 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf/248/const",keyword:"const",params:{allowedValue: "ZW"},message:"must be equal to constant",schema:"ZW",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf[248],data:data35};
if(vErrors === null){
vErrors = [err960];
}
else {
vErrors.push(err960);
}
errors++;
}
var _valid12 = _errs949 === errors;
if(_valid12 && valid27){
valid27 = false;
passing12 = [passing12, 248];
}
else {
if(_valid12){
valid27 = true;
passing12 = 248;
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
if(!valid27){
const err961 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/oneOf",keyword:"oneOf",params:{passingSchemas: passing12},message:"must match exactly one schema in oneOf",schema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.oneOf,parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co,data:data35};
if(vErrors === null){
vErrors = [err961];
}
else {
vErrors.push(err961);
}
errors++;
}
else {
errors = _errs700;
if(vErrors !== null){
if(_errs700){
vErrors.length = _errs700;
}
else {
vErrors = null;
}
}
}
if(typeof data35 === "string"){
if(!pattern8.test(data35)){
const err962 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/pattern",keyword:"pattern",params:{pattern: "[A-Z]{1,10}"},message:"must match pattern \""+"[A-Z]{1,10}"+"\"",schema:"[A-Z]{1,10}",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co,data:data35};
if(vErrors === null){
vErrors = [err962];
}
else {
vErrors.push(err962);
}
errors++;
}
}
else {
const err963 = {instancePath:instancePath+"/r/" + i2+"/co",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/co/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co.type,parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.co,data:data35};
if(vErrors === null){
vErrors = [err963];
}
else {
vErrors.push(err963);
}
errors++;
}
}
if(data32.is !== undefined){
let data36 = data32.is;
if(typeof data36 === "string"){
if(func3(data36) > 80){
const err964 = {instancePath:instancePath+"/r/" + i2+"/is",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/is/maxLength",keyword:"maxLength",params:{limit: 80},message:"must NOT have more than 80 characters",schema:80,parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.is,data:data36};
if(vErrors === null){
vErrors = [err964];
}
else {
vErrors.push(err964);
}
errors++;
}
}
else {
const err965 = {instancePath:instancePath+"/r/" + i2+"/is",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/is/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.allOf[1].oneOf[2].properties.r.items.properties.is.type,parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.is,data:data36};
if(vErrors === null){
vErrors = [err965];
}
else {
vErrors.push(err965);
}
errors++;
}
}
if(data32.df !== undefined){
let data37 = data32.df;
if(typeof data37 === "string"){
if(!(formats0.validate(data37))){
const err966 = {instancePath:instancePath+"/r/" + i2+"/df",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/df/format",keyword:"format",params:{format: "date"},message:"must match format \""+"date"+"\"",schema:"date",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.df,data:data37};
if(vErrors === null){
vErrors = [err966];
}
else {
vErrors.push(err966);
}
errors++;
}
}
else {
const err967 = {instancePath:instancePath+"/r/" + i2+"/df",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/df/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.allOf[1].oneOf[2].properties.r.items.properties.df.type,parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.df,data:data37};
if(vErrors === null){
vErrors = [err967];
}
else {
vErrors.push(err967);
}
errors++;
}
}
if(data32.du !== undefined){
let data38 = data32.du;
if(typeof data38 === "string"){
if(!(formats0.validate(data38))){
const err968 = {instancePath:instancePath+"/r/" + i2+"/du",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/du/format",keyword:"format",params:{format: "date"},message:"must match format \""+"date"+"\"",schema:"date",parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.du,data:data38};
if(vErrors === null){
vErrors = [err968];
}
else {
vErrors.push(err968);
}
errors++;
}
}
else {
const err969 = {instancePath:instancePath+"/r/" + i2+"/du",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/du/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.allOf[1].oneOf[2].properties.r.items.properties.du.type,parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.du,data:data38};
if(vErrors === null){
vErrors = [err969];
}
else {
vErrors.push(err969);
}
errors++;
}
}
if(data32.ci !== undefined){
let data39 = data32.ci;
if(typeof data39 === "string"){
if(func3(data39) > 80){
const err970 = {instancePath:instancePath+"/r/" + i2+"/ci",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/ci/maxLength",keyword:"maxLength",params:{limit: 80},message:"must NOT have more than 80 characters",schema:80,parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.ci,data:data39};
if(vErrors === null){
vErrors = [err970];
}
else {
vErrors.push(err970);
}
errors++;
}
}
else {
const err971 = {instancePath:instancePath+"/r/" + i2+"/ci",schemaPath:"#/allOf/1/oneOf/2/properties/r/items/properties/ci/type",keyword:"type",params:{type: "string"},message:"must be string",schema:schema31.allOf[1].oneOf[2].properties.r.items.properties.ci.type,parentSchema:schema31.allOf[1].oneOf[2].properties.r.items.properties.ci,data:data39};
if(vErrors === null){
vErrors = [err971];
}
else {
vErrors.push(err971);
}
errors++;
}
}
}
else {
const err972 = {instancePath:instancePath+"/r/" + i2,schemaPath:"#/allOf/1/oneOf/2/properties/r/items/type",keyword:"type",params:{type: "object"},message:"must be object",schema:schema31.allOf[1].oneOf[2].properties.r.items.type,parentSchema:schema31.allOf[1].oneOf[2].properties.r.items,data:data32};
if(vErrors === null){
vErrors = [err972];
}
else {
vErrors.push(err972);
}
errors++;
}
}
}
else {
const err973 = {instancePath:instancePath+"/r",schemaPath:"#/allOf/1/oneOf/2/properties/r/type",keyword:"type",params:{type: "array"},message:"must be array",schema:schema31.allOf[1].oneOf[2].properties.r.type,parentSchema:schema31.allOf[1].oneOf[2].properties.r,data:data31};
if(vErrors === null){
vErrors = [err973];
}
else {
vErrors.push(err973);
}
errors++;
}
}
}
var _valid0 = _errs687 === errors;
if(_valid0 && valid3){
valid3 = false;
passing0 = [passing0, 2];
}
else {
if(_valid0){
valid3 = true;
passing0 = 2;
if(props0 !== true){
props0 = props0 || {};
props0.r = true;
}
}
}
}
if(!valid3){
const err974 = {instancePath,schemaPath:"#/allOf/1/oneOf",keyword:"oneOf",params:{passingSchemas: passing0},message:"must match exactly one schema in oneOf",schema:schema31.allOf[1].oneOf,parentSchema:schema31.allOf[1],data};
if(vErrors === null){
vErrors = [err974];
}
else {
vErrors.push(err974);
}
errors++;
}
else {
errors = _errs18;
if(vErrors !== null){
if(_errs18){
vErrors.length = _errs18;
}
else {
vErrors = null;
}
}
}
if(props0 !== true){
props0 = props0 || {};
props0.ver = true;
props0.nam = true;
props0.dob = true;
}
validate20.errors = vErrors;
evaluated0.props = props0;
return errors === 0;
}
validate20.evaluated = {"dynamicProps":true,"dynamicItems":false};
