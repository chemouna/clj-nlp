// Compiled by ClojureScript 1.9.36 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.4-2";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args50329 = [];
var len__39470__auto___50332 = arguments.length;
var i__39471__auto___50333 = (0);
while(true){
if((i__39471__auto___50333 < len__39470__auto___50332)){
args50329.push((arguments[i__39471__auto___50333]));

var G__50334 = (i__39471__auto___50333 + (1));
i__39471__auto___50333 = G__50334;
continue;
} else {
}
break;
}

var G__50331 = args50329.length;
switch (G__50331) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50329.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__39477__auto__ = [];
var len__39470__auto___50337 = arguments.length;
var i__39471__auto___50338 = (0);
while(true){
if((i__39471__auto___50338 < len__39470__auto___50337)){
args__39477__auto__.push((arguments[i__39471__auto___50338]));

var G__50339 = (i__39471__auto___50338 + (1));
i__39471__auto___50338 = G__50339;
continue;
} else {
}
break;
}

var argseq__39478__auto__ = ((((0) < args__39477__auto__.length))?(new cljs.core.IndexedSeq(args__39477__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__39478__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq50336){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50336));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__39477__auto__ = [];
var len__39470__auto___50341 = arguments.length;
var i__39471__auto___50342 = (0);
while(true){
if((i__39471__auto___50342 < len__39470__auto___50341)){
args__39477__auto__.push((arguments[i__39471__auto___50342]));

var G__50343 = (i__39471__auto___50342 + (1));
i__39471__auto___50342 = G__50343;
continue;
} else {
}
break;
}

var argseq__39478__auto__ = ((((0) < args__39477__auto__.length))?(new cljs.core.IndexedSeq(args__39477__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__39478__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq50340){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50340));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__50344 = cljs.core._EQ_;
var expr__50345 = (function (){var or__38395__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e50348){if((e50348 instanceof Error)){
var e = e50348;
return false;
} else {
throw e50348;

}
}})();
if(cljs.core.truth_(or__38395__auto__)){
return or__38395__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__50344.call(null,"true",expr__50345))){
return true;
} else {
if(cljs.core.truth_(pred__50344.call(null,"false",expr__50345))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__50345)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e50350){if((e50350 instanceof Error)){
var e = e50350;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e50350;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__50351){
var map__50354 = p__50351;
var map__50354__$1 = ((((!((map__50354 == null)))?((((map__50354.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50354.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50354):map__50354);
var message = cljs.core.get.call(null,map__50354__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__50354__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__38395__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__38395__auto__)){
return or__38395__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__38383__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__38383__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__38383__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__43031__auto___50516 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43031__auto___50516,ch){
return (function (){
var f__43032__auto__ = (function (){var switch__42919__auto__ = ((function (c__43031__auto___50516,ch){
return (function (state_50485){
var state_val_50486 = (state_50485[(1)]);
if((state_val_50486 === (7))){
var inst_50481 = (state_50485[(2)]);
var state_50485__$1 = state_50485;
var statearr_50487_50517 = state_50485__$1;
(statearr_50487_50517[(2)] = inst_50481);

(statearr_50487_50517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50486 === (1))){
var state_50485__$1 = state_50485;
var statearr_50488_50518 = state_50485__$1;
(statearr_50488_50518[(2)] = null);

(statearr_50488_50518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50486 === (4))){
var inst_50438 = (state_50485[(7)]);
var inst_50438__$1 = (state_50485[(2)]);
var state_50485__$1 = (function (){var statearr_50489 = state_50485;
(statearr_50489[(7)] = inst_50438__$1);

return statearr_50489;
})();
if(cljs.core.truth_(inst_50438__$1)){
var statearr_50490_50519 = state_50485__$1;
(statearr_50490_50519[(1)] = (5));

} else {
var statearr_50491_50520 = state_50485__$1;
(statearr_50491_50520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50486 === (15))){
var inst_50445 = (state_50485[(8)]);
var inst_50460 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_50445);
var inst_50461 = cljs.core.first.call(null,inst_50460);
var inst_50462 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_50461);
var inst_50463 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_50462)].join('');
var inst_50464 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_50463);
var state_50485__$1 = state_50485;
var statearr_50492_50521 = state_50485__$1;
(statearr_50492_50521[(2)] = inst_50464);

(statearr_50492_50521[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50486 === (13))){
var inst_50469 = (state_50485[(2)]);
var state_50485__$1 = state_50485;
var statearr_50493_50522 = state_50485__$1;
(statearr_50493_50522[(2)] = inst_50469);

(statearr_50493_50522[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50486 === (6))){
var state_50485__$1 = state_50485;
var statearr_50494_50523 = state_50485__$1;
(statearr_50494_50523[(2)] = null);

(statearr_50494_50523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50486 === (17))){
var inst_50467 = (state_50485[(2)]);
var state_50485__$1 = state_50485;
var statearr_50495_50524 = state_50485__$1;
(statearr_50495_50524[(2)] = inst_50467);

(statearr_50495_50524[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50486 === (3))){
var inst_50483 = (state_50485[(2)]);
var state_50485__$1 = state_50485;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50485__$1,inst_50483);
} else {
if((state_val_50486 === (12))){
var inst_50444 = (state_50485[(9)]);
var inst_50458 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_50444,opts);
var state_50485__$1 = state_50485;
if(cljs.core.truth_(inst_50458)){
var statearr_50496_50525 = state_50485__$1;
(statearr_50496_50525[(1)] = (15));

} else {
var statearr_50497_50526 = state_50485__$1;
(statearr_50497_50526[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50486 === (2))){
var state_50485__$1 = state_50485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50485__$1,(4),ch);
} else {
if((state_val_50486 === (11))){
var inst_50445 = (state_50485[(8)]);
var inst_50450 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50451 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_50445);
var inst_50452 = cljs.core.async.timeout.call(null,(1000));
var inst_50453 = [inst_50451,inst_50452];
var inst_50454 = (new cljs.core.PersistentVector(null,2,(5),inst_50450,inst_50453,null));
var state_50485__$1 = state_50485;
return cljs.core.async.ioc_alts_BANG_.call(null,state_50485__$1,(14),inst_50454);
} else {
if((state_val_50486 === (9))){
var inst_50445 = (state_50485[(8)]);
var inst_50471 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_50472 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_50445);
var inst_50473 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_50472);
var inst_50474 = [cljs.core.str("Not loading: "),cljs.core.str(inst_50473)].join('');
var inst_50475 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_50474);
var state_50485__$1 = (function (){var statearr_50498 = state_50485;
(statearr_50498[(10)] = inst_50471);

return statearr_50498;
})();
var statearr_50499_50527 = state_50485__$1;
(statearr_50499_50527[(2)] = inst_50475);

(statearr_50499_50527[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50486 === (5))){
var inst_50438 = (state_50485[(7)]);
var inst_50440 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_50441 = (new cljs.core.PersistentArrayMap(null,2,inst_50440,null));
var inst_50442 = (new cljs.core.PersistentHashSet(null,inst_50441,null));
var inst_50443 = figwheel.client.focus_msgs.call(null,inst_50442,inst_50438);
var inst_50444 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_50443);
var inst_50445 = cljs.core.first.call(null,inst_50443);
var inst_50446 = figwheel.client.autoload_QMARK_.call(null);
var state_50485__$1 = (function (){var statearr_50500 = state_50485;
(statearr_50500[(8)] = inst_50445);

(statearr_50500[(9)] = inst_50444);

return statearr_50500;
})();
if(cljs.core.truth_(inst_50446)){
var statearr_50501_50528 = state_50485__$1;
(statearr_50501_50528[(1)] = (8));

} else {
var statearr_50502_50529 = state_50485__$1;
(statearr_50502_50529[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50486 === (14))){
var inst_50456 = (state_50485[(2)]);
var state_50485__$1 = state_50485;
var statearr_50503_50530 = state_50485__$1;
(statearr_50503_50530[(2)] = inst_50456);

(statearr_50503_50530[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50486 === (16))){
var state_50485__$1 = state_50485;
var statearr_50504_50531 = state_50485__$1;
(statearr_50504_50531[(2)] = null);

(statearr_50504_50531[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50486 === (10))){
var inst_50477 = (state_50485[(2)]);
var state_50485__$1 = (function (){var statearr_50505 = state_50485;
(statearr_50505[(11)] = inst_50477);

return statearr_50505;
})();
var statearr_50506_50532 = state_50485__$1;
(statearr_50506_50532[(2)] = null);

(statearr_50506_50532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50486 === (8))){
var inst_50444 = (state_50485[(9)]);
var inst_50448 = figwheel.client.reload_file_state_QMARK_.call(null,inst_50444,opts);
var state_50485__$1 = state_50485;
if(cljs.core.truth_(inst_50448)){
var statearr_50507_50533 = state_50485__$1;
(statearr_50507_50533[(1)] = (11));

} else {
var statearr_50508_50534 = state_50485__$1;
(statearr_50508_50534[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43031__auto___50516,ch))
;
return ((function (switch__42919__auto__,c__43031__auto___50516,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__42920__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__42920__auto____0 = (function (){
var statearr_50512 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50512[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__42920__auto__);

(statearr_50512[(1)] = (1));

return statearr_50512;
});
var figwheel$client$file_reloader_plugin_$_state_machine__42920__auto____1 = (function (state_50485){
while(true){
var ret_value__42921__auto__ = (function (){try{while(true){
var result__42922__auto__ = switch__42919__auto__.call(null,state_50485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42922__auto__;
}
break;
}
}catch (e50513){if((e50513 instanceof Object)){
var ex__42923__auto__ = e50513;
var statearr_50514_50535 = state_50485;
(statearr_50514_50535[(5)] = ex__42923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50536 = state_50485;
state_50485 = G__50536;
continue;
} else {
return ret_value__42921__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__42920__auto__ = function(state_50485){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__42920__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__42920__auto____1.call(this,state_50485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__42920__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__42920__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__42920__auto__;
})()
;})(switch__42919__auto__,c__43031__auto___50516,ch))
})();
var state__43033__auto__ = (function (){var statearr_50515 = f__43032__auto__.call(null);
(statearr_50515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43031__auto___50516);

return statearr_50515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43033__auto__);
});})(c__43031__auto___50516,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__50537_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__50537_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_50540 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_50540){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e50539){if((e50539 instanceof Error)){
var e = e50539;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_50540], null));
} else {
var e = e50539;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_50540))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__50541){
var map__50550 = p__50541;
var map__50550__$1 = ((((!((map__50550 == null)))?((((map__50550.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50550.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50550):map__50550);
var opts = map__50550__$1;
var build_id = cljs.core.get.call(null,map__50550__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__50550,map__50550__$1,opts,build_id){
return (function (p__50552){
var vec__50553 = p__50552;
var seq__50554 = cljs.core.seq.call(null,vec__50553);
var first__50555 = cljs.core.first.call(null,seq__50554);
var seq__50554__$1 = cljs.core.next.call(null,seq__50554);
var map__50556 = first__50555;
var map__50556__$1 = ((((!((map__50556 == null)))?((((map__50556.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50556.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50556):map__50556);
var msg = map__50556__$1;
var msg_name = cljs.core.get.call(null,map__50556__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__50554__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__50553,seq__50554,first__50555,seq__50554__$1,map__50556,map__50556__$1,msg,msg_name,_,map__50550,map__50550__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__50553,seq__50554,first__50555,seq__50554__$1,map__50556,map__50556__$1,msg,msg_name,_,map__50550,map__50550__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__50550,map__50550__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__50564){
var vec__50565 = p__50564;
var seq__50566 = cljs.core.seq.call(null,vec__50565);
var first__50567 = cljs.core.first.call(null,seq__50566);
var seq__50566__$1 = cljs.core.next.call(null,seq__50566);
var map__50568 = first__50567;
var map__50568__$1 = ((((!((map__50568 == null)))?((((map__50568.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50568.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50568):map__50568);
var msg = map__50568__$1;
var msg_name = cljs.core.get.call(null,map__50568__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__50566__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__50570){
var map__50582 = p__50570;
var map__50582__$1 = ((((!((map__50582 == null)))?((((map__50582.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50582.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50582):map__50582);
var on_compile_warning = cljs.core.get.call(null,map__50582__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__50582__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__50582,map__50582__$1,on_compile_warning,on_compile_fail){
return (function (p__50584){
var vec__50585 = p__50584;
var seq__50586 = cljs.core.seq.call(null,vec__50585);
var first__50587 = cljs.core.first.call(null,seq__50586);
var seq__50586__$1 = cljs.core.next.call(null,seq__50586);
var map__50588 = first__50587;
var map__50588__$1 = ((((!((map__50588 == null)))?((((map__50588.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50588.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50588):map__50588);
var msg = map__50588__$1;
var msg_name = cljs.core.get.call(null,map__50588__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__50586__$1;
var pred__50590 = cljs.core._EQ_;
var expr__50591 = msg_name;
if(cljs.core.truth_(pred__50590.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__50591))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__50590.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__50591))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__50582,map__50582__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__43031__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43031__auto__,msg_hist,msg_names,msg){
return (function (){
var f__43032__auto__ = (function (){var switch__42919__auto__ = ((function (c__43031__auto__,msg_hist,msg_names,msg){
return (function (state_50799){
var state_val_50800 = (state_50799[(1)]);
if((state_val_50800 === (7))){
var inst_50727 = (state_50799[(2)]);
var state_50799__$1 = state_50799;
if(cljs.core.truth_(inst_50727)){
var statearr_50801_50847 = state_50799__$1;
(statearr_50801_50847[(1)] = (8));

} else {
var statearr_50802_50848 = state_50799__$1;
(statearr_50802_50848[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50800 === (20))){
var inst_50793 = (state_50799[(2)]);
var state_50799__$1 = state_50799;
var statearr_50803_50849 = state_50799__$1;
(statearr_50803_50849[(2)] = inst_50793);

(statearr_50803_50849[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50800 === (27))){
var inst_50789 = (state_50799[(2)]);
var state_50799__$1 = state_50799;
var statearr_50804_50850 = state_50799__$1;
(statearr_50804_50850[(2)] = inst_50789);

(statearr_50804_50850[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50800 === (1))){
var inst_50720 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_50799__$1 = state_50799;
if(cljs.core.truth_(inst_50720)){
var statearr_50805_50851 = state_50799__$1;
(statearr_50805_50851[(1)] = (2));

} else {
var statearr_50806_50852 = state_50799__$1;
(statearr_50806_50852[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50800 === (24))){
var inst_50791 = (state_50799[(2)]);
var state_50799__$1 = state_50799;
var statearr_50807_50853 = state_50799__$1;
(statearr_50807_50853[(2)] = inst_50791);

(statearr_50807_50853[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50800 === (4))){
var inst_50797 = (state_50799[(2)]);
var state_50799__$1 = state_50799;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50799__$1,inst_50797);
} else {
if((state_val_50800 === (15))){
var inst_50795 = (state_50799[(2)]);
var state_50799__$1 = state_50799;
var statearr_50808_50854 = state_50799__$1;
(statearr_50808_50854[(2)] = inst_50795);

(statearr_50808_50854[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50800 === (21))){
var inst_50754 = (state_50799[(2)]);
var state_50799__$1 = state_50799;
var statearr_50809_50855 = state_50799__$1;
(statearr_50809_50855[(2)] = inst_50754);

(statearr_50809_50855[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50800 === (31))){
var inst_50778 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_50799__$1 = state_50799;
if(cljs.core.truth_(inst_50778)){
var statearr_50810_50856 = state_50799__$1;
(statearr_50810_50856[(1)] = (34));

} else {
var statearr_50811_50857 = state_50799__$1;
(statearr_50811_50857[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50800 === (32))){
var inst_50787 = (state_50799[(2)]);
var state_50799__$1 = state_50799;
var statearr_50812_50858 = state_50799__$1;
(statearr_50812_50858[(2)] = inst_50787);

(statearr_50812_50858[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50800 === (33))){
var inst_50776 = (state_50799[(2)]);
var state_50799__$1 = state_50799;
var statearr_50813_50859 = state_50799__$1;
(statearr_50813_50859[(2)] = inst_50776);

(statearr_50813_50859[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50800 === (13))){
var inst_50741 = figwheel.client.heads_up.clear.call(null);
var state_50799__$1 = state_50799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50799__$1,(16),inst_50741);
} else {
if((state_val_50800 === (22))){
var inst_50758 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50759 = figwheel.client.heads_up.append_warning_message.call(null,inst_50758);
var state_50799__$1 = state_50799;
var statearr_50814_50860 = state_50799__$1;
(statearr_50814_50860[(2)] = inst_50759);

(statearr_50814_50860[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50800 === (36))){
var inst_50785 = (state_50799[(2)]);
var state_50799__$1 = state_50799;
var statearr_50815_50861 = state_50799__$1;
(statearr_50815_50861[(2)] = inst_50785);

(statearr_50815_50861[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50800 === (29))){
var inst_50769 = (state_50799[(2)]);
var state_50799__$1 = state_50799;
var statearr_50816_50862 = state_50799__$1;
(statearr_50816_50862[(2)] = inst_50769);

(statearr_50816_50862[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50800 === (6))){
var inst_50722 = (state_50799[(7)]);
var state_50799__$1 = state_50799;
var statearr_50817_50863 = state_50799__$1;
(statearr_50817_50863[(2)] = inst_50722);

(statearr_50817_50863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50800 === (28))){
var inst_50765 = (state_50799[(2)]);
var inst_50766 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50767 = figwheel.client.heads_up.display_warning.call(null,inst_50766);
var state_50799__$1 = (function (){var statearr_50818 = state_50799;
(statearr_50818[(8)] = inst_50765);

return statearr_50818;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50799__$1,(29),inst_50767);
} else {
if((state_val_50800 === (25))){
var inst_50763 = figwheel.client.heads_up.clear.call(null);
var state_50799__$1 = state_50799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50799__$1,(28),inst_50763);
} else {
if((state_val_50800 === (34))){
var inst_50780 = figwheel.client.heads_up.flash_loaded.call(null);
var state_50799__$1 = state_50799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50799__$1,(37),inst_50780);
} else {
if((state_val_50800 === (17))){
var inst_50747 = (state_50799[(2)]);
var state_50799__$1 = state_50799;
var statearr_50819_50864 = state_50799__$1;
(statearr_50819_50864[(2)] = inst_50747);

(statearr_50819_50864[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50800 === (3))){
var inst_50739 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_50799__$1 = state_50799;
if(cljs.core.truth_(inst_50739)){
var statearr_50820_50865 = state_50799__$1;
(statearr_50820_50865[(1)] = (13));

} else {
var statearr_50821_50866 = state_50799__$1;
(statearr_50821_50866[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50800 === (12))){
var inst_50735 = (state_50799[(2)]);
var state_50799__$1 = state_50799;
var statearr_50822_50867 = state_50799__$1;
(statearr_50822_50867[(2)] = inst_50735);

(statearr_50822_50867[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50800 === (2))){
var inst_50722 = (state_50799[(7)]);
var inst_50722__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_50799__$1 = (function (){var statearr_50823 = state_50799;
(statearr_50823[(7)] = inst_50722__$1);

return statearr_50823;
})();
if(cljs.core.truth_(inst_50722__$1)){
var statearr_50824_50868 = state_50799__$1;
(statearr_50824_50868[(1)] = (5));

} else {
var statearr_50825_50869 = state_50799__$1;
(statearr_50825_50869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50800 === (23))){
var inst_50761 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_50799__$1 = state_50799;
if(cljs.core.truth_(inst_50761)){
var statearr_50826_50870 = state_50799__$1;
(statearr_50826_50870[(1)] = (25));

} else {
var statearr_50827_50871 = state_50799__$1;
(statearr_50827_50871[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50800 === (35))){
var state_50799__$1 = state_50799;
var statearr_50828_50872 = state_50799__$1;
(statearr_50828_50872[(2)] = null);

(statearr_50828_50872[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50800 === (19))){
var inst_50756 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_50799__$1 = state_50799;
if(cljs.core.truth_(inst_50756)){
var statearr_50829_50873 = state_50799__$1;
(statearr_50829_50873[(1)] = (22));

} else {
var statearr_50830_50874 = state_50799__$1;
(statearr_50830_50874[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50800 === (11))){
var inst_50731 = (state_50799[(2)]);
var state_50799__$1 = state_50799;
var statearr_50831_50875 = state_50799__$1;
(statearr_50831_50875[(2)] = inst_50731);

(statearr_50831_50875[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50800 === (9))){
var inst_50733 = figwheel.client.heads_up.clear.call(null);
var state_50799__$1 = state_50799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50799__$1,(12),inst_50733);
} else {
if((state_val_50800 === (5))){
var inst_50724 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_50799__$1 = state_50799;
var statearr_50832_50876 = state_50799__$1;
(statearr_50832_50876[(2)] = inst_50724);

(statearr_50832_50876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50800 === (14))){
var inst_50749 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_50799__$1 = state_50799;
if(cljs.core.truth_(inst_50749)){
var statearr_50833_50877 = state_50799__$1;
(statearr_50833_50877[(1)] = (18));

} else {
var statearr_50834_50878 = state_50799__$1;
(statearr_50834_50878[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50800 === (26))){
var inst_50771 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_50799__$1 = state_50799;
if(cljs.core.truth_(inst_50771)){
var statearr_50835_50879 = state_50799__$1;
(statearr_50835_50879[(1)] = (30));

} else {
var statearr_50836_50880 = state_50799__$1;
(statearr_50836_50880[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50800 === (16))){
var inst_50743 = (state_50799[(2)]);
var inst_50744 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50745 = figwheel.client.heads_up.display_exception.call(null,inst_50744);
var state_50799__$1 = (function (){var statearr_50837 = state_50799;
(statearr_50837[(9)] = inst_50743);

return statearr_50837;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50799__$1,(17),inst_50745);
} else {
if((state_val_50800 === (30))){
var inst_50773 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50774 = figwheel.client.heads_up.display_warning.call(null,inst_50773);
var state_50799__$1 = state_50799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50799__$1,(33),inst_50774);
} else {
if((state_val_50800 === (10))){
var inst_50737 = (state_50799[(2)]);
var state_50799__$1 = state_50799;
var statearr_50838_50881 = state_50799__$1;
(statearr_50838_50881[(2)] = inst_50737);

(statearr_50838_50881[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50800 === (18))){
var inst_50751 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50752 = figwheel.client.heads_up.display_exception.call(null,inst_50751);
var state_50799__$1 = state_50799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50799__$1,(21),inst_50752);
} else {
if((state_val_50800 === (37))){
var inst_50782 = (state_50799[(2)]);
var state_50799__$1 = state_50799;
var statearr_50839_50882 = state_50799__$1;
(statearr_50839_50882[(2)] = inst_50782);

(statearr_50839_50882[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50800 === (8))){
var inst_50729 = figwheel.client.heads_up.flash_loaded.call(null);
var state_50799__$1 = state_50799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50799__$1,(11),inst_50729);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43031__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__42919__auto__,c__43031__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42920__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42920__auto____0 = (function (){
var statearr_50843 = [null,null,null,null,null,null,null,null,null,null];
(statearr_50843[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42920__auto__);

(statearr_50843[(1)] = (1));

return statearr_50843;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42920__auto____1 = (function (state_50799){
while(true){
var ret_value__42921__auto__ = (function (){try{while(true){
var result__42922__auto__ = switch__42919__auto__.call(null,state_50799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42922__auto__;
}
break;
}
}catch (e50844){if((e50844 instanceof Object)){
var ex__42923__auto__ = e50844;
var statearr_50845_50883 = state_50799;
(statearr_50845_50883[(5)] = ex__42923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50884 = state_50799;
state_50799 = G__50884;
continue;
} else {
return ret_value__42921__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42920__auto__ = function(state_50799){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42920__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42920__auto____1.call(this,state_50799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42920__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42920__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42920__auto__;
})()
;})(switch__42919__auto__,c__43031__auto__,msg_hist,msg_names,msg))
})();
var state__43033__auto__ = (function (){var statearr_50846 = f__43032__auto__.call(null);
(statearr_50846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43031__auto__);

return statearr_50846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43033__auto__);
});})(c__43031__auto__,msg_hist,msg_names,msg))
);

return c__43031__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__43031__auto___50947 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43031__auto___50947,ch){
return (function (){
var f__43032__auto__ = (function (){var switch__42919__auto__ = ((function (c__43031__auto___50947,ch){
return (function (state_50930){
var state_val_50931 = (state_50930[(1)]);
if((state_val_50931 === (1))){
var state_50930__$1 = state_50930;
var statearr_50932_50948 = state_50930__$1;
(statearr_50932_50948[(2)] = null);

(statearr_50932_50948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50931 === (2))){
var state_50930__$1 = state_50930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50930__$1,(4),ch);
} else {
if((state_val_50931 === (3))){
var inst_50928 = (state_50930[(2)]);
var state_50930__$1 = state_50930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50930__$1,inst_50928);
} else {
if((state_val_50931 === (4))){
var inst_50918 = (state_50930[(7)]);
var inst_50918__$1 = (state_50930[(2)]);
var state_50930__$1 = (function (){var statearr_50933 = state_50930;
(statearr_50933[(7)] = inst_50918__$1);

return statearr_50933;
})();
if(cljs.core.truth_(inst_50918__$1)){
var statearr_50934_50949 = state_50930__$1;
(statearr_50934_50949[(1)] = (5));

} else {
var statearr_50935_50950 = state_50930__$1;
(statearr_50935_50950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50931 === (5))){
var inst_50918 = (state_50930[(7)]);
var inst_50920 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_50918);
var state_50930__$1 = state_50930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50930__$1,(8),inst_50920);
} else {
if((state_val_50931 === (6))){
var state_50930__$1 = state_50930;
var statearr_50936_50951 = state_50930__$1;
(statearr_50936_50951[(2)] = null);

(statearr_50936_50951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50931 === (7))){
var inst_50926 = (state_50930[(2)]);
var state_50930__$1 = state_50930;
var statearr_50937_50952 = state_50930__$1;
(statearr_50937_50952[(2)] = inst_50926);

(statearr_50937_50952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50931 === (8))){
var inst_50922 = (state_50930[(2)]);
var state_50930__$1 = (function (){var statearr_50938 = state_50930;
(statearr_50938[(8)] = inst_50922);

return statearr_50938;
})();
var statearr_50939_50953 = state_50930__$1;
(statearr_50939_50953[(2)] = null);

(statearr_50939_50953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__43031__auto___50947,ch))
;
return ((function (switch__42919__auto__,c__43031__auto___50947,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__42920__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__42920__auto____0 = (function (){
var statearr_50943 = [null,null,null,null,null,null,null,null,null];
(statearr_50943[(0)] = figwheel$client$heads_up_plugin_$_state_machine__42920__auto__);

(statearr_50943[(1)] = (1));

return statearr_50943;
});
var figwheel$client$heads_up_plugin_$_state_machine__42920__auto____1 = (function (state_50930){
while(true){
var ret_value__42921__auto__ = (function (){try{while(true){
var result__42922__auto__ = switch__42919__auto__.call(null,state_50930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42922__auto__;
}
break;
}
}catch (e50944){if((e50944 instanceof Object)){
var ex__42923__auto__ = e50944;
var statearr_50945_50954 = state_50930;
(statearr_50945_50954[(5)] = ex__42923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50955 = state_50930;
state_50930 = G__50955;
continue;
} else {
return ret_value__42921__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__42920__auto__ = function(state_50930){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__42920__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__42920__auto____1.call(this,state_50930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__42920__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__42920__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__42920__auto__;
})()
;})(switch__42919__auto__,c__43031__auto___50947,ch))
})();
var state__43033__auto__ = (function (){var statearr_50946 = f__43032__auto__.call(null);
(statearr_50946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43031__auto___50947);

return statearr_50946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43033__auto__);
});})(c__43031__auto___50947,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__43031__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43031__auto__){
return (function (){
var f__43032__auto__ = (function (){var switch__42919__auto__ = ((function (c__43031__auto__){
return (function (state_50976){
var state_val_50977 = (state_50976[(1)]);
if((state_val_50977 === (1))){
var inst_50971 = cljs.core.async.timeout.call(null,(3000));
var state_50976__$1 = state_50976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50976__$1,(2),inst_50971);
} else {
if((state_val_50977 === (2))){
var inst_50973 = (state_50976[(2)]);
var inst_50974 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_50976__$1 = (function (){var statearr_50978 = state_50976;
(statearr_50978[(7)] = inst_50973);

return statearr_50978;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50976__$1,inst_50974);
} else {
return null;
}
}
});})(c__43031__auto__))
;
return ((function (switch__42919__auto__,c__43031__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__42920__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__42920__auto____0 = (function (){
var statearr_50982 = [null,null,null,null,null,null,null,null];
(statearr_50982[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__42920__auto__);

(statearr_50982[(1)] = (1));

return statearr_50982;
});
var figwheel$client$enforce_project_plugin_$_state_machine__42920__auto____1 = (function (state_50976){
while(true){
var ret_value__42921__auto__ = (function (){try{while(true){
var result__42922__auto__ = switch__42919__auto__.call(null,state_50976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42922__auto__;
}
break;
}
}catch (e50983){if((e50983 instanceof Object)){
var ex__42923__auto__ = e50983;
var statearr_50984_50986 = state_50976;
(statearr_50984_50986[(5)] = ex__42923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50987 = state_50976;
state_50976 = G__50987;
continue;
} else {
return ret_value__42921__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__42920__auto__ = function(state_50976){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__42920__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__42920__auto____1.call(this,state_50976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__42920__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__42920__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__42920__auto__;
})()
;})(switch__42919__auto__,c__43031__auto__))
})();
var state__43033__auto__ = (function (){var statearr_50985 = f__43032__auto__.call(null);
(statearr_50985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43031__auto__);

return statearr_50985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43033__auto__);
});})(c__43031__auto__))
);

return c__43031__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__43031__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43031__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__43032__auto__ = (function (){var switch__42919__auto__ = ((function (c__43031__auto__,figwheel_version,temp__4657__auto__){
return (function (state_51010){
var state_val_51011 = (state_51010[(1)]);
if((state_val_51011 === (1))){
var inst_51004 = cljs.core.async.timeout.call(null,(2000));
var state_51010__$1 = state_51010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51010__$1,(2),inst_51004);
} else {
if((state_val_51011 === (2))){
var inst_51006 = (state_51010[(2)]);
var inst_51007 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_51008 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_51007);
var state_51010__$1 = (function (){var statearr_51012 = state_51010;
(statearr_51012[(7)] = inst_51006);

return statearr_51012;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51010__$1,inst_51008);
} else {
return null;
}
}
});})(c__43031__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__42919__auto__,c__43031__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42920__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42920__auto____0 = (function (){
var statearr_51016 = [null,null,null,null,null,null,null,null];
(statearr_51016[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42920__auto__);

(statearr_51016[(1)] = (1));

return statearr_51016;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42920__auto____1 = (function (state_51010){
while(true){
var ret_value__42921__auto__ = (function (){try{while(true){
var result__42922__auto__ = switch__42919__auto__.call(null,state_51010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42922__auto__;
}
break;
}
}catch (e51017){if((e51017 instanceof Object)){
var ex__42923__auto__ = e51017;
var statearr_51018_51020 = state_51010;
(statearr_51018_51020[(5)] = ex__42923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51021 = state_51010;
state_51010 = G__51021;
continue;
} else {
return ret_value__42921__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42920__auto__ = function(state_51010){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42920__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42920__auto____1.call(this,state_51010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42920__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42920__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42920__auto__;
})()
;})(switch__42919__auto__,c__43031__auto__,figwheel_version,temp__4657__auto__))
})();
var state__43033__auto__ = (function (){var statearr_51019 = f__43032__auto__.call(null);
(statearr_51019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43031__auto__);

return statearr_51019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43033__auto__);
});})(c__43031__auto__,figwheel_version,temp__4657__auto__))
);

return c__43031__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__51022){
var map__51026 = p__51022;
var map__51026__$1 = ((((!((map__51026 == null)))?((((map__51026.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51026.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51026):map__51026);
var file = cljs.core.get.call(null,map__51026__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__51026__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__51026__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__51028 = "";
var G__51028__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__51028),cljs.core.str("file "),cljs.core.str(file)].join(''):G__51028);
var G__51028__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__51028__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__51028__$1);
if(cljs.core.truth_((function (){var and__38383__auto__ = line;
if(cljs.core.truth_(and__38383__auto__)){
return column;
} else {
return and__38383__auto__;
}
})())){
return [cljs.core.str(G__51028__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__51028__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__51029){
var map__51036 = p__51029;
var map__51036__$1 = ((((!((map__51036 == null)))?((((map__51036.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51036.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51036):map__51036);
var ed = map__51036__$1;
var formatted_exception = cljs.core.get.call(null,map__51036__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__51036__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__51036__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__51038_51042 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__51039_51043 = null;
var count__51040_51044 = (0);
var i__51041_51045 = (0);
while(true){
if((i__51041_51045 < count__51040_51044)){
var msg_51046 = cljs.core._nth.call(null,chunk__51039_51043,i__51041_51045);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_51046);

var G__51047 = seq__51038_51042;
var G__51048 = chunk__51039_51043;
var G__51049 = count__51040_51044;
var G__51050 = (i__51041_51045 + (1));
seq__51038_51042 = G__51047;
chunk__51039_51043 = G__51048;
count__51040_51044 = G__51049;
i__51041_51045 = G__51050;
continue;
} else {
var temp__4657__auto___51051 = cljs.core.seq.call(null,seq__51038_51042);
if(temp__4657__auto___51051){
var seq__51038_51052__$1 = temp__4657__auto___51051;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51038_51052__$1)){
var c__39206__auto___51053 = cljs.core.chunk_first.call(null,seq__51038_51052__$1);
var G__51054 = cljs.core.chunk_rest.call(null,seq__51038_51052__$1);
var G__51055 = c__39206__auto___51053;
var G__51056 = cljs.core.count.call(null,c__39206__auto___51053);
var G__51057 = (0);
seq__51038_51042 = G__51054;
chunk__51039_51043 = G__51055;
count__51040_51044 = G__51056;
i__51041_51045 = G__51057;
continue;
} else {
var msg_51058 = cljs.core.first.call(null,seq__51038_51052__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_51058);

var G__51059 = cljs.core.next.call(null,seq__51038_51052__$1);
var G__51060 = null;
var G__51061 = (0);
var G__51062 = (0);
seq__51038_51042 = G__51059;
chunk__51039_51043 = G__51060;
count__51040_51044 = G__51061;
i__51041_51045 = G__51062;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__51063){
var map__51066 = p__51063;
var map__51066__$1 = ((((!((map__51066 == null)))?((((map__51066.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51066.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51066):map__51066);
var w = map__51066__$1;
var message = cljs.core.get.call(null,map__51066__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__38383__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__38383__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__38383__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__51078 = cljs.core.seq.call(null,plugins);
var chunk__51079 = null;
var count__51080 = (0);
var i__51081 = (0);
while(true){
if((i__51081 < count__51080)){
var vec__51082 = cljs.core._nth.call(null,chunk__51079,i__51081);
var k = cljs.core.nth.call(null,vec__51082,(0),null);
var plugin = cljs.core.nth.call(null,vec__51082,(1),null);
if(cljs.core.truth_(plugin)){
var pl_51088 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__51078,chunk__51079,count__51080,i__51081,pl_51088,vec__51082,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_51088.call(null,msg_hist);
});})(seq__51078,chunk__51079,count__51080,i__51081,pl_51088,vec__51082,k,plugin))
);
} else {
}

var G__51089 = seq__51078;
var G__51090 = chunk__51079;
var G__51091 = count__51080;
var G__51092 = (i__51081 + (1));
seq__51078 = G__51089;
chunk__51079 = G__51090;
count__51080 = G__51091;
i__51081 = G__51092;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__51078);
if(temp__4657__auto__){
var seq__51078__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51078__$1)){
var c__39206__auto__ = cljs.core.chunk_first.call(null,seq__51078__$1);
var G__51093 = cljs.core.chunk_rest.call(null,seq__51078__$1);
var G__51094 = c__39206__auto__;
var G__51095 = cljs.core.count.call(null,c__39206__auto__);
var G__51096 = (0);
seq__51078 = G__51093;
chunk__51079 = G__51094;
count__51080 = G__51095;
i__51081 = G__51096;
continue;
} else {
var vec__51085 = cljs.core.first.call(null,seq__51078__$1);
var k = cljs.core.nth.call(null,vec__51085,(0),null);
var plugin = cljs.core.nth.call(null,vec__51085,(1),null);
if(cljs.core.truth_(plugin)){
var pl_51097 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__51078,chunk__51079,count__51080,i__51081,pl_51097,vec__51085,k,plugin,seq__51078__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_51097.call(null,msg_hist);
});})(seq__51078,chunk__51079,count__51080,i__51081,pl_51097,vec__51085,k,plugin,seq__51078__$1,temp__4657__auto__))
);
} else {
}

var G__51098 = cljs.core.next.call(null,seq__51078__$1);
var G__51099 = null;
var G__51100 = (0);
var G__51101 = (0);
seq__51078 = G__51098;
chunk__51079 = G__51099;
count__51080 = G__51100;
i__51081 = G__51101;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args51102 = [];
var len__39470__auto___51109 = arguments.length;
var i__39471__auto___51110 = (0);
while(true){
if((i__39471__auto___51110 < len__39470__auto___51109)){
args51102.push((arguments[i__39471__auto___51110]));

var G__51111 = (i__39471__auto___51110 + (1));
i__39471__auto___51110 = G__51111;
continue;
} else {
}
break;
}

var G__51104 = args51102.length;
switch (G__51104) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51102.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__51105_51113 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__51106_51114 = null;
var count__51107_51115 = (0);
var i__51108_51116 = (0);
while(true){
if((i__51108_51116 < count__51107_51115)){
var msg_51117 = cljs.core._nth.call(null,chunk__51106_51114,i__51108_51116);
figwheel.client.socket.handle_incoming_message.call(null,msg_51117);

var G__51118 = seq__51105_51113;
var G__51119 = chunk__51106_51114;
var G__51120 = count__51107_51115;
var G__51121 = (i__51108_51116 + (1));
seq__51105_51113 = G__51118;
chunk__51106_51114 = G__51119;
count__51107_51115 = G__51120;
i__51108_51116 = G__51121;
continue;
} else {
var temp__4657__auto___51122 = cljs.core.seq.call(null,seq__51105_51113);
if(temp__4657__auto___51122){
var seq__51105_51123__$1 = temp__4657__auto___51122;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51105_51123__$1)){
var c__39206__auto___51124 = cljs.core.chunk_first.call(null,seq__51105_51123__$1);
var G__51125 = cljs.core.chunk_rest.call(null,seq__51105_51123__$1);
var G__51126 = c__39206__auto___51124;
var G__51127 = cljs.core.count.call(null,c__39206__auto___51124);
var G__51128 = (0);
seq__51105_51113 = G__51125;
chunk__51106_51114 = G__51126;
count__51107_51115 = G__51127;
i__51108_51116 = G__51128;
continue;
} else {
var msg_51129 = cljs.core.first.call(null,seq__51105_51123__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_51129);

var G__51130 = cljs.core.next.call(null,seq__51105_51123__$1);
var G__51131 = null;
var G__51132 = (0);
var G__51133 = (0);
seq__51105_51113 = G__51130;
chunk__51106_51114 = G__51131;
count__51107_51115 = G__51132;
i__51108_51116 = G__51133;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__39477__auto__ = [];
var len__39470__auto___51138 = arguments.length;
var i__39471__auto___51139 = (0);
while(true){
if((i__39471__auto___51139 < len__39470__auto___51138)){
args__39477__auto__.push((arguments[i__39471__auto___51139]));

var G__51140 = (i__39471__auto___51139 + (1));
i__39471__auto___51139 = G__51140;
continue;
} else {
}
break;
}

var argseq__39478__auto__ = ((((0) < args__39477__auto__.length))?(new cljs.core.IndexedSeq(args__39477__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__39478__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__51135){
var map__51136 = p__51135;
var map__51136__$1 = ((((!((map__51136 == null)))?((((map__51136.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51136.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51136):map__51136);
var opts = map__51136__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq51134){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51134));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e51142){if((e51142 instanceof Error)){
var e = e51142;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e51142;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__51146){
var map__51147 = p__51146;
var map__51147__$1 = ((((!((map__51147 == null)))?((((map__51147.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51147.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51147):map__51147);
var msg_name = cljs.core.get.call(null,map__51147__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1466122646701