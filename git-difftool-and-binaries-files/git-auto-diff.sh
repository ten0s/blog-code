#!/bin/bash

DIFF=meld

if [[ $# -ne 2 ]]; then
    echo "Usage: $(basename $0) <FILE1.EXT> <FILE2.EXT>"
    exit 1
fi

FILE1=$1
FILE2=$2

EXT1=${FILE1##*.}
EXT2=${FILE2##*.}

if [[ $EXT1 != $EXT2 ]]; then
    echo "Extensions don't match, fallback to $DIFF"
    $DIFF $FILE1 $FILE2
    exit
fi

TEXTCONV=$(git config --get diff.$EXT1.textconv)
if [[ $? -ne 0 ]]; then
    echo "'$EXT1' textconv not found, fallback to $DIFF"
    $DIFF $FILE1 $FILE2
    exit
fi

$DIFF <($TEXTCONV $FILE1) <($TEXTCONV $FILE2)
