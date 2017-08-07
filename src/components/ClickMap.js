module.exports = function sketch(p){
  const circleMap = [
    [0,   0,   0,   0,   0,   1,   1,   1,   0,   0,   0,   0,   0],  
    [0,   0,   0,   1,   2,   3,   4,   3,   2,   1,   0,   0,   0],
    [0,   0,   1,   4,   9,  15,  18,  15,   9,   4,   1,   0,   0],
    [0,   1,   4,  13,  29,  48,  57,  48,  29,  13,   4,   1,   0],
    [0,   2,   9,  29,  67, 111, 131, 111,  67,  29,   9,   2,   0],
    [1,   3,  15,  48, 111, 183, 216, 183, 111,  48,  15,   3,   1],
    [1,   4,  18,  57, 131, 216, 255, 216, 131,  57,  18,   4,   1],
    [1,   3,  15,  48, 111, 183, 216, 183, 111,  48,  15,   3,   1],
    [0,   2,   9,  29,  67, 111, 131, 111,  67,  29,   9,   2,   0],
    [0,   1,   4,  13,  29,  48,  57,  48,  29,  13,   4,   1,   0],
    [0,   0,   1,   4,   9,  15,  18,  15,   9,   4,   1,   0,   0],
    [0,   0,   0,   1,   2,   3,   4,   3,   2,   1,   0,   0,   0],
    [0,   0,   0,   0,   0,   1,   1,   1,   0,   0,   0,   0,   0]
  ];

  const clickStore = [];

  const wdth = 400;
  const hght = 500;
  // create a 2d matrix with wdth and hght and fill with 0s

  p.setup = function() {
    createCanvas(wdth, hght);
    //background(240, 240, 240);
  };

  // helper function which will apply a kernel to a matrix at (x, y)
  p.applyHeat = (x, y, kernel, matrix) => {
    // console.log('applyHeat');
    // console.log('x:', x);
    // console.log('y', y);
    // offset is to translate the corner of the kernel so its center is (x, y)
    const offset = Math.floor(kernel.length/2);
    const cornerX = x - offset;
    const cornerY = y - offset;

    // filter out literal edge-cases
    if (cornerX && cornerY && (x + offset) < matrix[0].length && (y + offset) < matrix.length) {
      // console.log('found a click...')
      // console.log(kernel.length);

      for(i = 0; i < kernel.length; i++) {
        // console.log('row', kernel[i]);
        for(j = 0; j < kernel.length; j++) {
          // console.log('cell', matrix[cornerY + i][cornerX + j])
          matrix[cornerY + i][cornerX + j] += kernel[i][j]
        }
        // console.table(matrix);
      }
      // kernel.forEach((row, rowInd) => {
      //   console.table(matrix);
      //   row.forEach((cell, columnInd) => {
      //     console.log('coordinates: [' + (cornerY + rowInd) +'][' + (cornerX + columnInd) + ']' )
      //     console.log('current value:', matrix[cornerY + rowInd][cornerX + columnInd]);
      //     console.log('add', cell)
      //     matrix[cornerY + rowInd][cornerX + columnInd] += cell;
      //     console.log('new cell value', matrix[cornerY + rowInd][cornerX + columnInd])
      //   })
      // })
    }

    return
    // return matrix
    // do you need to do this? -- side effects
  }

  p.matrixMax = (matrix) => {
    let max = 0;
    matrix.forEach(row => {
    row.forEach(cell => {
      max = Math.max(max, cell)
    })
    })
    console.log('max:', max)
  }

  p.mapClicks = (clicskObj, displayWidth, displayHeight) => {
    const len = Object.keys(clicksObj)[0].length;
    const clicks = [];
    for (let i = 0; i < len; i++) {
      let x = map(clicksObj.x[i], 0, 0, clicksObj.documentWidth[i], clicksObj.displayWidth[i]);
      let y = map(clicksObj.y[i], 0, 0, clicksObj.documentHeight[i], clicksObj.displayHeight[i]);
      clicks.push({
        x: x,
        y: y
      })
    }
    return clicks;
  }

  p.mapMatrix = (matrix, fromLow, toLow, fromHigh, toHigh) => {
    matrix.forEach(row => {
      row.forEach(cell => {
        cell = map(cell, fromLow, toLow, fromHigh, toHigh)
      })
    })
  }

  p.heatMap = (width, height, clicks) => {
    console.log('mapping...')
    // should output an image 
    //  const mapMap = new Array(height).fill(new Array(width).fill(0));
    const mapMap = [];

    for (let i = 0; i < height; i++) {
      mapMap.push([]);
      for(let j = 0; j < width; j++) {
        mapMap[i].push(0);
      }
    }
    //  console.table(mapMap);

    clicks.forEach(click => applyHeat(click.x, click.y, circleMap, mapMap));

    const max = matrixMax(mapMap);

    mapMatrix(mapMap, 0, 0, max, 255);

    // create a new image with width and height   
    // const result = createImage(width, height)
    // result.loadPixels();

    colorMode(HSB);

    mapMap.forEach((row, rowInd) => {
      row.forEach((cell, columnInd) => {
        if(!!cell) {
          const clr = color(255 - cell, 255, 255, cell);
          set(columnInd, rowInd, clr);
        }
          // pixels[4 * (((rowInd) * row.length) + (columnInd))] = 0;
          // pixels[4 * (((rowInd) * row.length) + (columnInd)) + 1] = 0;
          // pixels[4 * (((rowInd) * row.length) + (columnInd)) + 2] = 0;
          // pixels[4 * (((rowInd) * row.length) + (columnInd)) + 3] = cell;
      })
    })

    // result.updatePixels();

    console.log('mapped');

    updatePixels()
    // return result
  }


  p.mousePressed = function() {
    console.log('CLICK');
    console.log('x:', mouseX);
    console.log('y:', mouseY);

    clickStore.push({x: mouseX, y: mouseY});
  }

  p.keyPressed = function() {
    background(240, 240, 240);
    heatMap(width, height, clickStore);
  }
}