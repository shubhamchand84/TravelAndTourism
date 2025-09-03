@echo off
echo ===================================================
echo Git Helper for Travel Diary Application
echo ===================================================
echo.

REM Check if Git is installed
git --version > nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo Error: Git is not installed or not in your PATH.
    echo Please install Git from https://git-scm.com/downloads
    exit /b 1
)

:menu
cls
echo Git Helper Menu:
echo ===================================================
echo 1. Check repository status
echo 2. Stage all changes
echo 3. Commit changes
echo 4. Push to remote repository
echo 5. Pull from remote repository
echo 6. Create a new branch
echo 7. Switch to a different branch
echo 8. View commit history
echo 9. Exit
echo ===================================================
echo.

set /p CHOICE=Enter your choice (1-9): 

if "%CHOICE%"=="1" goto :status
if "%CHOICE%"=="2" goto :stage
if "%CHOICE%"=="3" goto :commit
if "%CHOICE%"=="4" goto :push
if "%CHOICE%"=="5" goto :pull
if "%CHOICE%"=="6" goto :create_branch
if "%CHOICE%"=="7" goto :switch_branch
if "%CHOICE%"=="8" goto :history
if "%CHOICE%"=="9" goto :end

echo Invalid choice. Please try again.
pause
goto :menu

:status
echo.
echo Current Git Status:
echo ===================================================
git status
echo ===================================================
echo.
pause
goto :menu

:stage
echo.
echo Staging all changes...
git add .
echo All changes have been staged.
echo.
pause
goto :menu

:commit
echo.
set /p COMMIT_MSG=Enter commit message: 
if "%COMMIT_MSG%"=="" (
    echo Commit message cannot be empty.
    pause
    goto :commit
)
git commit -m "%COMMIT_MSG%"
echo.
pause
goto :menu

:push
echo.
echo Current branches:
git branch
echo.
set /p BRANCH=Enter branch name to push (default: current branch): 
if "%BRANCH%"=="" (
    for /f "tokens=2" %%i in ('git branch --show-current') do set BRANCH=%%i
)
echo Pushing to %BRANCH%...
git push origin %BRANCH%
echo.
pause
goto :menu

:pull
echo.
echo Current branches:
git branch
echo.
set /p BRANCH=Enter branch name to pull (default: current branch): 
if "%BRANCH%"=="" (
    for /f "tokens=2" %%i in ('git branch --show-current') do set BRANCH=%%i
)
echo Pulling from %BRANCH%...
git pull origin %BRANCH%
echo.
pause
goto :menu

:create_branch
echo.
set /p NEW_BRANCH=Enter new branch name: 
if "%NEW_BRANCH%"=="" (
    echo Branch name cannot be empty.
    pause
    goto :create_branch
)
git branch %NEW_BRANCH%
echo Branch %NEW_BRANCH% created.
echo.
set /p SWITCH=Switch to new branch? (y/n): 
if /i "%SWITCH%"=="y" (
    git checkout %NEW_BRANCH%
    echo Switched to branch %NEW_BRANCH%.
)
echo.
pause
goto :menu

:switch_branch
echo.
echo Available branches:
git branch
echo.
set /p BRANCH=Enter branch name to switch to: 
if "%BRANCH%"=="" (
    echo Branch name cannot be empty.
    pause
    goto :switch_branch
)
git checkout %BRANCH%
echo.
pause
goto :menu

:history
echo.
echo Commit History:
echo ===================================================
git log --oneline --graph --decorate -n 10
echo ===================================================
echo.
pause
goto :menu

:end
echo.
echo Exiting Git Helper.
echo.