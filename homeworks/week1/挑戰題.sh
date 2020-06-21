#!/bin/bash
for i in $(seq 1 $1);
do 
	touch "$i.js";
done