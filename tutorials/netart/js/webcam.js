

const webcam = document.querySelector('#webcam');

async function setupWebcam() {

    try {

        const stream = await navigator.mediaDevices.getUserMedia({ 
            video: true, audio: false })
        webcam.srcObject = stream;
    } catch (error) {
        console.error('error accessing webcam:');
    }
}

setupWebcam();