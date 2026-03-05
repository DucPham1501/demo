from fastapi import FastAPI

app = FastAPI()


@app.get("/hello")
def hello():
    print("hello world")
    return {"message": "hello world"}
