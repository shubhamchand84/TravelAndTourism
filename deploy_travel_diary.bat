@echo off
echo ===================================================
echo Travel Diary App - Production Deployment Setup
echo ===================================================
echo.

echo Installing backend dependencies...
cd "c:\Users\ASUS\Desktop\travelAndTourism\Personal-Travel-Diary-App\backend"
call npm install

echo.
echo Installing frontend dependencies...
cd "c:\Users\ASUS\Desktop\travelAndTourism\Personal-Travel-Diary-App\frontend"
call npm install

echo.
echo Setting up Cloudinary configuration...
echo.
echo Please enter your Cloudinary credentials:
echo (You can find these in your Cloudinary dashboard)
echo.

set /p CLOUD_NAME=Enter your Cloudinary cloud name: 
set /p API_KEY=Enter your Cloudinary API key: 
set /p API_SECRET=Enter your Cloudinary API secret: 

echo.
echo Updating .env file with Cloudinary credentials...

cd "c:\Users\ASUS\Desktop\travelAndTourism\Personal-Travel-Diary-App\backend"

:: Create a temporary file with the updated content
(for /f "tokens=*" %%a in (.env) do (
    echo %%a | findstr /C:"CLOUDINARY_CLOUD_NAME=" >nul
    if errorlevel 1 (
        echo %%a | findstr /C:"CLOUDINARY_API_KEY=" >nul
        if errorlevel 1 (
            echo %%a | findstr /C:"CLOUDINARY_API_SECRET=" >nul
            if errorlevel 1 (
                echo %%a | findstr /C:"STORAGE_TYPE=" >nul
                if errorlevel 1 (
                    echo %%a
                ) else (
                    echo STORAGE_TYPE=cloudinary
                )
            ) else (
                echo CLOUDINARY_API_SECRET=%API_SECRET%
            )
        ) else (
            echo CLOUDINARY_API_KEY=%API_KEY%
        )
    ) else (
        echo CLOUDINARY_CLOUD_NAME=%CLOUD_NAME%
    )
)) > .env.tmp

:: Replace the original file with the temporary file
move /y .env.tmp .env

echo.
echo ===================================================
echo Setup complete! Your Travel Diary app is now configured for production deployment.
echo.
echo Next steps:
echo 1. Build the frontend for production: npm run build
echo 2. Deploy the backend and frontend to your hosting provider
echo 3. See DEPLOYMENT.md for additional configuration options
echo ===================================================
echo.

pause