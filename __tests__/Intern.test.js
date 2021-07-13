const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('Initialization', () => {
        it('can generate an intern', () => {
            const Nancy = new Intern();
            expect(typeof(Nancy)).toEqual('object');
        })
    })
    describe('Name', () => {
        it('can generate intern name', () => {
            const testName = 'Nancy';
            Nancy = new Intern(testName);
            expect(Nancy.name).toEqual(testName);
        })
    })
    describe('ID', () => {
        it('can generate ID', () => {
            const testId = 101;
            Nancy = new Intern("Nancy", testId);
            expect(Nancy.id).toEqual(testId);
        })
    })
    describe('Email', () => {
        it('can generate email', () => {
            const testEmail = 'nancy@gmail.com';
            Nancy = new Intern("Nancy", 101, testEmail);
            expect(Nancy.email).toEqual(testEmail);
        })
    })
    describe('School', () => {
        it('can generate school', () => {
            const testSchool = 'GA Tech';
            Nancy = new Intern("Nancy", 101, 'nancy@gmail.com', testSchool);
            expect(Nancy.school).toEqual(testSchool);
        })
    })
    describe('Role', () => {
        it('role set to intern', () => {
            const testRole = 'intern';
            Nancy = new Intern();
            expect(Nancy.role).toEqual(testRole);
        })
    })
    describe('getName', () => {
        it('can get name from getName function', () => {
            const testName = 'Nancy';
            Nancy = new Intern(testName);
            expect(Nancy.getName()).toEqual(testName);
        })
    })
    describe('getId', () => {
        it('can get ID from getId function', () => {
            const testId = 101;
            Nancy = new Intern('Nancy', testId);
            expect(Nancy.getId()).toEqual(testId)
        })
    describe('getEmail', () => {
        it('can get email from getEmail function', () => {
            const testEmail = 'nancy@gmail.com';
            Nancy = new Intern('Nancy', 101, testEmail);
            expect(Nancy.getEmail()).toEqual(testEmail);
        })
    })
    describe('getSchool', () => {
        it('can get school from getSchool function', () => {
            const testSchool = 'GA Tech';
            Nancy = new Intern('Nancy', 101, 'nancy@gmail.com', testSchool);
            expect(Nancy.getSchool()).toEqual(testSchool);
        })
    })
    describe('getRole', () => {
        it('can get role from getRole function', () => {
            const testRole = 'intern';
            Nancy = new Intern();
            expect(Nancy.getRole()).toEqual(testRole);
        })
    })
    })
})

