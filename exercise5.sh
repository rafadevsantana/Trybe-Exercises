#!/bin/bash

read -p "Escreva um diretorio um aquivo ou qualquer coisa :" DIR 

if [ -f "$DIR" ]
    then
        echo "Este $DIR é um arquivo comun"
elif [ -d "$DIR" ]
    then    
        echo "Este $DIR é um diretorio"
else
        echo "outro tipo de arquivo ou diretorio"

fi
ls -l $DIR