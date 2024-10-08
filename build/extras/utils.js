"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parseName = (nameFromRequest) => {
    if (!isString(nameFromRequest)) {
        throw new Error('Incorrect or missing name');
    }
    return nameFromRequest;
};
const parseMail = (mailFromRequest) => {
    if (!isString(mailFromRequest)) {
        throw new Error('Incorrect or missing mail');
    }
    return mailFromRequest;
};
const parsePassword = (passwordFromRequest) => {
    if (!isString(passwordFromRequest)) {
        throw new Error('Incorrect or missing password');
    }
    return passwordFromRequest;
};
const parseComment = (commentFromRequest) => {
    if (!isString(commentFromRequest)) {
        throw new Error('Incorrect or missing comment');
    }
    return commentFromRequest;
};
const parseExperiencias = (commentFromRequest) => {
    if (!isString(commentFromRequest)) {
        throw new Error('Incorrect or missing comment');
    }
    return commentFromRequest;
};
const isString = (string) => {
    return typeof string == 'string' || string instanceof String;
};
const toNewUser = (object) => {
    const newUser = {
        name: parseName(object.name),
        mail: parseMail(object.mail),
        password: parsePassword(object.password),
        comment: parseComment(object.comment),
        experiencias: parseExperiencias(object.experiencias)
    };
    return newUser;
};
exports.default = toNewUser;
