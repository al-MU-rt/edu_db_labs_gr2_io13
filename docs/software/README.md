# Реалізація інформаційного та програмного забезпечення

В рамках проекту розробляється: 
- SQL-скрипт для створення на початкового наповнення бази даних
```SQL
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `id` INT NOT NULL,
  `name` TEXT NULL,
  `login` TEXT NULL,
  `password` TEXT NULL,
  `email` TEXT NULL,
  `rights` TEXT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Filter`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Filter` (
  `id` INT NOT NULL,
  `add_source` TEXT NOT NULL,
  `del_source` TEXT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Request`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Request` (
  `id` INT NOT NULL,
  `title` TEXT NULL,
  `discription` TEXT NULL,
  `date` DATETIME NULL,
  `Filter_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Request_Filter1_idx` (`Filter_id` ASC) VISIBLE,
  CONSTRAINT `fk_Request_Filter1`
    FOREIGN KEY (`Filter_id`)
    REFERENCES `mydb`.`Filter` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Access`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Access` (
  `id` INT NOT NULL,
  `rights` TEXT NULL,
  `Request_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  INDEX `fk_Access_Request1_idx` (`Request_id` ASC) VISIBLE,
  PRIMARY KEY (`id`),
  INDEX `fk_Access_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_Access_Request1`
    FOREIGN KEY (`Request_id`)
    REFERENCES `mydb`.`Request` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Access_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `mydb`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Result`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Result` (
  `id` INT NOT NULL,
  `title` TEXT NULL,
  `description` TEXT NULL,
  `Request_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Result_Request1_idx` (`Request_id` ASC) VISIBLE,
  CONSTRAINT `fk_Result_Request1`
    FOREIGN KEY (`Request_id`)
    REFERENCES `mydb`.`Request` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Source`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Source` (
  `ban` TEXT NOT NULL,
  `update` TEXT NULL,
  `Request_id` INT NOT NULL,
  `id` INT NULL,
  PRIMARY KEY (`ban`),
  INDEX `fk_Source_Request1_idx` (`Request_id` ASC) VISIBLE,
  CONSTRAINT `fk_Source_Request1`
    FOREIGN KEY (`Request_id`)
    REFERENCES `mydb`.`Request` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
```
- RESTfull сервіс для управління даними

**main.py**
```Python
import pymysql
from app import app
from config import mysql
from flask import jsonify
from flask import flash, request

@app.route('/acs_rights', methods=['PUT'])
def acs_rights():
    try:
        _json = request.json
        _id = _json['id']
        _rights = _json['rights']
        if _rights and _id and request.method == 'PUT':
            conn = mysql.connect()
            cursor = conn.cursor(pymysql.cursors.DictCursor)
            sqlQuery = "UPDATE `user` SET rights = '{y}' WHERE `id` = '{x}'".format(y=_rights, x=_id)
            cursor.execute(sqlQuery)
            conn.commit()
            respone = jsonify('Changed successfully!')
            respone.status_code = 200
            return respone
        else:
            return showMessage()
    except Exception as e:
        print(e)
    finally:
        cursor.close()
        conn.close()

@app.route('/srch_info', methods=['GET'])
def srch_info():
    try:
        _json = request.json
        _id = _json['id']
        conn = mysql.connect()
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        cursor.execute("SELECT title, discription, date FROM request WHERE id = {x}".format(x=_id))
        empRows = cursor.fetchall()
        respone = jsonify(empRows)
        respone.status_code = 200
        return respone
    except Exception as e:
        print(e)
    finally:
        cursor.close()
        conn.close()



@app.route('/add_user', methods=['POST'])
def add_user():
    try:
        _json = request.json
        _id = _json['id']
        _name = _json['name']
        _email = _json['email']
        _login = _json['login']
        _password = _json['password']
        _rights = _json['rights']
        if _name and _email and _login and _password and _rights and _id and request.method == 'POST':
            conn = mysql.connect()
            cursor = conn.cursor(pymysql.cursors.DictCursor)
            sqlQuery = "INSERT INTO user(id, name, email, login, password, rights) VALUES(%s, %s, %s, %s, %s, %s)"
            bindData = (_id, _name, _email, _login, _password, _rights)
            cursor.execute(sqlQuery, bindData)
            conn.commit()
            respone = jsonify('Employee added successfully!')
            respone.status_code = 200
            return respone
        else:
            return showMessage()
    except Exception as e:
        print(e)
    finally:
        cursor.close()
        conn.close()

@app.route('/user')
def user():
    try:
        conn = mysql.connect()
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        cursor.execute("SELECT id, name, email, login, password, rights FROM user")
        empRows = cursor.fetchall()
        respone = jsonify(empRows)
        respone.status_code = 200
        return respone
    except Exception as e:
        print(e)
    finally:
        cursor.close()
        conn.close()

@app.errorhandler(404)
def showMessage(error=None):
    message = {
        'status': 404,
        'message': 'Record not found: ' + request.url,
    }
    respone = jsonify(message)
    respone.status_code = 404
    return respone


if __name__ == "__main__":
    app.run()
```
**config.py**
```python
from app import app
from flaskext.mysql import MySQL

mysql = MySQL()
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = ''
app.config['MYSQL_DATABASE_DB'] = 'mydb'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
mysql.init_app(app)
```
**app.py**
```python
from flask import Flask
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)
```