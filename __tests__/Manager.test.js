const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Initialization', () => {
        it('can generate an manager', () => {
            const Nancy = new Manager();
            expect(typeof(Nancy)).toEqual('object');
        })
    })
    describe('Name', () => {
        it('can generate manager name', () => {
            const testName = 'Nancy';
            Nancy = new Manager(testName);
            expect(Nancy.name).toEqual(testName);
        })
    })
    describe('ID', () => {
        it('can generate ID', () => {
            const testId = 101;
            Nancy = new Manager("Nancy", testId);
            expect(Nancy.id).toEqual(testId);
        })
    })
    describe('Email', () => {
        it('can generate email', () => {
            const testEmail = 'nancy@gmail.com';
            Nancy = new Manager("Nancy", 101, testEmail);
            expect(Nancy.email).toEqual(testEmail);
        })
    })
    describe('OfficeNumber', () => {
        it('can generate office number', () => {
            const testOfficeNum = 123;
            Nancy = new Manager("Nancy", 101, 'nancy@gmail.com', testOfficeNum);
            expect(Nancy.officeNumber).toEqual(testOfficeNum);
        })
    })
    describe('Role', () => {
        it('role set to manager', () => {
            const testRole = 'manager';
            Nancy = new Manager();
            expect(Nancy.role).toEqual(testRole);
        })
    })
    describe('getName', () => {
        it('can get name from getName function', () => {
            const testName = 'Nancy';
            Nancy = new Manager(testName);
            expect(Nancy.getName()).toEqual(testName);
        })
    })
    describe('getId', () => {
        it('can get ID from getId function', () => {
            const testId = 101;
            Nancy = new Manager('Nancy', testId);
            expect(Nancy.getId()).toEqual(testId)
        })
    })
    describe('getEmail', () => {
        it('can get email from getEmail function', () => {
            const testEmail = 'nancy@gmail.com';
            Nancy = new Manager('Nancy', 101, testEmail);
            expect(Nancy.getEmail()).toEqual(testEmail);
        })
    })
    describe('getOfficeNumber', () => {
        it('can generate office number from getOfficeNumber function', () => {
            const testOfficeNum = 123;
            Nancy = new Manager("Nancy", 101, 'nancy@gmail.com', testOfficeNum);
            expect(Nancy.getOfficeNumber()).toEqual(testOfficeNum);
        })
    })
    describe('getRole', () => {
        it('can get role from getRole function', () => {
            const testRole = 'manager';
            Nancy = new Manager();
            expect(Nancy.getRole()).toEqual(testRole);
        })
    })
})
