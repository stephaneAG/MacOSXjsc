#!/bin/jsc

debug('hello babe');

var myUtil = {};
var doingStuff = function(){
	debug("this is fucking yummy!!!");
};

myUtil.doStuff = doingStuff;

myUtil.doStuff();

quit();
