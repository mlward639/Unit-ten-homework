const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('Initialization', () => {
        it('can generate an engineer', () => {
            const Nancy = new Engineer();
            expect(typeof(Nancy)).toEqual('object');
        })
    })
    describe('Name', () => {
        it('can generate engineer name', () => {
            const testName = 'Nancy';
            Nancy = new Engineer(testName);
            expect(Nancy.name).toEqual(testName);
        })
    })
    describe('ID', () => {
        it('can generate ID', () => {
            const testId = 101;
            Nancy = new Engineer("Nancy", testId);
            expect(Nancy.id).toEqual(testId);
        })
    })
    describe('Email', () => {
        it('can generate email', () => {
            const testEmail = 'nancy@gmail.com';
            Nancy = new Engineer("Nancy", 101, testEmail);
            expect(Nancy.email).toEqual(testEmail);
        })
    })
    describe('GitHub', () => {
        it('can generate github username', () => {
            const testGithub = 'nancy123';
            Nancy = new Engineer("Nancy", 101, 'nancy@gmail.com', testGithub);
            expect(Nancy.github).toEqual(testGithub);
        })
    })
    describe('Role', () => {
        it('role set to engineer', () => {
            const testRole = 'engineer';
            Nancy = new Engineer();
            expect(Nancy.role).toEqual(testRole);
        })
    })
    describe('getName', () => {
        it('can get name from getName function', () => {
            const testName = 'Nancy';
            Nancy = new Engineer(testName);
            expect(Nancy.getName()).toEqual(testName);
        })
    })
    describe('getId', () => {
        it('can get ID from getId function', () => {
            const testId = 101;
            Nancy = new Engineer('Nancy', testId);
            expect(Nancy.getId()).toEqual(testId)
        })
    describe('getEmail', () => {
        it('can get email from getEmail function', () => {
            const testEmail = 'nancy@gmail.com';
            Nancy = new Engineer('Nancy', 101, testEmail);
            expect(Nancy.getEmail()).toEqual(testEmail);
        })
    })
    describe('getGithub', () => {
        it('can get github username from getGithub function', () => {
            const testGithub = 'nancy123';
            Nancy = new Engineer('Nancy', 101, 'nancy@gmail.com', testGithub);
            expect(Nancy.getGithub()).toEqual(testGithub);
        })
    })
    describe('getRole', () => {
        it('can get role from getRole function', () => {
            const testRole = 'engineer';
            Nancy = new Engineer();
            expect(Nancy.getRole()).toEqual(testRole);
        })
    })
    })
})

