import { Controller, Delete, Get, Post, Put, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('todo')
export class TodoController {
    @Get()
    getTodos( @Req() request:Request,@Res() response:Response){
        console.log(response);
        
        console.log('get to do list');
        
        return 'get to do list'
    }

    @Post()
    addTodo(){
        console.log('add todo');
        
        return 'add todo'
    }

    @Delete()
    deleteList(){
        console.log('delete a element from the list');
        
        return 'delete a element from the list'
    }
    @Put()
    modifierTodo(){
        console.log('edit to do list');
        
        return 'edit to do list'
    }
}
