& "I:\Programs\Git\cmd\git.exe" config --global user.name "MicaLovesKPOP"
& "I:\Programs\Git\cmd\git.exe" config --global user.email "MicaLovesKPOP@users.noreply.github.com"
& "I:\Programs\Git\cmd\git.exe" init
& "I:\Programs\Git\cmd\git.exe" add .
& "I:\Programs\Git\cmd\git.exe" commit -m "Initial commit"
& "I:\Programs\Git\cmd\git.exe" branch -M main
& "I:\Programs\Git\cmd\git.exe" remote add origin https://github.com/MicaLovesKPOP/upgrade-tool.git 
& "I:\Programs\Git\cmd\git.exe" push -u origin main