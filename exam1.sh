#!/bin/bash
function exam1(){
	mkdir $1
	cd ./$1
	touch run.sh
	touch lib.so
	chmod +x run.sh
	ln -s ./run.sh ./go.sh
}

exam1 $1


