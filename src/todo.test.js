import { addItem, todoArray, addData } from '../modules/app.js';

describe('addItem', () => {
  // Reset the todoArray and local storage before each test
  beforeEach(() => {
    todoArray.length = 0;
  });

  test('should add a new item to the todoArray', () => {
    const initialLength = todoArray.length;
    const itemDescription = 'Test Item';
    addItem(itemDescription);
    expect(todoArray.length).toBe(initialLength + 1);
    expect(todoArray[0]).toMatchObject({
      description: itemDescription,
      completed: false,
      index: 1,
    });
  });
});
