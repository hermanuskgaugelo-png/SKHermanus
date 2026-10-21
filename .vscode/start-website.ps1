$machinePath = [Environment]::GetEnvironmentVariable("Path", "Machine")
$userPath = [Environment]::GetEnvironmentVariable("Path", "User")
$env:Path = "$machinePath;$userPath"

npm.cmd run dev -- --host 0.0.0.0
exit $LASTEXITCODE
