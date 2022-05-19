# leetCode
This repository was created to practice leetcode problems, and study Algorithms and Data Structures

# Time Complexity
## Array vs Linked-List

### Arrays
- Data is stored in contiguous memory locations
- Need to rearrange all elements if a new element needs to be added anywhere in the array except for when it is the start or the end of the array
- Contiguous memory is not always guaranteed, so linkelists provide an alternative

### Linked List
- Data is not stored in contiguous memory locations
- Because the data is stored with a pointer to the next element, adding or removing an element are constant time functions
- Because the data is not stored in contiguous memory, finding an element in a linked list is computationally expensive.
  
Time Complexity

| Parameter                        | Array   | Linked List   |
| ---------------------------------| ------- | --------------|
| Add a new element                | O(n)    | O(1)          |
| Delete an existing element       | O(n)    | O(1)          |
| Find an element                  | O(1)    | O(n)          |
