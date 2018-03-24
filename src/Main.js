import {Block} from './Block';
import {BlockChain} from "./BlockChain";
import {MessageType} from "./MessageType";
import {AiChain} from "./AiChain";

import express from "express";
import bodyParser from 'body-parser';
import webSocket from 'ws';

const http_port = process.env.HTTP_PORT || 3001;
const p2p_port = process.env.P2P_PORT || 6001;

const initialPeers = process.env.PEERS ? process.env.PEERS.split(',') : [];

const sockets = [];

const aichain = new AiChain();
