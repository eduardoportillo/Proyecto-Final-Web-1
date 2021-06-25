--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2
-- Dumped by pg_dump version 13.2

-- Started on 2021-06-25 16:53:28

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO postgres;

--
-- TOC entry 3008 (class 0 OID 0)
-- Dependencies: 3
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 204 (class 1259 OID 24597)
-- Name: anuncio; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.anuncio (
    anuncio_id integer NOT NULL,
    titulo text NOT NULL,
    descripcion text NOT NULL,
    precio double precision NOT NULL,
    url_fotografia text NOT NULL,
    activado boolean NOT NULL,
    usuario_id integer NOT NULL
);


ALTER TABLE public.anuncio OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 24593)
-- Name: anuncio_anuncio_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.anuncio_anuncio_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.anuncio_anuncio_id_seq OWNER TO postgres;

--
-- TOC entry 3009 (class 0 OID 0)
-- Dependencies: 202
-- Name: anuncio_anuncio_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.anuncio_anuncio_id_seq OWNED BY public.anuncio.anuncio_id;


--
-- TOC entry 203 (class 1259 OID 24595)
-- Name: anuncio_usuario_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.anuncio_usuario_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.anuncio_usuario_id_seq OWNER TO postgres;

--
-- TOC entry 3010 (class 0 OID 0)
-- Dependencies: 203
-- Name: anuncio_usuario_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.anuncio_usuario_id_seq OWNED BY public.anuncio.usuario_id;


--
-- TOC entry 201 (class 1259 OID 24584)
-- Name: usuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuario (
    apellido text NOT NULL,
    correo text NOT NULL,
    nombre text NOT NULL,
    usuario_id integer NOT NULL,
    password text NOT NULL
);


ALTER TABLE public.usuario OWNER TO postgres;

--
-- TOC entry 200 (class 1259 OID 24582)
-- Name: usuario_usuario_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.usuario_usuario_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.usuario_usuario_id_seq OWNER TO postgres;

--
-- TOC entry 3011 (class 0 OID 0)
-- Dependencies: 200
-- Name: usuario_usuario_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.usuario_usuario_id_seq OWNED BY public.usuario.usuario_id;


--
-- TOC entry 2861 (class 2604 OID 24600)
-- Name: anuncio anuncio_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.anuncio ALTER COLUMN anuncio_id SET DEFAULT nextval('public.anuncio_anuncio_id_seq'::regclass);


--
-- TOC entry 2862 (class 2604 OID 24601)
-- Name: anuncio usuario_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.anuncio ALTER COLUMN usuario_id SET DEFAULT nextval('public.anuncio_usuario_id_seq'::regclass);


--
-- TOC entry 2860 (class 2604 OID 24587)
-- Name: usuario usuario_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario ALTER COLUMN usuario_id SET DEFAULT nextval('public.usuario_usuario_id_seq'::regclass);


--
-- TOC entry 3002 (class 0 OID 24597)
-- Dependencies: 204
-- Data for Name: anuncio; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.anuncio (anuncio_id, titulo, descripcion, precio, url_fotografia, activado, usuario_id) FROM stdin;
62	iphone 12	celular de alta gama	8888	/img/6430177789501732-1624577301301.jpg	t	60
60	hola	hola	1234	/img/7304144294402144-1624516766124.png	t	49
58	estoy modificando anuncio	descripcion	999999	/img/6626891486550894-1624315602066.jpg	t	49
55	prueba	descr	1234	/img/5793345341750253-1624313738443.jpg	t	49
\.


--
-- TOC entry 2999 (class 0 OID 24584)
-- Dependencies: 201
-- Data for Name: usuario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuario (apellido, correo, nombre, usuario_id, password) FROM stdin;
admin	admin	admin	49	admin
portillo	eduportillo@gmail.com	eduardo	51	1234
gutierrez	jose@gmail.com	jose carlos	60	1234
portillo	edu@gmail.com	eduardo	61	1234
\.


--
-- TOC entry 3012 (class 0 OID 0)
-- Dependencies: 202
-- Name: anuncio_anuncio_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.anuncio_anuncio_id_seq', 62, true);


--
-- TOC entry 3013 (class 0 OID 0)
-- Dependencies: 203
-- Name: anuncio_usuario_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.anuncio_usuario_id_seq', 1, false);


--
-- TOC entry 3014 (class 0 OID 0)
-- Dependencies: 200
-- Name: usuario_usuario_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuario_usuario_id_seq', 61, true);


--
-- TOC entry 2866 (class 2606 OID 24606)
-- Name: anuncio anuncio_id_fk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.anuncio
    ADD CONSTRAINT anuncio_id_fk PRIMARY KEY (anuncio_id);


--
-- TOC entry 2864 (class 2606 OID 24592)
-- Name: usuario usuario_id_fk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_id_fk PRIMARY KEY (usuario_id);


--
-- TOC entry 2867 (class 2606 OID 24607)
-- Name: anuncio anuncio_usuario_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.anuncio
    ADD CONSTRAINT anuncio_usuario_id_fkey FOREIGN KEY (usuario_id) REFERENCES public.usuario(usuario_id);


-- Completed on 2021-06-25 16:53:30

--
-- PostgreSQL database dump complete
--

