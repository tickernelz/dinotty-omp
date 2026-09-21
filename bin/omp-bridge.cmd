@echo off
setlocal
node "%~dp0omp-bridge" %*
exit /b %ERRORLEVEL%
