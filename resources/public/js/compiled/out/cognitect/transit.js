// Compiled by ClojureScript 1.9.36 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__48099_48103 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__48100_48104 = null;
var count__48101_48105 = (0);
var i__48102_48106 = (0);
while(true){
if((i__48102_48106 < count__48101_48105)){
var k_48107 = cljs.core._nth.call(null,chunk__48100_48104,i__48102_48106);
var v_48108 = (b[k_48107]);
(a[k_48107] = v_48108);

var G__48109 = seq__48099_48103;
var G__48110 = chunk__48100_48104;
var G__48111 = count__48101_48105;
var G__48112 = (i__48102_48106 + (1));
seq__48099_48103 = G__48109;
chunk__48100_48104 = G__48110;
count__48101_48105 = G__48111;
i__48102_48106 = G__48112;
continue;
} else {
var temp__4657__auto___48113 = cljs.core.seq.call(null,seq__48099_48103);
if(temp__4657__auto___48113){
var seq__48099_48114__$1 = temp__4657__auto___48113;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48099_48114__$1)){
var c__45086__auto___48115 = cljs.core.chunk_first.call(null,seq__48099_48114__$1);
var G__48116 = cljs.core.chunk_rest.call(null,seq__48099_48114__$1);
var G__48117 = c__45086__auto___48115;
var G__48118 = cljs.core.count.call(null,c__45086__auto___48115);
var G__48119 = (0);
seq__48099_48103 = G__48116;
chunk__48100_48104 = G__48117;
count__48101_48105 = G__48118;
i__48102_48106 = G__48119;
continue;
} else {
var k_48120 = cljs.core.first.call(null,seq__48099_48114__$1);
var v_48121 = (b[k_48120]);
(a[k_48120] = v_48121);

var G__48122 = cljs.core.next.call(null,seq__48099_48114__$1);
var G__48123 = null;
var G__48124 = (0);
var G__48125 = (0);
seq__48099_48103 = G__48122;
chunk__48100_48104 = G__48123;
count__48101_48105 = G__48124;
i__48102_48106 = G__48125;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__44881__auto__,writer__44882__auto__,opt__44883__auto__){
return cljs.core._write.call(null,writer__44882__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__44881__auto__,writer__44882__auto__,opt__44883__auto__){
return cljs.core._write.call(null,writer__44882__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args48126 = [];
var len__45350__auto___48129 = arguments.length;
var i__45351__auto___48130 = (0);
while(true){
if((i__45351__auto___48130 < len__45350__auto___48129)){
args48126.push((arguments[i__45351__auto___48130]));

var G__48131 = (i__45351__auto___48130 + (1));
i__45351__auto___48130 = G__48131;
continue;
} else {
}
break;
}

var G__48128 = args48126.length;
switch (G__48128) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48126.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__48133 = (i + (2));
var G__48134 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__48133;
ret = G__48134;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__44881__auto__,writer__44882__auto__,opt__44883__auto__){
return cljs.core._write.call(null,writer__44882__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__44881__auto__,writer__44882__auto__,opt__44883__auto__){
return cljs.core._write.call(null,writer__44882__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__48135_48139 = cljs.core.seq.call(null,v);
var chunk__48136_48140 = null;
var count__48137_48141 = (0);
var i__48138_48142 = (0);
while(true){
if((i__48138_48142 < count__48137_48141)){
var x_48143 = cljs.core._nth.call(null,chunk__48136_48140,i__48138_48142);
ret.push(x_48143);

var G__48144 = seq__48135_48139;
var G__48145 = chunk__48136_48140;
var G__48146 = count__48137_48141;
var G__48147 = (i__48138_48142 + (1));
seq__48135_48139 = G__48144;
chunk__48136_48140 = G__48145;
count__48137_48141 = G__48146;
i__48138_48142 = G__48147;
continue;
} else {
var temp__4657__auto___48148 = cljs.core.seq.call(null,seq__48135_48139);
if(temp__4657__auto___48148){
var seq__48135_48149__$1 = temp__4657__auto___48148;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48135_48149__$1)){
var c__45086__auto___48150 = cljs.core.chunk_first.call(null,seq__48135_48149__$1);
var G__48151 = cljs.core.chunk_rest.call(null,seq__48135_48149__$1);
var G__48152 = c__45086__auto___48150;
var G__48153 = cljs.core.count.call(null,c__45086__auto___48150);
var G__48154 = (0);
seq__48135_48139 = G__48151;
chunk__48136_48140 = G__48152;
count__48137_48141 = G__48153;
i__48138_48142 = G__48154;
continue;
} else {
var x_48155 = cljs.core.first.call(null,seq__48135_48149__$1);
ret.push(x_48155);

var G__48156 = cljs.core.next.call(null,seq__48135_48149__$1);
var G__48157 = null;
var G__48158 = (0);
var G__48159 = (0);
seq__48135_48139 = G__48156;
chunk__48136_48140 = G__48157;
count__48137_48141 = G__48158;
i__48138_48142 = G__48159;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__44881__auto__,writer__44882__auto__,opt__44883__auto__){
return cljs.core._write.call(null,writer__44882__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__44881__auto__,writer__44882__auto__,opt__44883__auto__){
return cljs.core._write.call(null,writer__44882__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__48160_48164 = cljs.core.seq.call(null,v);
var chunk__48161_48165 = null;
var count__48162_48166 = (0);
var i__48163_48167 = (0);
while(true){
if((i__48163_48167 < count__48162_48166)){
var x_48168 = cljs.core._nth.call(null,chunk__48161_48165,i__48163_48167);
ret.push(x_48168);

var G__48169 = seq__48160_48164;
var G__48170 = chunk__48161_48165;
var G__48171 = count__48162_48166;
var G__48172 = (i__48163_48167 + (1));
seq__48160_48164 = G__48169;
chunk__48161_48165 = G__48170;
count__48162_48166 = G__48171;
i__48163_48167 = G__48172;
continue;
} else {
var temp__4657__auto___48173 = cljs.core.seq.call(null,seq__48160_48164);
if(temp__4657__auto___48173){
var seq__48160_48174__$1 = temp__4657__auto___48173;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48160_48174__$1)){
var c__45086__auto___48175 = cljs.core.chunk_first.call(null,seq__48160_48174__$1);
var G__48176 = cljs.core.chunk_rest.call(null,seq__48160_48174__$1);
var G__48177 = c__45086__auto___48175;
var G__48178 = cljs.core.count.call(null,c__45086__auto___48175);
var G__48179 = (0);
seq__48160_48164 = G__48176;
chunk__48161_48165 = G__48177;
count__48162_48166 = G__48178;
i__48163_48167 = G__48179;
continue;
} else {
var x_48180 = cljs.core.first.call(null,seq__48160_48174__$1);
ret.push(x_48180);

var G__48181 = cljs.core.next.call(null,seq__48160_48174__$1);
var G__48182 = null;
var G__48183 = (0);
var G__48184 = (0);
seq__48160_48164 = G__48181;
chunk__48161_48165 = G__48182;
count__48162_48166 = G__48183;
i__48163_48167 = G__48184;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__44881__auto__,writer__44882__auto__,opt__44883__auto__){
return cljs.core._write.call(null,writer__44882__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__48185_48189 = cljs.core.seq.call(null,v);
var chunk__48186_48190 = null;
var count__48187_48191 = (0);
var i__48188_48192 = (0);
while(true){
if((i__48188_48192 < count__48187_48191)){
var x_48193 = cljs.core._nth.call(null,chunk__48186_48190,i__48188_48192);
ret.push(x_48193);

var G__48194 = seq__48185_48189;
var G__48195 = chunk__48186_48190;
var G__48196 = count__48187_48191;
var G__48197 = (i__48188_48192 + (1));
seq__48185_48189 = G__48194;
chunk__48186_48190 = G__48195;
count__48187_48191 = G__48196;
i__48188_48192 = G__48197;
continue;
} else {
var temp__4657__auto___48198 = cljs.core.seq.call(null,seq__48185_48189);
if(temp__4657__auto___48198){
var seq__48185_48199__$1 = temp__4657__auto___48198;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48185_48199__$1)){
var c__45086__auto___48200 = cljs.core.chunk_first.call(null,seq__48185_48199__$1);
var G__48201 = cljs.core.chunk_rest.call(null,seq__48185_48199__$1);
var G__48202 = c__45086__auto___48200;
var G__48203 = cljs.core.count.call(null,c__45086__auto___48200);
var G__48204 = (0);
seq__48185_48189 = G__48201;
chunk__48186_48190 = G__48202;
count__48187_48191 = G__48203;
i__48188_48192 = G__48204;
continue;
} else {
var x_48205 = cljs.core.first.call(null,seq__48185_48199__$1);
ret.push(x_48205);

var G__48206 = cljs.core.next.call(null,seq__48185_48199__$1);
var G__48207 = null;
var G__48208 = (0);
var G__48209 = (0);
seq__48185_48189 = G__48206;
chunk__48186_48190 = G__48207;
count__48187_48191 = G__48208;
i__48188_48192 = G__48209;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__44881__auto__,writer__44882__auto__,opt__44883__auto__){
return cljs.core._write.call(null,writer__44882__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__44881__auto__,writer__44882__auto__,opt__44883__auto__){
return cljs.core._write.call(null,writer__44882__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args48210 = [];
var len__45350__auto___48225 = arguments.length;
var i__45351__auto___48226 = (0);
while(true){
if((i__45351__auto___48226 < len__45350__auto___48225)){
args48210.push((arguments[i__45351__auto___48226]));

var G__48227 = (i__45351__auto___48226 + (1));
i__45351__auto___48226 = G__48227;
continue;
} else {
}
break;
}

var G__48212 = args48210.length;
switch (G__48212) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48210.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__48213 = obj;
G__48213.push(kfn.call(null,k),vfn.call(null,v));

return G__48213;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x48214 = cljs.core.clone.call(null,handlers);
x48214.forEach = ((function (x48214,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__48215 = cljs.core.seq.call(null,coll);
var chunk__48216 = null;
var count__48217 = (0);
var i__48218 = (0);
while(true){
if((i__48218 < count__48217)){
var vec__48219 = cljs.core._nth.call(null,chunk__48216,i__48218);
var k = cljs.core.nth.call(null,vec__48219,(0),null);
var v = cljs.core.nth.call(null,vec__48219,(1),null);
f.call(null,v,k);

var G__48229 = seq__48215;
var G__48230 = chunk__48216;
var G__48231 = count__48217;
var G__48232 = (i__48218 + (1));
seq__48215 = G__48229;
chunk__48216 = G__48230;
count__48217 = G__48231;
i__48218 = G__48232;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__48215);
if(temp__4657__auto__){
var seq__48215__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48215__$1)){
var c__45086__auto__ = cljs.core.chunk_first.call(null,seq__48215__$1);
var G__48233 = cljs.core.chunk_rest.call(null,seq__48215__$1);
var G__48234 = c__45086__auto__;
var G__48235 = cljs.core.count.call(null,c__45086__auto__);
var G__48236 = (0);
seq__48215 = G__48233;
chunk__48216 = G__48234;
count__48217 = G__48235;
i__48218 = G__48236;
continue;
} else {
var vec__48222 = cljs.core.first.call(null,seq__48215__$1);
var k = cljs.core.nth.call(null,vec__48222,(0),null);
var v = cljs.core.nth.call(null,vec__48222,(1),null);
f.call(null,v,k);

var G__48237 = cljs.core.next.call(null,seq__48215__$1);
var G__48238 = null;
var G__48239 = (0);
var G__48240 = (0);
seq__48215 = G__48237;
chunk__48216 = G__48238;
count__48217 = G__48239;
i__48218 = G__48240;
continue;
}
} else {
return null;
}
}
break;
}
});})(x48214,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x48214;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args48241 = [];
var len__45350__auto___48247 = arguments.length;
var i__45351__auto___48248 = (0);
while(true){
if((i__45351__auto___48248 < len__45350__auto___48247)){
args48241.push((arguments[i__45351__auto___48248]));

var G__48249 = (i__45351__auto___48248 + (1));
i__45351__auto___48248 = G__48249;
continue;
} else {
}
break;
}

var G__48243 = args48241.length;
switch (G__48243) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48241.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit48244 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit48244 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta48245){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta48245 = meta48245;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit48244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48246,meta48245__$1){
var self__ = this;
var _48246__$1 = this;
return (new cognitect.transit.t_cognitect$transit48244(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta48245__$1));
});

cognitect.transit.t_cognitect$transit48244.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48246){
var self__ = this;
var _48246__$1 = this;
return self__.meta48245;
});

cognitect.transit.t_cognitect$transit48244.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit48244.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit48244.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit48244.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit48244.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta48245","meta48245",-94065709,null)], null);
});

cognitect.transit.t_cognitect$transit48244.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit48244.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit48244";

cognitect.transit.t_cognitect$transit48244.cljs$lang$ctorPrWriter = (function (this__44881__auto__,writer__44882__auto__,opt__44883__auto__){
return cljs.core._write.call(null,writer__44882__auto__,"cognitect.transit/t_cognitect$transit48244");
});

cognitect.transit.__GT_t_cognitect$transit48244 = (function cognitect$transit$__GT_t_cognitect$transit48244(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta48245){
return (new cognitect.transit.t_cognitect$transit48244(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta48245));
});

}

return (new cognitect.transit.t_cognitect$transit48244(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__44275__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__44275__auto__)){
return or__44275__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1466127922631