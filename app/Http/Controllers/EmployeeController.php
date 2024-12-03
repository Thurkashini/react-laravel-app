<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employee;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $employees = Employee::all();
        return response(['data'=>$employees],200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->only(['first_name','last_name','dob','phone_no','company_name','company_address']);
        Employee::create($data);
        return response(['message'=>'Employee created successfully'],200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Employee $employee)
    {
        return response(['data'=>$employee],200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,Employee $employee)
    {
        $data = $request->only(['first_name','last_name','dob','phone_no','company_name','company_address']);
        $employee->update($data);
        return response(['message'=>'Employee updated successfully'],200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Employee $employee)
    {
        $employee->delete();
        return response(['message'=>'Employee deleted successfully'],200);
    }
}
