const httpMocks = require('node-mocks-http');
const TodoController = require("../../controller/todo.controller");
const TodoModel = require('../../model/todo.model');
const newTodo = require('../mock-data/new-todo-data.json');

TodoModel.create = jest.fn();

// creating request, response and next methods
let req, res, next;
beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = null;
});

describe("TodoController.createTodo", () => {

  beforeEach(() => {
    // mocking body
    req.body = newTodo;
  })

  it('should should have a createTodo function', () => {
    expect(typeof TodoController.createTodo).toBe('function');
  });

  it('should call TodoModel.create', () => {
    TodoController.createTodo(req, res, next);
    expect(TodoModel.create).toBeCalledWith(newTodo);
  });

  it("should return 201 http code", () => {
    TodoController.createTodo(req, res, next);

    expect(res.statusCode).toBe(201);
    expect(res._isEndCalled()).toBeTruthy();
  });

  it("should return a new TO DO in the response", () => {
    TodoModel.create.mockReturnValue(newTodo);
    TodoController.createTodo(req, res, next);
    expect(res._getJSONData()).toStrictEqual(newTodo);
  });
}); 
