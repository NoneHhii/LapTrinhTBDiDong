async function downloadFile(filename:String) {
    console.log(`Downloading ${filename}...`);
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log("Download complete!");
    
}

downloadFile("virus.exe");