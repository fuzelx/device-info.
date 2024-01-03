document.addEventListener('DOMContentLoaded', function () {
    // Get device information
    document.getElementById('device-type').textContent = getDeviceType();
    document.getElementById('browser').textContent = getBrowser();
    document.getElementById('os').textContent = getOS();
    document.getElementById('resolution').textContent = getScreenResolution();
});

//function to get battery status

function batteryStatus(){
    const battery = navigator.get
}

// Function to get device type
function getDeviceType() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        ? 'Mobile'
        : 'Desktop';
}

// Function to get browser name and version
function getBrowser() {
    const userAgent = navigator.userAgent;
    const match = userAgent.match(/(chrome|firefox|safari|opera|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    const browser = match[1] || '';
    const version = match[2] || '';

    return `${browser} ${version}`;
}

// Function to get operating system
function getOS() {
    const userAgent = navigator.userAgent;
    const os = /(Windows|Mac OS|Linux|iOS|Android)/.exec(userAgent);
    return os ? os[0] : 'Unknown';
}

// Function to get screen resolution
function getScreenResolution() {
    return `${window.screen.width}x${window.screen.height}`;
}

//battery
document.addEventListener('DOMContentLoaded', function () {
    if ('getBattery' in navigator) {
        navigator.getBattery().then(function (battery) {
            updateBatteryLevel(battery.level * 100);

            battery.addEventListener('levelchange', function () {
                updateBatteryLevel(battery.level * 100);
            });
        });
    } else {
        document.getElementById('battery-level').textContent = 'Battery status not supported';
    }

    function updateBatteryLevel(level) {
        document.getElementById('battery-level').textContent = `Battery Level: ${level.toFixed(2)}%`;
    }
});


//connection info.
if ('connection' in navigator && 'effectiveType' in navigator.connection) {
    document.getElementById('connection-type').textContent = ` ${navigator.connection.effectiveType}`;
} else {
    document.getElementById('connection-type').textContent = 'Network Information API not supported';
}



//screen info
document.getElementById('screen-width').textContent = window.screen.width;
document.getElementById('screen-height').textContent = window.screen.height;
document.getElementById('pixel-depth').textContent = window.screen.pixelDepth;
