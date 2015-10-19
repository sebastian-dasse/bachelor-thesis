package foo

/*
  a bar class
 */
object Bar {
  def main(args: Array[String]): Unit = {
    println("Hello world!")

    val list = List(1, 5, 4, 3, 2).map(x => 2 * x)
    val sorted  = msort(list)
    println(sorted)
  }

  // a merge sort implementation
  def msort[T](xs: List[T])(implicit ord: Ordering[T]): List[T] = {
    val n = xs.length/2
    if (n == 0) xs
    else {
      def merge(xs: List[T], ys: List[T]): List[T] = (xs, ys) match {
        case (xs1, Nil) => xs1
        case (Nil, ys1) => ys1
        case (x :: xs1, y :: ys1) =>
          if (ord.lt(x, y)) x :: merge(xs1, ys)
          else y :: merge(xs, ys1)
      }
      val (fst, snd) = xs.splitAt(n)
      merge(msort(fst), msort(snd))
    }
  }
}