function createBackgroundBlocks(blockContainer) {

    const width = blockContainer.clientWidth;
    const height = blockContainer.clientHeight;

    const blockHeight = 100; // Change to set blocks height

    const blockWidth = 100; // Change to set blocks width

    blockContainer.innerHTML = "";


    let blockXAmount;
    if (width % blockWidth === 0) {
        blockXAmount = width / blockWidth;
    } else {
        const blockXRest = width % blockWidth;
        blockXAmount = (width - blockXRest) / blockWidth + 1;
    }

    let blockYAmount;
    if (height % blockHeight === 0) {
        blockYAmount = height / blockHeight;
    } else {
        const blockYRest = height % blockHeight;
        blockYAmount = (height - blockYRest) / blockHeight + 1;
    }

    for (let i = 0; i < blockXAmount; i++) {
        const blockWrapper = document.createElement("div");
        blockWrapper.style.height = blockYAmount * blockHeight + "px";
        blockWrapper.style.width = blockWidth + "px";

        blockWrapper.classList.add("blockWrapper");
        for (let j = 0; j < blockYAmount; j++) {

            const block = document.createElement("div");
            block.classList.add("block");
            block.style.height = blockHeight + "px";
            block.style.width = blockWidth + "px";
            block.dataset.pos = `${i} + ${j}`

            blockWrapper.appendChild(block);
        }

        blockContainer.appendChild(blockWrapper);
    }
    window.onresize = () => createBackgroundBlocks(blockContainer)

}



