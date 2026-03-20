#Configurando ambiente python

#Terminal do PowerShell x64 (Ativado ambiente virtual)
### Get-ExecutionPolicy -List --> RemoteSigned
obs: se estiver Restricted --> Unrestricted or AllSigned

### Set-ExecutionPolice Unrestricted -Force
### Set-ExecutionPolice AllSigned -Force

#Terminal do Vscode (criando e ativando ambiete virtual)
### python -m venv venv
obs: criando um lib venv no ambiente virtual venv

### .\venv\Scripts\activate
obs: para ativar o ambiente virtual

#Criando arquivos .py
### main.py
obs: apos adicionar o codigo para rodar o codigo devemos abrir o terminal
e buscar o arquivo no projeto e digitar:
### python + (nomedoArquivo.py)

#Instalar extensoes do vscode
##Python
##CodeRunner

Obs: O editor de VScode é generalista, um arquivo em .py é modulo python

### Comentarios
# comentarios nos modulos.py
"""
DocString

"""

*******SOBRE DEPENDENCIAS*******
1. Gerar a lista de dependências: Sempre que instalar algo novo, rode:
<requirements.txt>
2. Subir para o GitHub: O arquivo requirements.txt deve ser subido. É através dele que outros desenvolvedores saberão o que instalar 
### pip install -r requirements.txt.