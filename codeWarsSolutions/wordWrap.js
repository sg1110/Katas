function wrapper(inputString, n) {
  if (inputString.length < n) {
    return [inputString];
  }
  const words = inputString.split(" ");
  const lines = [];
  let currentLine = "";
  let i = 0;
  while (i < words.length) {
    const word = words[i];
    if (i === 0) {
      currentLine = word;
    } else if (currentLine.length + 1 + word.length <= n) {
      currentLine = currentLine + " " + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
    i++;
    if (i === words.length) {
      lines.push(currentLine);
    }
  }
  return lines;
}

function wrapper2(inputString, cutAt) {
  if (inputString.length < cutAt) {
    return [inputString];
  }
  const inputStringArray = inputString.split("");
  const emptySpaces = getEmptySpaceIndexes(inputStringArray);
  let lines = [];
  if (emptySpaces.length === 1 && emptySpaces[0] <= cutAt) {
    lines.push(inputString.split(" "));
    lines = lines.flat();
    return lines;
  }
  for (let i = 0; i < emptySpaces.length; i++) {
    if (emptySpaces[i] < cutAt - 1) {
      let emptySpaceIndex = 1;
      while (emptySpaceIndex <= emptySpaces.length) {
        if (emptySpaces[emptySpaceIndex] >= cutAt - 1) {
          lines.push(
            inputString.substr(
              emptySpaces[emptySpaceIndex - 1],
              emptySpaces[emptySpaceIndex]
            )
          );
        }
        if (emptySpaceIndex === emptySpaces.length - 1) {
          lines.push(inputString.substr(0, emptySpaces[emptySpaceIndex]));
        }
        emptySpaceIndex++;
      }
      i++;
    }
    if (i === emptySpaces.length - 1) {
      lines.push(inputString.substr(emptySpaces[i] + 1, inputString.length));
    }
  }
  return lines;
}

function getEmptySpaceIndexes(inputStringArray) {
  let emptySpacesIndex = [];
  for (let i = 0; i < inputStringArray.length; i++) {
    if (inputStringArray[i] === " ") {
      emptySpacesIndex.push(i);
    }
  }
  return emptySpacesIndex;
}

function wrapper3(inputString, cutAt) {
  if (inputString.length < cutAt) {
    return [inputString];
  }
  let lines = [];
  const characters = inputString.split("");
  const l = characters.length;

  let marker = 0;
  while (cutAt <= l) {
    if (characters[cutAt] === " ") {
      lines.push(characters.slice(marker, cutAt).join(""));
      marker = cutAt;
      cutAt = cutAt + cutAt;
    }
    if (characters[cutAt] !== " ") {
      findEmptySpace(characters[cutAt]);
      if (marker !== cutAt) {
        lines.push(characters.slice(marker, cutAt).join(""));
      }
      marker = cutAt;
      cutAt = cutAt + cutAt;
    }
    //below broken - fix
    if (marker < l) {
      lines.push(characters.slice(marker + 1, l).join(""));
    }
    return lines;
  }

  function findEmptySpace() {
    while (characters[cutAt] !== " ") {
      cutAt = cutAt - 1;
    }
  }
}

function wrapper4(inputString, cutAt) {
  let lines = [];
  let remainingLength = inputString.length;

  if (inputString.length <= cutAt) {
    return [inputString];
  }

  while (remainingLength > cutAt) {
    if (remainingLength < cutAt) {
      lines.push(inputString.substring(0, inputString.length));
      remainingLength = 0;
      cutAt = cutAt + cutAt;
    }

    if (inputString.charAt(cutAt) === " " && remainingLength !== 0) {
      lines.push(inputString.substring(0, cutAt));
      inputString = inputString.substring(cutAt + 1, remainingLength);
      remainingLength = remainingLength - cutAt;
    }

    if (inputString.charAt(cutAt) !== " " && remainingLength !== 0) {
      while (remainingLength > 0) {
        cutAt--;
        if (inputString.length < cutAt) {
          lines.push(inputString.substring(0, cutAt));
          inputString = inputString.substring(cutAt + 1, remainingLength);
          remainingLength = remainingLength - cutAt;
        }
        if (inputString.charAt(cutAt) === " ") {
          lines.push(inputString.substring(0, cutAt));
          inputString = inputString.substring(cutAt + 1, remainingLength);
          remainingLength = remainingLength - cutAt;
          break;
        }
      }
    }
  }
  if (remainingLength > 0) {
    lines.push(inputString.substring(0, remainingLength));
  }
  console.log(lines);
  return lines;
}

function wrapper5(inputString, cutAt) {
  let result = [];
  while (inputString.length) {
    const originalCut = cutAt;
    if (inputString.length <= cutAt) {
      result.push(inputString.substring(0, cutAt));
      inputString = inputString.substring(cutAt + 1);
    }
    if (inputString[cutAt] !== " ") {
      cutAt--;
    }
    if (inputString[cutAt] === " ") {
      result.push(inputString.substring(0, cutAt));
      inputString = inputString.substring(cutAt + 1);
      cutAt = originalCut;
    }
  }
  return result;
}

function recursiveWrap(inputString, cutAt) {
  if (inputString.length <= cutAt) {
    return inputString;
  }
  let splitAt;
  let indexOfEmpty = inputString.lastIndexOf(" ", cutAt);
  //if not " " need to find the index to cut at before next if
  console.log(indexOfEmpty);

  if (indexOfEmpty > -1) {
    splitAt = indexOfEmpty + 1;
  } else {
    splitAt = cutAt;
  }

  return (
    inputString.substring(0, splitAt - 1) +
    "\n" +
    recursiveWrap(inputString.substring(splitAt), cutAt)
  );
}

function recursiveWrap2(inputString, cutAt) {
  if (inputString.length <= cutAt) {
    return inputString;
  }
  let splitAt;
  if (inputString[cutAt] === " ") {
    splitAt = cutAt;
  } else {
    splitAt = cutAt;
    while (inputString[splitAt] !== " ") {
      splitAt = splitAt - 1;
    }
  }
  return (
    inputString.substring(0, splitAt) +
    "\n" +
    recursiveWrap(inputString.substring(splitAt + 1), cutAt)
  );
}

function wrapWithForEach(inputString, cutAt) {
  if (inputString.length < cutAt) {
    return [inputString];
  }
  let words = inputString.split(" ");
  let lines = [];
  let currentLine = "";
  words.forEach((word, i) => {
    if (i === 0) {
      currentLine = word;
    } else if (currentLine.length + word.length <= cutAt) {
      currentLine = currentLine + " " + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }

    if (i === words.length - 1) {
      lines.push(word);
    }
  });

  return lines;
}

function wrapCountForward(inputString, cutAt) {
  if (inputString.length < cutAt) {
    return [inputString];
  }
  let lines = [];
  while (inputString.length) {
    let lastIndex = findEmptySpaceIndexBeforeCut(cutAt);
    lines.push(inputString.substring(0, lastIndex));
    inputString = inputString.substring(lastIndex + 1);
  }

  function findEmptySpaceIndexBeforeCut(cutAt) {
    let index = 0;
    let counter = 0;
    while (counter <= cutAt) {
      if (inputString.charAt(counter) === " ") {
        index = counter;
      }
      if (counter === cutAt && index === 0) {
        index = counter;
      }
      counter++;
    }
    return index;
  }

  return lines;
}

function recursiveWrapCountForward(inputString, lineLimit) {
  let result = [];

  if (inputString.length <= lineLimit) {
    return [inputString];
  }

  const lastSpace = findLastSpaceBeforelineLimit(inputString, lineLimit);
  result.push(inputString.substring(0, lastSpace));
  result.push(
    ...recursiveWrapCountForward(
      inputString.substring(lastSpace + 1),
      lineLimit
    )
  );

  function findLastSpaceBeforelineLimit(inputString, lineLimit) {
    let lastSpace = 0;
    let lineIndex = 0;
    while (lineIndex <= lineLimit) {
      if (inputString[lineIndex] === " ") {
        lastSpace = lineIndex;
      }
      lineIndex++;
    }
    return lastSpace;
  }
  return result;
}

module.exports = {
  wrapper,
  wrapper2,
  wrapper3,
  wrapper4,
  wrapper5,
  recursiveWrap,
  recursiveWrap2,
  wrapWithForEach,
  wrapCountForward,
  recursiveWrapCountForward
};
