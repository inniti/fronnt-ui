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
    } else {
      nearestOverflowContainer = parentNode;
    }
  }

  return nearestOverflowContainer;
}
