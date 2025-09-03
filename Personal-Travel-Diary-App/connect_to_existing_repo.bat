@echo off
echo ===================================================
echo Connect to Existing Git Repository
echo ===================================================
echo.

REM Check if Git is installed
git --version > nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo Error: Git is not installed or not in your PATH.
    echo Please install Git from https://git-scm.com/downloads
    exit /b 1
)

echo Git is installed. Proceeding with repository connection...
echo.

REM Check if .git directory exists and remove it if it does
if exist ".git" (
    echo Removing existing Git configuration...
    rmdir /s /q ".git"
    echo.
)

REM Create uploads directory with .gitkeep if it doesn't exist
if not exist "backend\uploads" (
    echo Creating uploads directory...
    mkdir "backend\uploads"
    type nul > "backend\uploads\.gitkeep"
    echo.
)

REM Set the repository URL
set REPO_URL=https://github.com/shubhamchand84/TravelAndTourism.git

echo Using repository: %REPO_URL%
echo.

REM Initialize Git and set up remote
echo Initializing Git repository...
git init
echo.

echo Adding remote repository...
git remote add origin %REPO_URL%
echo.

REM Fetch the remote repository without merging
echo Fetching remote repository information...
git fetch
echo.

REM Check if there are any existing branches
git branch -r
echo.

REM Ask user if they want to pull from the remote repository
set /p PULL_REMOTE=Do you want to pull from the remote repository? (y/n): 
if /i "%PULL_REMOTE%"=="y" (
    echo.
    echo Pulling from remote repository...
    
    REM Determine which branch to pull from
    git branch -r | findstr "main" > nul
    if %ERRORLEVEL% EQU 0 (
        set BRANCH=main
    ) else (
        git branch -r | findstr "master" > nul
        if %ERRORLEVEL% EQU 0 (
            set BRANCH=master
        ) else (
            echo No main or master branch found.
            set /p BRANCH=Enter the branch name to pull from: 
        )
    )
    
    git pull origin %BRANCH%
    echo.
)

REM Add all files to staging
echo Adding files to staging area...
git add .
echo.

REM Commit changes
set /p COMMIT_MSG=Enter commit message (default: "Update Travel Diary application"): 
if "%COMMIT_MSG%"=="" set COMMIT_MSG=Update Travel Diary application

echo.
echo Committing files with message: "%COMMIT_MSG%"
git commit -m "%COMMIT_MSG%"
echo.

REM Push to remote repository
echo Determining branch name...
git branch | findstr "main" > nul
if %ERRORLEVEL% EQU 0 (
    set BRANCH=main
) else (
    set BRANCH=master
)

echo.
set /p PUSH_CHANGES=Do you want to push your changes to the remote repository? (y/n): 
if /i "%PUSH_CHANGES%"=="y" (
    echo Pushing to remote repository (branch: %BRANCH%)...
    git push -u origin %BRANCH%
    echo.
) else (
    echo Skipping push to remote repository.
    echo You can push your changes later with: git push -u origin %BRANCH%
    echo.
)

:end
echo.
echo ===================================================
echo Repository connection complete!
echo ===================================================

pause