const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it('can create an employee', () => {
            const Nancy = new Employee();
            expect(typeof(Nancy)).toEqual('object');
        })
    })
    describe('Name', () => {
        it('can create employee name', () => {
            const testName = 'Nancy';
            Nancy = new Employee(testName);
            expect(Nancy.name).toEqual(testName);
        })
    })
    describe('ID', () => {
        it('can create ID', () => {
            const testId = 101;
            Nancy = new Employee("Nancy", testId);
            expect(Nancy.id).toEqual(testId);
        })
    })
    describe('Email', () => {
        it('can create email', () => {
            const testEmail = 'nancy@gmail.com';
            Nancy = new Employee("Nancy", 101, testEmail);
            expect(Nancy.email).toEqual(testEmail);
        })
    })
    describe('Role', () => {
        it('role set to employee', () => {
            const testRole = 'employee';
            Nancy = new Employee();
            expect(Nancy.role).toEqual(testRole);
        })
    })
    describe('getName', () => {
        it('can get name from getName function', () => {
            const testName = 'Nancy';
            Nancy = new Employee(testName);
            expect(Nancy.getName()).toEqual(testName);
        })
    })
    describe('getId', () => {
        it('can get ID from getId function', () => {
            const testId = 101;
            Nancy = new Employee('Nancy', testId);
            expect(Nancy.getId()).toEqual(testId)
        })
    describe('getEmail', () => {
        it('can get email from getEmail function', () => {
            const testEmail = 'nancy@gmail.com';
            Nancy = new Employee('Nancy', 101, testEmail);
            expect(Nancy.getEmail()).toEqual(testEmail);
        })
    })
    describe('getRole', () => {
        it('can get role from getRole function', () => {
            const testRole = 'employee';
            Nancy = new Employee();
            expect(Nancy.getRole()).toEqual(testRole);
        })
    })
    })
})

