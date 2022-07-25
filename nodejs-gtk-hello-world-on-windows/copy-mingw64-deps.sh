#!/bin/bash

mkdir -p ./lib/girepository-1.0/

function copy-dlls() {
    LOG=$1
    SRC=$2
    DST=$3
    cat $LOG | sed -En 's/.*Unable to load DLL: "([^"]*\.dll)".*/\1/p' | while read dll; do
        if [[ -f $SRC/$dll ]]; then
            cp -v $SRC/$dll $DST/
        fi
    done
}

function copy-typelibs() {
    LOG=$1
    SRC=$2
    DST=$3
    cat $LOG | sed -En "s/.*Typelib file for namespace '([^']+)'.*/\1/p" | while read typelib; do
        cp -v $SRC/$typelib* $DST/
    done
}

TEMP=$(mktemp)
while true; do
    cdb -c "g;q" node index.js &>$TEMP
    if [[ $? -ne 0 ]]; then
        copy-dlls $TEMP /mingw64/bin/ ./
        copy-typelibs $TEMP /mingw64/lib/girepository-1.0/ ./lib/girepository-1.0/
    else
        break
    fi
done
rm $TEMP

exit 0
