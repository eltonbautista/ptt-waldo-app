import { myWaldosArray, grabDocs } from "../../firebase/firebase-config";

describe('Tests for my waldo objects', () => {

  it('myWaldosArray value should be >1 objects', () => {

    expect(myWaldosArray).toStrictEqual([{}, {}, {}]);
  })

});