#!/bin/bash
GitHubLink="https://api.github.com/users/"$1

curl -s $GitHubLink > info.txt
cat info.txt | grep "\<name\>" | sed  s/'"'/' '/g | sed s/','/''/g | cut -d : -f 2
cat info.txt | grep "\<bio\>" | sed  s/'"'/' '/g | sed s/','/''/g | cut -d : -f 2
cat info.txt | grep "\<location\>" | sed  s/'"'/' '/g | sed s/','/''/g | cut -d : -f 2
cat info.txt | grep "\<blog\>" | sed  s/'"'/' '/g | sed s/','/''/g | cut -d : -f 2,3