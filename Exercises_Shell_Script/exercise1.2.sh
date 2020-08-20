#!/bin/bash

  FILES=$@

  for F in $FS
    do
      if [ -f "$F" ]
        then
          echo "$F é um arquivo comum"
      elif [ -d "$F" ]
        then
          echo "$F é um diretório"
      else
          echo "$F é alguma outra coisa"
      fi
      ls -l $F
    done
