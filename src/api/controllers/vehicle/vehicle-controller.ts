import { Body, Get, JsonController, Post, Param } from "routing-controllers";

import { Vehicle } from "../../models";

@JsonController("/example-entity")
export class VehicleController {
    @Get('/vehicle/:id')
    getOne(@Param('id'), id: string): Promise<Vehicle[]> {
        return Vehicle.find(id: id);
    }

    @Post()
    create(@Body() body: Pick<ExampleEntity, "exampleColumn">): Promise<ExampleEntity> {
        return ExampleEntity.create(body).save();
    }
}