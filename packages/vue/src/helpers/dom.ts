export function getNearestOverflowContainer(element: HTMLElement) {
  let nearestOverflowContainer = null;
  let parentNode = element.parentNode as HTMLElement;

  if (!parentNode) {
    return element;
  }

  while (nearestOverflowContainer === null) {
    if (
      parentNode.scrollHeight > parentNode.clientHeight ||
      parentNode.scrollWidth > parentNode.clientWidth
    ) {
      nearestOverflowContainer = parentNode;
    }

    if (!nearestOverflowContainer && parentNode.parentNode) {
      parentNode = parentNode.parentNode as HTMLElement;
      if (parentNode.tagName === "BODY") {
        nearestOverflowContainer = parentNode;
      }
    } else {
      nearestOverflowContainer = parentNode;
    }
  }

  return nearestOverflowContainer;
}

export function getRandomId(prefix = "el") {
  return prefix + "_" + Math.floor(Math.random() * 1000000);
}
