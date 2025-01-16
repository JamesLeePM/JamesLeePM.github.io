#!/bin/bash

# Clean up
rm -rf docs
rm -rf .next

# Build
echo "🏗️ Building..."
npm run build

# Start local server and open browser
echo "🚀 Starting local server..."
echo "📱 Visit http://localhost:3000 to check your build"
echo "Press Ctrl+C when done testing to continue with deployment"
npx serve docs

# After user stops the server, ask for confirmation
read -p "Ready to deploy? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
    # Deploy
    echo "📤 Deploying..."
    npm run deploy
    echo "✅ Deployment complete!"
else
    echo "❌ Deployment cancelled"
fi 