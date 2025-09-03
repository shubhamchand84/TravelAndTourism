@echo off
echo ===================================================
echo Git Repository Setup for Travel Diary Application
echo ===================================================
echo.

REM Check if Git is installed
git --version > nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo Error: Git is not installed or not in your PATH.
    echo Please install Git from https://git-scm.com/downloads
    exit /b 1
)

echo Git is installed. Proceeding with repository setup...
echo.

REM Initialize Git repository if .git directory doesn't exist
if not exist ".git" (
    echo Initializing new Git repository...
    git init
    echo.
) else (
    echo Git repository already initialized.
    echo.
)

REM Create uploads directory with .gitkeep
if not exist "backend\uploads" (
    echo Creating uploads directory...
    mkdir "backend\uploads"
    type nul > "backend\uploads\.gitkeep"
    echo.
)

REM Check if files are already staged
git status --porcelain > nul
if %ERRORLEVEL% EQU 0 (
    echo Adding files to staging area...
    git add .
    echo.
)

REM Prompt for commit message
set /p COMMIT_MSG=Enter commit message (default: "Initial commit of Travel Diary application"): 
if "%COMMIT_MSG%"=="" set COMMIT_MSG=Initial commit of Travel Diary application

echo.
echo Committing files with message: "%COMMIT_MSG%"
git commit -m "%COMMIT_MSG%"
echo.

REM Prompt for remote repository URL
set /p REPO_URL=Enter your remote repository URL (e.g., https://github.com/yourusername/travel-diary-app.git): 
if "%REPO_URL%"=="" (
    echo No repository URL provided. Skipping remote setup.
    echo You can add a remote later with: git remote add origin YOUR_REPO_URL
    goto :end
)

REM Add remote origin
echo.
echo Adding remote repository...
git remote add origin %REPO_URL%

REM Determine default branch name (main or master)
git branch | findstr "main" > nul
if %ERRORLEVEL% EQU 0 (
    set BRANCH=main
) else (
    set BRANCH=master
)

REM Push to remote repository
echo.
echo Pushing to remote repository (branch: %BRANCH%)...
git push -u origin %BRANCH%

:end
echo.
echo ===================================================
echo Git repository setup complete!
echo See GIT_SETUP.md for more information on Git usage.
echo ===================================================

pause