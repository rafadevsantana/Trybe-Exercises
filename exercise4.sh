#!/bin/bash

FILE='/home/santana/Documentos'

if [ -e "$FILE" ]
then
    echo "o caminho $FILE está habilido!"
fi
if [ -w "$FILE" ]
then
    echo "Você tem permissão para editar $FILE"
else 
    echo "Você nao permissão de editar $FILE"
fi