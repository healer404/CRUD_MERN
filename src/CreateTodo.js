import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

export const CreateTodo = () => {

  const {register, handleSubmit} = useForm();

  const history = useHistory();
  
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    alert(JSON.stringify(data));
    history.push('/');
  });
  return (
        <div className="container">
          <div className="mt-3">
            <h3>Create ToDo Item</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="text">Text: </label>
                <input {...register("text")} type="text" name="text" id="text" className="form-control" auto-complete="off"/>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">Create Todo</button>
              </div>
            </form>
          </div>
        </div>
  );
};
