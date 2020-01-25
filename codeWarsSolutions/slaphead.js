let bald = function(head) {
  let count = 0;
  let hair = head.replace(new RegExp("/", "g"), function() {
    count++;
    return "-";
  });
  let answer = [];
  if (count === 1) {
    answer.push(hair, "Unicorn!");
  } else if (count === 2) {
    answer.push(hair, "Homer!");
  } else if (count >= 3 && count <= 5) {
    answer.push(hair, "Careless!");
  } else if (count === 0) {
    answer.push(hair, "Clean!");
  } else if (count > 5) {
    answer.push(hair, "Hobo!");
  }

  return answer;
};

module.exports.bald = bald;
