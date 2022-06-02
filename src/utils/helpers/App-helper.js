// Whenever a user clicks on 'universe113' image this is fired
export function myImageHandler(container, pointer, state, setState, e) {
  if (container.style.visibility === 'visible') {
     pointer.style.display = 'none';
     pointer.style.visibility = 'hidden';
     container.style.visibility = 'hidden';
   } else {
     let foo = e.offsetX - 25;
     let bar = e.offsetY - 25;
     pointer.style.display = 'block';
     container.style.visibility = 'visible';
     pointer.style.visibility = 'visible';
     pointer.style.left = foo + 'px';
     pointer.style.top = bar + 'px';
     state.top = bar;
     state.left = foo;
     setState({...state});
   }
}

// A function that returns a conditional, if clause uses falsy because arg "waldo" is an async value.
export const returnCondition = (waldo, statePointer,) => {
  if (!waldo) {
    console.log('has not loaded');
    return;
  } else {
    return (statePointer.top >= (waldo.top - 20) && statePointer.top <= (waldo.top + 20) 
    && statePointer.left >= (waldo.left - 20) && statePointer.left <= (waldo.left + 20))
  }
};